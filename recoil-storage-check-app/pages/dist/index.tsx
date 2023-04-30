import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { recoilPersistState } from '../../store/recoilPersistState';
import React from 'react';
import Link from 'next/link';
import { recoilOnlyState } from '../../store/recoilOnlyState';

const Dist: NextPage = () => {
  const recoilOnly = useRecoilValue(recoilOnlyState);
  const recoilPersist = useRecoilValue(recoilPersistState);

  const deletePersist = () => {
    localStorage.removeItem('recoil-persist');
  };

  return (
    <>
      <h2>Recoilのみで定義</h2>
      <ul>
        <li>名前：{recoilOnly.name}</li>
        <li>出身：{recoilOnly.from}</li>
        <li>年齢：{recoilOnly.age}</li>
        <li>
          好きな食べ物：
          {recoilOnly.favoriteFoods.map((favoriteFood, index) => {
            return (
              <React.Fragment key={index}>{`${favoriteFood} `}</React.Fragment>
            );
          })}
        </li>
      </ul>
      <h2>RecoilPersistで定義</h2>
      <ul>
        <li>名前：{recoilPersist.name}</li>
        <li>出身：{recoilPersist.from}</li>
        <li>年齢：{recoilPersist.age}</li>
        <li>
          好きな食べ物：
          {recoilPersist.favoriteFoods.map((favoriteFood, index) => {
            return (
              <React.Fragment key={index}>{`${favoriteFood} `}</React.Fragment>
            );
          })}
        </li>
      </ul>
      <p>
        <Link href="/">TOPページへ遷移</Link>
      </p>
      <button onClick={deletePersist}>LocalStorageの値を削除</button>
    </>
  );
};

export default Dist;
