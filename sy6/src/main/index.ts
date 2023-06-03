//@ts-nocheck

'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import createProtocol from './createProtocol';
//import * as path from 'path';
import path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production'





// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true,supportFetchAPI:true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1300,
    height: 850,
    minWidth: 1100,
    minHeight: 760,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
      enableRemoteModule: true,//使渲染进程能使用remote模块
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
      devTools: true

    },

    //frame: false

  })
  win.once("ready-to-show", () => {
    win.show();
  });

  ipcMain.on('min', e => win.minimize());
  ipcMain.on('max', e => {
    if (win.isMaximized()) {
      // 判断 窗口是否已最大化
      win.restore(); // 恢复原窗口大小
    } else {
      win.maximize(); //最大化窗口
    }

  });

  ipcMain.on('close', e => win.close());
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    //win.loadURL('app://./index.html')
    win.loadURL('http://localhost:8000/#/login')
  }
}
//Menu.setApplicationMenu(null)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
