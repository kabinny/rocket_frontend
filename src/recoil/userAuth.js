import { atom } from "recoil"

export const isUserLoggedIn = atom({
  key: "isUserLoggedIn",
  default: false,
})

export const currentUserName = atom({
  key: "currentUserName",
  default: "",
})
