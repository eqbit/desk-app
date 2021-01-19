import { app } from 'electron';
import { createMainWindow, mainWindow } from './windows/main';
import { startListeners } from './listeners';

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

startListeners();
