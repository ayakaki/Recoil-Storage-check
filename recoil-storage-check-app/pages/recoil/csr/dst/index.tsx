import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { RecoilOnly } from "../../../../Store/RecoilOnly";
import { RecoilSetLocalStorage } from "../../../../Store/RecoilSetLocalStorage";


export const RecoilCsrDst = () => {

  const [ recoilOnlyState, setRecoilOnlyState ] = useRecoilState(RecoilOnly);
  const [ recoilSetLocalStorage, setRecoilSetLocalStorage ] = useRecoilState(RecoilSetLocalStorage);
  const [ recoilValueByLocalStorage, setRecoilValueByLocalStorage] = useState<string>("");
  const [ valueInLocalStorage, setValueInLocalStorage ] = useState<string>('直接LocalStorage変数');

  useEffect(() => {
    const recoilValueinLocalStorage = localStorage.getItem('recoilPersist')||'{}';
    const jsonString = JSON.parse(recoilValueinLocalStorage);
    setRecoilValueByLocalStorage(jsonString.recoilSetLocalStorageState);
  },[])

  return (
    <>
      <h1>Recoil CSR 遷移先 ページです。</h1>
      <div>
        <p>Recoilのみ：{recoilOnlyState}</p>
        <p>Recoil管理LocalStorage（Recoil呼び出し）：{recoilSetLocalStorage}</p>
        <p>Recoil管理LocalStorage（localStorage読み出し）：{recoilValueByLocalStorage}</p>
        < p>直接 LocalStorage に格納した値：{valueInLocalStorage}</ p>
        <p>
          <Link href="/recoil/csr/src">
            <a>▶︎ CSR 設定ページ遷移する</a>
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

export default RecoilCsrDst;