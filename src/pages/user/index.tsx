import React, { useContext } from "react";
import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import styles from "./index.module.less";
import {HeaderInfo} from './components/headerInfo'
import { globalContext } from "@/src/global";

function Index() {
  const data = useContext(globalContext);
  console.log(data);
  return <View className={styles['user-page']}>
    <HeaderInfo />
  </View>;
}

export default Index;
