import React, { useContext } from "react";
import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import "./index.less";
import { globalContext } from "@/src/global";

function Index() {
  const data = useContext(globalContext);
  console.log(data);
  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="index">
        <Button type="primary" className="btn">
          我是home页面
        </Button>
      </View>
    </View>
  );
}

export default Index;
