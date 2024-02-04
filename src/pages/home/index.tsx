import React, { useContext, useEffect } from "react";

import {
  Button,
  Swiper,
  NoticeBar,
  Tabs,
  Space,
} from "@nutui/nutui-react-taro";
import { List } from '@nutui/icons-react-taro'
import {
  getFuzzyLocation
} from "@tarojs/taro";
import styles from "./index.module.less";
import { globalContext } from "@/src/global";
import { PetCard } from '@/src/components/petCard/index'
function Index() {
  const data = useContext(globalContext);
  useEffect(() => {
    getFuzzyLocation({
      type: "wgs84",
      success: (res) => {
        console.log(res);

      }
    })
  }, [])
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return <div className={styles["home-page"]}>
    <Swiper
      className={styles.swiper}
      defaultValue={0}
      indicator>
      {list.map((item, index) => {
        return (
          <Swiper.Item key={item}>
            <img width="100%" height="100%" src={item} onClick={() => console.log(index)} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
    <NoticeBar className={styles['notice-bar']} content={"恭喜杭州市的小烟儿成功找到家"} />
    <div className={styles["tabs-box"]}>
      <Tabs activeType="smile" className={styles["tabs"]} >
        <Tabs.TabPane title="收藏" />
        <Tabs.TabPane title="狗狗" />
        <Tabs.TabPane title="猫咪" />
        <Tabs.TabPane title="小宠" />
      </Tabs>
      <div className={styles["filter-box"]}>
        <List size={14} />
        筛选
      </div>

    </div>
    <div className={styles["list-box"]}>
      <Space direction={"vertical"} >
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </Space>
    </div>
  </div>
}





export default Index;
