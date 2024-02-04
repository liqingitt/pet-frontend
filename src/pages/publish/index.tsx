

import { Button, Checkbox, Form, Input, Radio } from "@nutui/nutui-react-taro";
import styles from "./index.module.less";
import { AgeSelect } from "./components/ageSelect";
import {

  expellingList,
  featureList,
  generateRadioList, hairList,
  neuteredList,
  resourceList,
  sexList,
  typeList,
  vaccineList, weightList
} from "./const";
import { redirectTo, setStorageSync, getStorageSync } from '@tarojs/taro'

import { PetUploader } from "./components/petUploader";
import { useMemo } from "react";
function Index() {

  const defaultValue = useMemo(() => {
    const cacheStr = getStorageSync("publishDataCache")
    if (!cacheStr) {
      return {}
    }

    return JSON.parse(cacheStr)
  }, [])

  console.log(defaultValue);

  return <div className={styles["publish-page"]}>
    <Form
      initialValues={defaultValue}
      labelPosition={"left"}
      className={styles["form"]}
      onFinish={(values) => {
        setStorageSync("publishDataCache", JSON.stringify(values))
        redirectTo({
          url: "/pages/PublishNext/index"
        })

      }}
      footer={
        <>
          <Button formType="submit" block type="primary">
            下一步
          </Button>
        </>
      }
    >
      <Form.Item
        name="avatar"
        required
        rules={[{ required: true, message: "请上传" }]}
      >
        <PetUploader />
      </Form.Item>
      <div className={styles.title}>宠物信息</div>

      <Form.Item
        required
        name={"name"}
        label={"昵称"}
        rules={[{ required: true, message: "请输入昵称" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"age"}
        label={"年龄"}
        required
        rules={[{ required: true, message: "请选择年龄" }]}
      >
        <AgeSelect />
      </Form.Item>
      <Form.Item
        name={"type"}
        label={"类别"}
        required
        rules={[{ required: true, message: "请选择类别" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(typeList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"sex"}
        label={"性别"}
        required
        rules={[{ required: true, message: "请选择性别" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(sexList)
          }
        </Radio.Group>
      </Form.Item>
      <div className={styles.title}>宠物现状</div>
      <Form.Item
        name={"vaccine"}
        label={"疫苗"}
        required
        rules={[{ required: true, message: "请选择疫苗" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(vaccineList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"neutered"}
        label={"绝育"}
        required
        rules={[{ required: true, message: "请选择绝育" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(neuteredList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"expelling"}
        label={"驱虫"}
        required
        rules={[{ required: true, message: "请选择驱虫" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(expellingList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"resource"}
        label={"来源"}
        required
        rules={[{ required: true, message: "请选择来源" }]}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(resourceList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"weight"}
        label={"体型"}

      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(weightList)
          }
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name={"hair"}
        label={"毛发"}
      >
        <Radio.Group
          direction={"horizontal"}
        >
          {
            generateRadioList(hairList)
          }
        </Radio.Group>
      </Form.Item>
      <div className={styles.title}>宠物特点<span className={styles['sub-title']}>（最多选择3个，选填）</span></div>
      <Form.Item
        name={"feature"}
      >
        <Checkbox.Group
          max={3}
          direction="horizontal"
        >
          {
            featureList.map(item => <Checkbox key={item.value} shape={"button"} value={item.value}>
              {item.text}
            </Checkbox>)
          }

        </Checkbox.Group>
      </Form.Item>
    </Form>
  </div>
}





export default Index;
