import React, { useEffect } from "react";
import {
  useDidShow,
  useDidHide,
  useLaunch,
  getStorageSync,
  login,
} from "@tarojs/taro";
import { globalContext } from "./global";
// 全局样式
import "./app.less";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {});
  useLaunch(() => {
    // 未登录时自动登录
    const res = getStorageSync("token");
    if (!res) {
      login({
        success: (res) => {
          console.log(res);
        },
      });
    }
  }, []);
  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return (
    <globalContext.Provider value={234}>
      {props.children}
    </globalContext.Provider>
  );
}

export default App;
