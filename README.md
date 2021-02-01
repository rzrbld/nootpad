# Nootpad
 Simple scratchpad. Kind a "port" of [Boop](https://github.com/IvanMathy/Boop) for Linux and Windows platforms. Build with [Electron](https://github.com/electron/electron) and [Monaco-editor](https://microsoft.github.io/monaco-editor/).

 ![screenshot1](https://raw.githubusercontent.com/rzrbld/nootpad/main/images/screen.png)

 by now:
 - literally the same build-in scripts
 - user scripts support
 
## installing scripts

To install a new custom script - download or write your own `.js` file and put it into the custom scripts folder. You can set custom scripts folder from the `Scripts` menu

## how to write a snippet

look at `src/scripts/Test.js`. In this case - only difference between [Nootpad](https://github.com/rzrbld/nootpad) and [Boop](https://github.com/IvanMathy/Boop) is:

export declaration:
```
module.exports ={
	main
}
```
and `return` statement in main function.

## run in dev environment

 - fork/download
 - run
```shell
cd src/
npm i
npm start
```

## how to build

```shell
npm run make
ls -al out/
```