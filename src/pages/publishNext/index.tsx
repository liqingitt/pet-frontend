import React from "react"
import styles from './index.module.less'
import { Button, Checkbox, Form, Input, TextArea } from "@nutui/nutui-react-taro"
import { demandList } from "./const"
import { getStorageSync, removeStorageSync, showToast, switchTab } from "@tarojs/taro"
import { MatchBooleanFormId, MatchTextFormId, MatchTextFormArr } from "@/src/common/utils"
import { ageList, expellingList, featureList, hairList, resourceList, sexList, typeList, weightList } from "../publish/const"
import { addPet } from "./service"
const PublishNext: React.FC = () => {

    return <div className={styles["publish-next-page"]}>
        <Form
            labelPosition={"left"}
            className={styles["form"]}
            onFinish={async (nextData) => {
                console.log("ddd");

                const publishData = JSON.parse(getStorageSync("publishDataCache"))

                console.log(publishData);


                const params = {
                    name: publishData.name,
                    avatar: publishData.avatar?.[0],
                    age: MatchTextFormId(publishData.age, ageList),
                    type: MatchTextFormId(publishData.type, typeList),
                    sex: MatchTextFormId(publishData.sex, sexList),
                    vaccine: MatchBooleanFormId(publishData.vaccine, 2),
                    neutered: MatchBooleanFormId(publishData.neutered, 1),
                    expelling: MatchTextFormId(publishData.expelling, expellingList),
                    resource: MatchTextFormId(publishData.resource, resourceList),
                    weight: MatchTextFormId(publishData.weight, weightList),
                    hair: MatchTextFormId(publishData.hair, hairList),
                    feature: MatchTextFormArr(publishData.feature, featureList),


                    demand: MatchTextFormArr(nextData.demand, demandList),
                    remark: nextData.remark,
                    story: nextData.story,
                    address: nextData.address,
                    wechat: nextData.wechat,
                    phone: nextData.phone,
                }

                console.log(params);
                try {
                    const res = await addPet(params)
                    console.log(res);

                    showToast({
                        title: "发布成功",
                        icon: 'success',
                        duration: 2000
                    })

                    removeStorageSync("publishDataCache")
                    switchTab({
                        url: "/pages/home/index"
                    })

                } catch (error) {
                    showToast({
                        title: error.message,
                        icon: 'error',
                        duration: 2000
                    })
                }

            }}
            footer={
                <>

                    <Button formType="submit" block type="primary">
                        提交
                    </Button>
                </>
            }
        >
            <div className={styles.title}>
                领养要求
            </div>
            <Form.Item
                name="demand"
                required
                rules={[{ required: true, message: "请输入要求" }]}
            >
                <Checkbox.Group
                    // max={3}
                    direction="horizontal"
                >
                    {
                        demandList.map(item => <Checkbox key={item.value} value={item.value}>
                            {item.text}
                        </Checkbox>)
                    }

                </Checkbox.Group>
            </Form.Item>
            <div className={styles.title}>
                补充要求
            </div>
            <Form.Item name="remark" >
                <TextArea placeholder="请输入补充要求" showCount maxLength={200} />
            </Form.Item>
            <div className={styles.title}>
                送养故事
            </div>
            <Form.Item
                name="story"
                required
                rules={[{ required: true, message: "请输入" }]}
            >
                <TextArea placeholder="请描述宠物饮食偏好、行为习惯、运动量等，以及送养原因，宠物过往经历、情感故事等。" showCount maxLength={200} />
            </Form.Item>
            <div className={styles.title}>
                联系方式
            </div>
            <Form.Item
                name="address"
                label={"所在地"}
                required
                rules={[{ required: true, message: "请输入" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="wechat"
                label={"微信号"}
                required
                rules={[{ required: true, message: "请输入" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label={"手机号"}
                required
                rules={[{ required: true, message: "请输入" }]}
            >
                <Input />
            </Form.Item>
            {/* <Picker className={"666666666666"} mode={"region"} onChange={() => {
            }} >
                <div>lala</div>
            </Picker> */}
        </Form>
    </div>
}
export default PublishNext