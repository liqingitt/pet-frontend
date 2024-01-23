import { View } from '@tarojs/components';
import styles from './index.module.less'
import { Image } from '@nutui/nutui-react-taro';
export const HeaderInfo = () => {
    return <View className={styles["header-info-c"]}>
        <View className={styles["avatar-box"]}>
            <Image
                mode="scaleToFill"
                width="80"
                height="80"
                radius="50%"
            />
        </View>
        <View className={styles['info-box']}>
            <View className={styles.username}>微信用户</View>
            <View className={styles['focus-on']}>
                <View className={styles.item}>
                    关注0
                </View>
                <View className={styles.item}>
                    被关注0
                </View>
            </View>
            <View >
                编辑个人信息
            </View>
        </View>
        <View className={styles['user-home-entry']}>
            <View className={styles.subscript}>
                我的主页
            </View>
        </View>
    </View>
};
