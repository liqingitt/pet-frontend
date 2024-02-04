import { Radio } from "@nutui/nutui-react-taro"

interface ListItem {
    value: number,
    text: string
}
// 年龄
export const ageList: ListItem[] = [
    { value: 0, text: '0-3个月', },
    { value: 1, text: '3-6个月', },
    { value: 2, text: '6-9个月', },
    { value: 3, text: '9-12个月', },
    { value: 4, text: '1岁', },
    { value: 5, text: '2岁', },
    { value: 8, text: '3岁', },
    { value: 9, text: '4岁', },
    { value: 10, text: '5岁', },
    { value: 12, text: '6岁' },
]

// 类别
export const typeList: ListItem[] = [
    { value: 0, text: '狗狗', },
    { value: 1, text: '猫咪', },
]

// 性别
export const sexList: ListItem[] = [
    { value: 0, text: '男孩', },
    { value: 1, text: '女孩', },
    // { value: 1, text: '未知', },
]


// 疫苗
export const vaccineList: ListItem[] = [
    { value: 0, text: '已接种', },
    // { value: 1, text: '接种中', },
    { value: 2, text: '未接种', },
    // { value: 3, text: '不详', },
]

// 绝育
export const neuteredList: ListItem[] = [
    { value: 0, text: '已绝育', },
    { value: 1, text: '未绝育', },
    // { value: 2, text: '不详', },

]

// 驱虫
export const expellingList: ListItem[] = [
    { value: 0, text: '已驱虫', },
    { value: 1, text: '未驱虫', },
    // { value: 2, text: '不详', },

]

// 来源
export const resourceList: ListItem[] = [
    { value: 0, text: '个人救助', },
    { value: 1, text: '救助站', },
    { value: 2, text: '家养', },
]


// 体型
export const weightList: ListItem[] = [
    { value: 0, text: '大型', },
    { value: 1, text: '中型', },
    { value: 2, text: '小型', },
    { value: 3, text: '迷你', },
]

// 毛发
export const hairList: ListItem[] = [
    { value: 0, text: '长毛', },
    { value: 1, text: '短毛', },
    { value: 2, text: '卷毛', },
    { value: 3, text: '无毛', },
]

// 特点
export const featureList: ListItem[] = [
    { value: 0, text: '调皮', },
    { value: 1, text: '运动量大', },
    { value: 2, text: '不挑食', },
    { value: 3, text: '聪明', },
    { value: 4, text: '活泼', },
    { value: 5, text: '活泼', },
]

export const generateRadioList = (list: ListItem[]) => {
    return list.map(item => <Radio key={item.value} shape='button' value={item.value}>{item.text}</Radio>)
}