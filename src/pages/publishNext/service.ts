import { request } from "@/src/common/request";

export const addPet = (params) => request.post("/pet/addPet", params)