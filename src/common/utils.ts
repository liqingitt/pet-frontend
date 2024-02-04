export const MatchTextFormId = (id: string | number, mapList: any[]): string | undefined => {
    if ((typeof id !== "string" && typeof id !== "number")) {
        return undefined
    }


    const res = mapList.find(item => item.value === id)?.text
    return res
}

export const MatchBooleanFormId = (id: string | number, flagValue: string | number): boolean | undefined => {
    if ((typeof id !== "string" && typeof id !== "number")) {
        return false
    }
    return id === flagValue
}

export const MatchTextFormArr = (ids: (string | number)[], mapList: any[]): string | undefined => {
    if (!(Array.isArray(ids) && ids.length > 0)) {
        return undefined
    }
    return mapList.filter(item => ids.includes(item.value)).map(item => item.text).join(",")
}