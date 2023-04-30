import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { User } from '../models/user';

export const recoilOnlyAtom = atom<User>({
  key: 'recoilOnlyAtom',
  default: {
    name: '太郎',
    from: '東京',
    age: 18,
    favoriteFoods: ['オムライス', 'ハンバーグ'],
  },
});

export const recoilOnlyState = selector({
  key: 'recoilOnlyState',
  get: ({ get }) => {
    return get(recoilOnlyAtom);
  },
});
