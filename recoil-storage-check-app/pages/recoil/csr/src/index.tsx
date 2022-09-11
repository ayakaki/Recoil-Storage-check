import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { RecoilOnly } from "../../../../Store/RecoilOnly";
import { RecoilSetLocalStorage } from "../../../../Store/RecoilSetLocalStorage";

export const RecoilCsrSrc = () => {
  const [ recoilOnlyState, setRecoilOnlyState ] = useRecoilState(RecoilOnly);
  const [ recoilSetLocalStorage, setRecoilSetLocalStorage ] = useRecoilState(RecoilSetLocalStorage);
  const [ recoilValueByLocalStorage, setRecoilValueByLocalStorage] = useState<string>("");
  const [ valueInLocalStorage, setValueInLocalStorage ] = useState<string>('直接LocalStorage変数｜初期値');

  const setValue = () => {
    setRecoilOnlyState("Recoil のみに格納されている値");
    setRecoilSetLocalStorage("Recoil 永続化されている値");
    localStorage.setItem('directLocalStorage', "直接 LocalStorage に格納した値")
    setValueInLocalStorage(localStorage.getItem('directLocalStorage')||'{}');
  }

  useEffect(() => {
    const recoilValueinLocalStorage = localStorage.getItem('recoilPersist')||'{}';
    const jsonString = JSON.parse(recoilValueinLocalStorage);
    setRecoilValueByLocalStorage(jsonString.recoilSetLocalStorageState);
  }, [])


  const loadLocalStorage = () =>{
    const recoilPersist = localStorage.getItem('recoilPersist')||'default';
    setRecoilValueByLocalStorage(recoilPersist);
  }

  return (
    <>
      <h1>Recoil CSR 遷移元 ページです。</h1>
      <div>
        <button onClick={setValue}>Recoil に値を設定</button>
        <p>Recoilのみ：{recoilOnlyState}</p>
        <p>Recoil管理LocalStorage（Recoil呼び出し）：{recoilSetLocalStorage}</p>
        <p>Recoil管理LocalStorage（localStorage読み出し）：{recoilValueByLocalStorage}</p>
        <p>直接 LocalStorage に格納した値：{valueInLocalStorage}</p>
        <p>
          <Link href="/recoil/csr/dst">
            <a>▶︎ CSR 取得ページ遷移する</a>
          </Link>
        </p>
        <p>
          <Link href="/recoil/ssr/dst">
            <a>▶︎ SSR 取得ページ遷移する</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default RecoilCsrSrc;