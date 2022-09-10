import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const RecoilOnly = atom({
  key: "recoilOnlyState",
  default: "Recoil のみ｜初期値",
});
