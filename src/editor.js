var ipc = require('electron').ipcRenderer;
var remote = require('electron').remote;
var autocomplete = require('autocompleter');
var fs = require('fs');
var altIcon = require('./altIcon.js');
const path = require('path');
const amdLoader = require('./node_modules/monaco-editor/min/vs/loader.js');
const amdRequire = amdLoader.require;
const amdDefine = amdLoader.require.define;
scriptsDir = path.join(__dirname,'scripts');

var searchField = document.getElementById("searchfield");
var searchContainer = document.getElementById('input');
var hoverDiv = document.getElementById('hover');

/* -- fucntions */

function uriFromPath(_path) {
    var pathName = path.resolve(_path).replace(/\\/g, '/');
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
    }
    return encodeURI('file://' + pathName);
}

function getSripsList(){

    var allScripts = []
    var files = fs.readdirSync(scriptsDir);

    for (let i = 0; i < files.length; i++) {
        var file = files[i]
        var pathToFile = path.join(scriptsDir,file);
        if(!fs.lstatSync(pathToFile).isDirectory()){
            var contents = fs.readFileSync(pathToFile, 'utf8');

            if(file.indexOf('.js') >= 0 ){
                var infoStr = contents.substring(
                    contents.indexOf("/**") + 3, 
                    contents.indexOf("**/")
                );
                var infoObj = JSON.parse(infoStr);

                infoObj.fileName = file;
                infoObj.altIcon = altIcon.iconReplace(infoObj.icon);
                allScripts.push(infoObj)
            }   
        }
    }
    console.log("allScripts",allScripts);
    return allScripts;
}

function deduplicateResults(rawResults){
    rawResults = rawResults.filter((elem, index, self) => self.findIndex(
        (t) => {return (t.name === elem.name && t.tags === elem.tags)}) === index)
    return rawResults;
}

function restoreTitle(){
    document.getElementById('pasteInfo').style.background='rgb(41, 41, 41)'
    document.getElementById('pasteInfo').textContent="Press Alt+Shift+B to get started"
}
function infoTitle(text){
    document.getElementById('pasteInfo').style.background='rgb(41,107,177)'
    document.getElementById('pasteInfo').textContent=text
}
function errorTitle(text){
    document.getElementById('pasteInfo').style.background='#bc6c25'
    document.getElementById('pasteInfo').textContent=text
}

function executeSnippet(snippet){
    restoreTitle();
    var selectedStr = window.editor.getModel().getValueInRange(window.editor.getSelection())
    var wholeValue = window.editor.getValue()
    selected = true;
    if(selectedStr == ""){
        selectedStr = wholeValue;
        selected = false;
    }
    var snippetPath = path.join(scriptsDir,snippet.fileName);

    var input = {};
    input.text = selectedStr;
    input.fullText = wholeValue;
    input.postInfo = function (text){
        infoTitle(text)
    }
    input.postError = function(text){
        errorTitle(text)
    }

    var snippet = require(snippetPath).main;
    var result = snippet(input);

    if(typeof result != "undefined"){
        if(selected == true){
            selection = window.editor.getSelection()
            window.editor.executeEdits('', [{ range: selection, text: result.toString() }])
        }else{
            window.editor.getModel().setValue(result.toString())
        }
    }
}

function searchSnippet(toSearch){
    var results = [];
    var objects = window.scriptList;

    for(var i=0; i<objects.length; i++) {
        for(key in objects[i]) {
            var _temp_str = (objects[i][key]).toString().toLowerCase();
            if(_temp_str.indexOf(toSearch)!=-1) {
                results.push(objects[i]);
            }
        }
    }

    var dedupResults = deduplicateResults(results)
    return dedupResults;
}

function showInput(){
    searchContainer.style.display="block";
    hoverDiv.style.display="block";
    searchField.focus();
}

function hideInput(){
    searchContainer.style.display="none";
    hoverDiv.style.display="none";
    searchField.value = "";
}

/* -- event listeners */

hoverDiv.addEventListener('click', function(){
    hideInput();
})

/* -- monaco init */

amdRequire.config({
    baseUrl: uriFromPath(path.join(__dirname, 'node_modules/monaco-editor/min'))
});

// workaround monaco-css not understanding the environment
self.module = undefined;

amdRequire(['vs/editor/editor.main'], function () {
    window.editor = monaco.editor.create(document.getElementById('container'), {
        theme: 'vs-dark',
        language: "dart",
        automaticLayout: true,
        tabIndex: -1,
        fontSize: "15.5rem",
        minimap: {
            enabled: false
        },
        scrollbar: {
            verticalScrollbarSize: 5
        },
        suggest: {
            showClasses: false,
            showColors: false,
            showConstants: false,
            showConstructors: false,
            showEnumMembers: false,
            showEnums: false,
            showEvents: false,
            showFields: false,
            showFiles: false,
            showFolders: false,
            showFunctions: false,
            showIcons: false,
            showInterfaces: false,
            showIssues: false,
            showKeywords: false,
            showMethods: false,
            showModules: false,
            showOperators: false,
            showProperties: false,
            showReferences: false,
            showSnippets: false,
            showStructs: false,
            showTypeParameters: false,
            showUnits: false,
            showUsers: false,
            showValues: false,
            showVariables: false,
            showWords: false
        }
    });
});

/* -- ipc */

ipc.on('key', (event, message) => {
    console.log(message)
    switch (message["cmd"]) {
        case 'show-input':
            showInput();
            break;

        case 'ready':
            window.scriptList = getSripsList();
            restoreTitle();
            break;

        case 'hide-input':
            hideInput();
            break;
            // window.editor.updateOptions({readOnly: true});
        case 'clear':
            window.editor.getModel().setValue("");
            break;

        default:
            console.log("Floodgates open");
            break;
    }
})

/* -- autocomplete init */

autocomplete({
    input: searchField,
    className: "autocomplete-container",
    render: function(item, currentValue) {
        console.log("render", item, currentValue);
        var divContainer = document.createElement("div");
        divContainer.classList.add('suggest-item');
        var iconContainer = document.createElement("div");
        iconContainer.classList.add('child');
        var icon = document.createElement("i");
        icon.classList.add(item.altIcon.type);
        iconName = "fa-"+item.altIcon.name
        icon.classList.add(iconName);
        icon.classList.add('fa-lg');
        icon.classList.add('suggest-icon');
        iconContainer.appendChild(icon);
        var textContainer = document.createElement("div");
        textContainer.classList.add('child');
        var title = document.createElement("div");
        title.textContent = item.name
        title.classList.add('suggest-title');
        textContainer.appendChild(title);
        var description = document.createElement("div");
        description.textContent = item.description
        description.classList.add('suggest-description');
        textContainer.appendChild(description);
        divContainer.appendChild(iconContainer);
        divContainer.appendChild(textContainer);
        return divContainer;
    },
    fetch: function(text, update) {
        text = text.toLowerCase();        
        var suggestions = searchSnippet(text)
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.name;
        executeSnippet(item);
        hideInput();
        // window.editor.updateOptions({readOnly: false});
    }
});