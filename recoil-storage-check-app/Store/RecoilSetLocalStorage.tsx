import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// recoil永続化
const { persistAtom } = recoilPersist({
	key: "recoilPersist",
	storage: typeof window === "undefined" ? undefined : localStorage
});

export const RecoilSetLocalStorage = atom({
	key: "recoilSetLocalStorageState",
	default: false,
	effects_UNSTABLE: [persistAtom]
});