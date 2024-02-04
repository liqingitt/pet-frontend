import { Input, Picker } from "@nutui/nutui-react-taro"
import { useMemo, useState } from "react"
import { ageList } from "../../const"

export interface AgeSelectProps {
    value?: string | number,
    onChange?: (value: AgeSelectProps["value"]) => void
}


export const AgeSelect: React.FC<AgeSelectProps> = (props) => {
    const { onChange, value } = props

    const [visible, setVisible] = useState(false)

    const showText = useMemo(() => {
        if (typeof value !== "number") {
            return
        }
        return ageList.find((item) => {
            return item.value === value
        })?.text
    }, [value])

    return <>
        <Input value={showText} disabled onClick={() => {
            setVisible(true)
        }} placeholder="点击选择年龄" />
        <Picker
            visible={visible}
            options={ageList}
            value={value ? [value] : undefined}
            onConfirm={(values) => {

                onChange?.(values[0]?.value)

            }}
            onClose={() => setVisible(false)}

        />
    </>
}

