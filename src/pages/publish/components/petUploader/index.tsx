import { Uploader } from "@nutui/nutui-react-taro"
import { getStorageSync, reLaunch } from "@tarojs/taro"
import { useEffect, useMemo } from "react"
import { baseURL } from "@/src/common/request"


interface PetUploaderProps {
    value?: string[],
    onChange?: (value: PetUploaderProps["value"]) => void
}
export const PetUploader: React.FC<PetUploaderProps> = (props) => {
    const { value, onChange } = props


    const userInfo = useMemo(() => {
        const userInfoStr = getStorageSync("userInfo")

        const info = userInfoStr ? JSON.parse(userInfoStr) : {}

        return info
    }, [])

    useEffect(() => {
        if (!userInfo.token) {
            reLaunch({
                url: "/pages/home/index"
            })
        }
    }, [])


    return <>
        <Uploader
            value={(value || []).map(url => ({
                url: url,
                status: 'success',
                type: 'image',
                message: '上传成功',
                uid: url,
            }))
            }

            mediaType={["image"]}
            maxCount={5}
            url={baseURL + "/file/upload"}
            uploadLabel="宠物图片/视频"
            headers={{
                token: userInfo?.token
            }}
            onSuccess={(param) => {

                const { files } = param
                const { responseText } = files[files.length - 1] || {}
                const { data: dataStr } = (responseText as any) || {}
                if (!dataStr) {
                    onChange?.([...(value || [])])
                    return;
                }
                let data = JSON.parse(dataStr)
                if (data?.status === 1 && data?.data?.url) {


                    onChange?.([...(value || []), data?.data?.url])
                    return;
                } else {
                    onChange?.([...(value || [])])
                    return;
                }


            }}

            onFailure={() => {
                // setTimeout(() => {
                onChange?.([...(value || [])])
                // }, 1000)


            }}

            onDelete={(file) => {

                onChange?.((value || []).filter(item => item !== file.url))

            }}
        />

    </>
}