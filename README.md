# honk
 Simple scratchpad. Kind a "port" of [Boop](https://github.com/IvanMathy/Boop) for Linux and Windows platforms. Build with [Electron](https://github.com/electron/electron) and [Monaco-editor](https://microsoft.github.io/monaco-editor/).

 ![screenshot1](https://github.com/rzrbld/honk/raw/main/images/screen.png)

 by now:
 - literally same build-it scripts
 - user snippets temporary not available

## how to develop snippet

look at `src/scripts/Test.js`. In this case - only difference between [Honk](https://github.com/rzrbld/honk) and [Boop](https://github.com/IvanMathy/Boop) is:

```
module.exports ={
	main
}
```
and `return` statement in main function.

## how to develop app

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
