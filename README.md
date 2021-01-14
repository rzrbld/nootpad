# honk
 Simple scratchpad. Kind a "port" of [Boop](https://github.com/IvanMathy/Boop) for Linux and Windows platforms. Build with [Electron](https://github.com/electron/electron) and [Monaco-editor](https://microsoft.github.io/monaco-editor/).

 ![screenshot1](https://raw.githubusercontent.com/rzrbld/honk/main/images/screen.png)

 by now:
 - literally the same build-in snippets
 - user snippets temporary not available

## how to write a snippet

look at `src/scripts/Test.js`. In this case - only difference between [Honk](https://github.com/rzrbld/honk) and [Boop](https://github.com/IvanMathy/Boop) is:

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
