import { Space, Tag, Ellipsis } from '@nutui/nutui-react-taro';
import styles from './index.module.less';



export const PetCard = () => {
    return <div className={styles['pet-card-c']}>

        <img
            className={styles["image-box"]}
            src='https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
        />
        <div className={styles["info"]}>
            <div className={styles["pet-name"]}>大黄</div>
            <Space className={styles["tag-warp"]}>
                <Tag type="primary">标签</Tag>
                <Tag type="info">标签</Tag>
                <Tag type="success">标签</Tag>
            </Space>
            <div className={styles["desc"]}>
                NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力
            </div>
            <Space className={styles["tag-warp"]}>
                <Tag plain  >标签</Tag>
                <Tag plain  >标签</Tag>
                <Tag plain >标签</Tag>
            </Space>
        </div>
    </div>
}

