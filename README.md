# Recoil-Storage-check

状態管理ライブラリ`Recoil`の状態を永続化させるライブラリ`recoli-persist`の挙動確認

## 結果

- store にて＋ α の処理は必要になるが、基本的に Recoil 同様に取り扱える。
- WebStorage に設定した場合、set メソッドが走るページでリロードしても初期化はされない。
  　- 初期化する場合は、

## MOTION

### 動作 1

1. 値の設定＆遷移
2. 遷移先でリロード → 永続化した値は初期化されないことを確認
3. 遷移元にジャンプ → セッターがあったとしてもデフォルトの値が出ないことを確認

![recoil_persist](https://user-images.githubusercontent.com/65984887/235333257-c059c1b8-96c3-40ea-9a92-b666fabf65ab.gif)

### 動作 2

1. 値の設定＆遷移
2. 遷移先でローカルストレージに該当の値を削除 → まだ値は変わらない
3. 遷移先でリロード → 永続化した値も含めてデフォルト値が表示される

![recoil_persist_2](https://user-images.githubusercontent.com/65984887/235333755-e0d12b4b-3a29-45e1-abd0-b820cc3c007f.gif)
