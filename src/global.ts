import React from "react";

export interface GlobalContextValueType {
    token?:string
}

const defaultValue:GlobalContextValueType = {}

export const globalContext = React.createContext<GlobalContextValueType>(defaultValue)