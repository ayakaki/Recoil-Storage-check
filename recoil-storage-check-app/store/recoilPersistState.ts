import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { User } from '../models/user';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

export const recoilPersistAtom = atom<User>({
  key: 'recoilPersistAtom',
  default: {
    name: '花子',
    from: '福岡',
    age: 21,
    favoriteFoods: ['明太子', 'もつ鍋'],
  },
  effects_UNSTABLE: [persistAtom],
});

export const recoilPersistState = selector({
  key: 'recoilPersistState',
  get: ({ get }) => {
    return get(recoilPersistAtom);
  },
});
