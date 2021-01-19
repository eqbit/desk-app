import { BrowserWindow, Menu } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from "path";

let mainWindow: BrowserWindow | null = null;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      backgroundThrottling: false,
      contextIsolation: true,
      preload:path.join( __dirname, '..', 'preload.js'),
    },
  });

  Menu.setApplicationMenu(null);

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000/index.html');
  } else {
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }

  mainWindow.on('closed', () => mainWindow = null);

  // Hot Reloading
  if (isDev) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });

    // mainWindow.webContents.openDevTools();
  }
};

export { createMainWindow, mainWindow };
