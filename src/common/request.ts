import axios from "axios";
import {

    setStorageSync,
    getStorageSync,
    login,
} from "@tarojs/taro";

export const baseURL = "https://api.aesou.com/api"

const axiosInstance = axios.create({
    baseURL,

});

axiosInstance.interceptors.response.use((response) => {

    if (response.data?.status !== 1) {
        throw new Error(response.data)
    }

    return response.data?.data
}, (err) => {
    console.log(err);
    return err

})

const getCode = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        login({
            success: function (res) {
                if (res.code) {
                    resolve(res.code)
                } else {
                    reject(res)
                }

            },
            fail: (res) => {
                reject(res)
            }
        })
    })
}


export const loginRequest = async () => {

    const code = await getCode();
    const data = await axiosInstance.post("/wx/login", {}, {
        params: {
            code
        }
    })

    // if (data.status !== 1) {
    //     throw new Error(data)
    // }

    return data

}


const baseRequest = (type) => async (url, data, config) => {

    const userInfoStr = getStorageSync("userInfo")
    let userInfo = userInfoStr ? JSON.parse(userInfoStr) : undefined
    if (!userInfo) {
        const res = await loginRequest()
        userInfo = res
        setStorageSync("userInfo", res)
    }

    switch (type) {
        case "get":
            return axiosInstance.get(url, {
                headers: {
                    token: userInfo.token
                },
                ...config,
                params: data
            })
        case "post":
            return axiosInstance.post(url, data, {
                headers: {
                    token: userInfo.token
                },
                ...config

            })

    }



}

export const request = {
    get: baseRequest("type"),
    post: baseRequest("post"),
}


