import { ipcMain } from 'electron';
import { mainWindow } from '../../windows/main';

export const startInterfaceListeners = () => {
  ipcMain.on('minimize', () => {
    mainWindow?.minimize();
  });

  ipcMain.on('close', () => {
    mainWindow?.close();
  });
};
