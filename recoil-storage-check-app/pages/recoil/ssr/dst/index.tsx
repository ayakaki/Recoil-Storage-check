import react, {useState, useEffect} from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { RecoilOnly } from "../../../../Store/RecoilOnly";
import { RecoilSetLocalStorage } from "../../../../Store/RecoilSetLocalStorage";

type SSRProps = {
  dataRecoilOnly:string,
  dataLocalStorageByRecoil:string,
  dataLocalStorageByGetLocalStorage:string,
  dataLocalStoragyByDirect:string
}

export const RecoilSsrDst: NextPage<SSRProps> = (props: SSRProps) => {

  return (
  <>
    <h1>Recoil SSR 遷移先 ページです。</h1>
    <div>
      <p>結果は CLI 参照</p>
      <p>
        <Link href="/recoil/csr/src">
          <a>▶︎ CSR 設定ページ遷移する</a>
        </Link>
      </p>
      <p>
        <Link href="/recoil/csr/dst">
          <a>▶︎ CSR 取得ページ遷移する</a>
        </Link>
      </p>
    </div>
  </>
  )

}

// すべてのリクエストの度に実行される
export const getServerSideProps:GetServerSideProps = async (context) => {
  

  const props: SSRProps = {
    dataRecoilOnly:'AAA',
    dataLocalStorageByRecoil:'BBB',
    dataLocalStorageByGetLocalStorage:'CC',
    dataLocalStoragyByDirect:'DDD'
  }

  // props を通じて Page に data を渡す
  return { props: props }
}

export default RecoilSsrDst
