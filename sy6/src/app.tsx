// 运行时配置
// 运行时候、配置的区别是跑在浏览器上，可以写函数，jsx,import浏览器依赖

import { message } from "antd";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 用什么缓冲 storage 还是session
import { getDvaApp } from "umi";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// 这个是redux-persist 的配置
const persistConfig = {
  key: "root", // 自动框架生产的根目录id 是root。不变
  storage, // 这个是选择用什么存储，session 还是 storage
};
const persistEnhancer =
  () =>
  (createStore: any) =>
  (reducer: any, initialState: any, enhancer: any) => {
    const store = createStore(
      persistReducer(persistConfig, reducer),
      initialState,
      enhancer
    );
    const persist = persistStore(store);
    return { ...store, persist };
  };

export const dva = {
  config: {
    // @ts-ignore
    onError(e: Error) {
      message.error(e.message, 3);
    },
    extraEnhancers: [persistEnhancer()],
  },
};
