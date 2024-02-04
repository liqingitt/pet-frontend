import { useEffect } from "react";
import {
  useDidShow,
  useDidHide,
  useLaunch,
  setStorageSync,

} from "@tarojs/taro";
// 全局样式
import "./app.less";
import { loginRequest } from "./common/request";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => { });
  useLaunch(() => {
    // 未登录时自动登录
    // const res = getStorageSync("token");
    // if (!res) {
    //   login({
    //     success: (res) => {
    //       console.log(res);
    //     },
    //   });
    // }
    loginRequest().then(res => {
      console.log(res);
      setStorageSync("userInfo", JSON.stringify(res))

    })

  });
  // 对应 onShow
  useDidShow(() => { });

  // 对应 onHide
  useDidHide(() => { });

  return (

    props.children
  );
}

export default App;
