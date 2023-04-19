// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, ImageBlock, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"
import img1 from "public/images/posts/react-next-quickstart/react-next-quickstart.png"

const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"React, Next.jsアプリの立ち上げをクイックスタートする"}</H2>
<CaseBlock caseList={[
    {caseString:"React, Next.jsの立ち上げ環境の設定を簡単にしたいとき", check:true,},
]} />
<P>{"Reactなどを立ち上げるためにはNode.jsをインストールする必要がある。一回インストールしたら基本的に変える必要がないため新しく立ち上げる際に忘れやすいためメモする。"}</P>


<H2>{"Nodejsをインストールする"}</H2>
<H3>{"はじめにNodejsをインストール"}</H3>
<P>{"一番はじめにNodejsをビルドするためにbuild-essentialと、URLからパッケージをインストールするためにcurlをインストールする。"}</P>
<CodeView language={"bash"} >{
`sudo apt update
sudo apt install -y build-essential curl`
}</CodeView>
<P>{"準備ができたらNode jsをインストールする。Node jsは最新版のdpkパッケージをインストールする。"}</P>
<CodeView >{
`curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs`
}</CodeView>
<P>{"準備ができたらNodejsをインストールする。Nodejsは最新版のdpkパッケージをインストールする。"}</P>
<CodeView language={"bash"} >{
`curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs`
}</CodeView>

<H3>{"バージョン管理をするためnパッケージをインストールする"}</H3>
<P>{"続いてNodejsと、パッケージをインストールするnpmのバージョンを管理するnパッケージをインストールする。"}</P>
<P>{"開発時にNodejsのバージョンを変更したい場合は、nパッケージから簡単に切り替えるようにする。"}</P>
<CodeView language={"bash"} >{
`sudo npm install -g n`
}</CodeView>
<P>{"nパッケージから特定のバージョン、または最新LTSのNodejsとnpmをインストールする。"}</P>
<CodeView >{
`// Nodejs 14.17.0
sudo n 14.17.0
// 最新LTS
sudo n lts`
}</CodeView>
<P>{"Nodejsとnpmのバージョンを確認する。"}</P>
<CodeView language={"bash"} >{
`node -v
npm -v`
}</CodeView>


<H2>{"ReactやNext.jsの新規プロジェクトを立ち上げる"}</H2>
<H3>{"create-react-app@, create-next-app@を実行する"}</H3>
<P>{"ReactやNext.jsの新規プロジェクトを立ち上げるためにnpxコマンドを叩く。"}</P>
<CodeView >{
`// Reactの場合
npx create-react-app@
// Nextの場合
npx create-next-app@`
}</CodeView>
<P>{"一番はじめにnpxコマンドを叩いた場合パッケージのインストールが聞かれるためyesを押す。"}</P>
<CodeView language={"bash"} >{
`Need to install the following packages:
create-next-app@13.3.0
Ok to proceed? (y) y`
}</CodeView>
<P>{"以降は必要な情報を入力または選択する。選択が終わったらモジュールをインストールするためしばらく待機する。"}</P>
<CodeView language={"bash"} >{
`// Project名
✔ What is your project named? … my-app
// TypeScriptを採用するか
✔ Would you like to use TypeScript with this project? … No / Yes
// ESLintを採用するか
✔ Would you like to use ESLint with this project? … No / Yes
// Tailwindを採用するか
✔ Would you like to use Tailwind CSS with this project? … No / Yes
// srcディレクトリ（作成ファイル格納場所）を作成するか
✔ Would you like to use 'src/' directory with this project? … No / Yes
// プロジェクトディレクトリ内にappディレクトリを作成するか
✔ Would you like to use experimental 'app/' directory with this project? … No / Yes
// ファイルパスの設定（デフォルトは@/*）
✔ What import alias would you like configured? … @/*`
}</CodeView>
<P>{"作成が完了したら作成したプロジェクト内でReactまたはNexjsを立ち上げる"}</P>
<P>{"立ち上げた後はlocalhost:3000ポートにアクセスする。"}</P>
<CodeView language={"bash"} >{
`npm run dev

> my-app@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 5.2s (170 modules)
wait  - compiling...
event - compiled successfully in 279 ms (137 modules)
`}</CodeView>
<ImageBlock imgSrc={img1}/>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"React, Next.jsの立ち上げ環境を設定方法をまとめた。", check:true,},
    {caseString:"Nodejsまたはnパッケージがインストールできれば速攻で始められる。", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
