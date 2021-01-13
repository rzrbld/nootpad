const { app, BrowserWindow, Menu, MenuItem, globalShortcut  } = require('electron')
const windowStateKeeper = require('electron-window-state');
var ipc = require('electron').ipcMain;
const menu = new Menu();

function createWindow () {

  const mainWindowStateKeeper = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  const win = new BrowserWindow({
    title: 'Honk',
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    backgroundColor: '#1e1e1e',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindowStateKeeper.manage(win);

  win.loadFile('index.html')
  
  // dev only
  // win.webContents.openDevTools()

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
      },
      {
        role: 'help',
        label: "Open Picker",
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+B' : 'Alt+Shift+B',
        click: () => {
          win.webContents.send('key', {'cmd': 'show-input'});
        }
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
  
  Menu.setApplicationMenu(menu);
}

function initShortcuts(win){
  globalShortcut.register('esc', () => {
    win.webContents.send('key', {'cmd': 'hide-input'})
    return true
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
  globalShortcut.unregisterAll()
})

app.whenReady().then(createWindow)