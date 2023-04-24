// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, ImageBlock, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"Next.jsビルド時にヒープ領域が足りなくなったのでスワップした"}</H2>
<CaseBlock caseList={[
    {caseString:"メモリ枯渇・ヒープ領域確保のためスワップファイルを作成するとき", check:true,},
    {caseString:"Next.jsのビルド時にヒープ領域確保できないためなんとかしたいとき", check:true,},
]} />
<P>{"AWSのEC2でNext.jsをビルドしたときに以下のようにスワップ領域が足りなくなった。"}</P>
<CodeView language={"bash"} >{
`FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
1: 0xb7a940 node::Abort() [/usr/local/bin/node]
2: 0xa8e823  [/usr/local/bin/node]
3: 0xd5c940 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) `
}</CodeView>
<P>{"最初はインスタンスタイプを変更してメモリを上げようとしたが、スポットインスタンスだと建て直す必要がありそうでめんどくさかったため、スワップ領域を作成しビルドしてみた。"}</P>


<H2>{"スワップ領域を作成する"}</H2>
<H3>{"スワップファイルを作成"}</H3>
<Ol>
<Li num={"1"} title={"スワップファイル作成準備"}>
<P>{"まずはスワップファイルが作れそうな容量を確認する。"}</P>
<CodeView language={"bash"} >{
`df -h
// 結果
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       7.6G  5.0G  2.7G  65% /
tmpfs           484M     0  484M   0% /dev/shm
tmpfs           194M  840K  193M   1% /run
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/xvda15     105M  6.1M   99M   6% /boot/efi
tmpfs            97M  4.0K   97M   1% /run/user/1000`
}</CodeView>
<P>{"ぎりぎり1GBくらいならスワップ用のファイルを作成できそうなため、ddコマンドでファイルを作成する。"}</P>
<CodeView language={"bash"} filename="make swapfile">{
`sudo dd if=/dev/zero of=/swapfile bs=1M count=1024`
}</CodeView>
<P>{"if=/dev/zeroは読み込み先のデバイスファイルで読み込まれたファイル（出力先）はすべてゼロで埋まる。of=/swapfileは出力先のファイルでさっきの/dev/zeroから出力されるため中身はすべて0で埋められている。"}</P>
<P>{"また、bsは一度に読み書きされるブロックサイズでcountは個数のため合計1GBになる。そのため、1GBサイズのスワップ用ファイルが作成される。"}</P>
</Li>
<Li num={"2"} title={"スワップファイル作成"}>
<P>{"先ほど作成したスワップ用ファイルにスワップの設定を行う。"}</P>
<P>{"はじめにパーミッションを変更する"}</P>
<CodeView language={"bash"} filename="chmod">{
`sudo chmod 600 /swapfile`
}</CodeView>
<P>{"続いて、スワップファイルを有効にする。"}</P>
<CodeView language={"bash"} filename="mkswap">{
`sudo mkswap /swapfile`
}</CodeView>
<P>{"有効にしたスワップファイルをシステムに追加する。"}</P>
<CodeView language={"bash"} filename="swapon">{
`sudo swapon /swapfile`
}</CodeView>
<P>{"ここまででスワップファイルの作成と設定は終了。"}</P>
</Li>
<Li num={"3"} title={"再起動してもスワップファイルを有効にする"}>
<P>{"一度設定したスワップをサーバーが再起動しても有効にする。特にEC2のスポットインスタンスだとサーバーが停止することがあるため設定しておく。"}</P>
<P>{"nanoエディタで/etc/fstabを編集する。"}</P>
<CodeView language={"bash"} filename="nano">{
`sudo nano /etc/fstab`
}</CodeView>
<CodeView language={"bash"} filename="edit">{
`// 追加する内容
/swapfile none swap defaults 0 0`
}</CodeView>
<P>{"/swapfileはスワップファイルのパス。noneはスワップファイルに対応するデバイスやファイルシステム。今回はなし。swapはファイルシステムタイプ。swはマウント時のオプションで優先度を選択できるらしい。特に優先はないためdefaults。最初の0はファイルシステムのdumpをしない意味、最後の0はfsckによるファイルシステムのチェックをしない意味。"}</P>
<P>{"ここまでで、スワップファイル作成について一通り終わったため最後にスワップ領域を確認する。"}</P>
<CodeView language={"bash"} filename="confirm">{
`free
// 結果
               total        used        free      shared  buff/cache   available
Mem:          989388      264288      281160         120      443940      564424
Swap:        1048572       68096      980476`
}</CodeView>
</Li>
</Ol>


<H2>{"Next.jsでビルド時のヒープ領域を広げる"}</H2>
<H3>{"ヒープ領域の拡大"}</H3>
<P>{"ビルド時にヒープ領域を拡大する。"}</P>
<P>{"最初にビルド時に確保しているヒープ領域を確認するためNode.jsのビルド条件を確認する。"}</P>
<CodeView language={"bash"} filename="confirm">{
`node -e "console.log(v8.getHeapStatistics())"
// 結果
{
    total_heap_size: 6389760,
    total_heap_size_executable: 524288,
    total_physical_size: 6053888,
    total_available_size: 514743568,
    used_heap_size: 5445352,
    heap_size_limit: 519307264,
    malloced_memory: 254104,
    peak_malloced_memory: 99952,
    does_zap_garbage: 0,
    number_of_native_contexts: 1,
    number_of_detached_contexts: 0,
    total_global_handles_size: 8192,
    used_global_handles_size: 2624,
    external_memory: 420579
  }`
}</CodeView>
<P>{"total_available_sizeを見ると約0.5GBのみ使用しているため、ビルド時には作成したスワップ領域までヒープ領域を大きくする。"}</P>
<P>{"Next.jsのビルド時にNode.jsのオプションを変更できるため、package.jsonのビルドコマンドを以下に変更した。"}</P>
<CodeView language={"json"} filename="build">{
`  "scripts": {
    // buildのみ変更
    "build": "NODE_OPTIONS=--max_old_space_size=1024 next build",
    //
  },`}</CodeView>
<P>{"--max_old_space_size=1024で1GBのヒープ領域を使用する。ヒープ領域分のメモリはスワップファイルで補ってもらう。"}</P>

<H3>{"ビルドしてみた"}</H3>
<P>{"最後にNext.jsのビルドを試してみた。今度はヒープ領域不足アラームが発生せずビルドできた。"}</P>
<CodeView language={"bash"} filename="build">{
`npm run build

> blog@1.0.0 build
> NODE_OPTIONS=--max_old_space_size=1024 next build

info  - Loaded env from /home/ubuntu/Blog/.env
info  - Linting and checking validity of types  
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (33/33)
info  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ● /                                      4.58 kB         109 kB
├   /_app                                  0 B            74.5 kB
├ ○ /404                                   2.56 kB         102 kB
├ ○ /about                                 4.49 kB         112 kB
// 略

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)`}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"スワップファイルを作成してメモリ枯渇・ヒープ領域確保する", check:true,},
    {caseString:"Next.jsのビルド時に使用するヒープ領域をスワップサイズだけ拡大する", check:true,},
    {caseString:"サーバーのメモリを増やせるならばこの作業は必要ないはず", check:false,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
