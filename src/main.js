const { app, BrowserWindow, Menu, MenuItem, dialog  } = require('electron')
const windowStateKeeper = require('electron-window-state');
var ipc = require('electron').ipcMain;
const path = require('path');
const menu = new Menu();

function createWindow () {

  const mainWindowStateKeeper = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  const win = new BrowserWindow({
    title: 'Honk',
    icon: path.join(__dirname, "icons/honk.png"),
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    backgroundColor: '#1e1e1e',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  mainWindowStateKeeper.manage(win);

  win.loadFile('index.html')

  // dev only
  win.webContents.openDevTools()

  win.webContents.on('did-finish-load', function() {
    win.show();
    win.webContents.send('key', {'cmd': 'ready'});
  });

  // Emitted when the window is closed.
  // win.on('closed', () => {
  //   // Dereference the window object, usually you would store windows
  //   // in an array if your app supports multi windows, this is the time
  //   // when you should delete the corresponding element.
  //   win = null;
  // });

  createMenu(win);
  initShortcuts(win);
}

function createMenu(win){
  menu.append(new MenuItem({
    label: 'Honk',
    submenu: [
      {
        role: 'about',
      },
      {
        role: 'quit'
      }]
  }))

  menu.append(new MenuItem({
    label: 'File',
    submenu: [
      {
        role: 'close',
      },
      {
        role: 'help',
        label: "Clear",
        accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Ctrl+N',
        click: () => {
          win.webContents.send('key', {'cmd': 'clear'});
        }
      }]
  }))

  menu.append(new MenuItem({
    label: 'Scripts',
    submenu: [
      {
        role: 'help',
        label: "Open Picker",
        accelerator: process.platform === 'darwin' ? 'Cmd+H' : 'Alt+H',
        click: () => {
          win.webContents.send('key', {'cmd': 'show-input'});
        }
      },
      {
        role: 'help',
        label: "Reload Scripts",
        accelerator: process.platform === 'darwin' ? 'Shift+Cmd+R' : 'Shift+Ctrl+R',
        click: () => {
          win.webContents.send('key', {'cmd': 'ready'});
        }
      },
      {
        role: 'help',
        label: "Set User Scipts Folder",
        accelerator: process.platform === 'darwin' ? 'Cmd+,' : 'Alt+,',
        click: () => {
          var dir = dialog.showOpenDialog(win, {

              properties: ['openDirectory']
      
          }).then((dir) => {
            console.log("OPEN DIR>>>",dir);
            if(dir.canceled == false){
              win.webContents.send('key', {'cmd': 'select-custom-scripts-folder','dir': dir});
            }
          })
        }
      }]
  }))

  Menu.setApplicationMenu(menu);
}

function initShortcuts(win){
  win.webContents.on('before-input-event', (event, input) => {
    if ( input.key == 'Escape') {
      win.webContents.send('key', {'cmd': 'hide-input'})
      event.preventDefault()
    }
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('will-quit', () => {
  console.log("Bye!");
})

app.whenReady().then(createWindow)
