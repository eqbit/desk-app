import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      backgroundThrottling: false,
      contextIsolation: true,
      preload: __dirname + '/preload.js'
    },
  });

  Menu.setApplicationMenu(null);

  if (isDev) {
    win.loadURL('http://localhost:3000/index.html');
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  win.on('closed', () => win = null);

  // Hot Reloading
  if (isDev) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });

    // win.webContents.openDevTools();
  }
}

ipcMain.on('minimize', () => {
  win!.minimize();
});

ipcMain.on('close', () => {
  win!.close();
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
