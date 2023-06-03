import { contextBridge } from 'electron';

const apiKey = 'electron';

const api: any = {
  versions: process.versions,
};

<<<<<<< HEAD
=======


>>>>>>> e00c4e0 (登录注册模块)
contextBridge.exposeInMainWorld(apiKey, api);
