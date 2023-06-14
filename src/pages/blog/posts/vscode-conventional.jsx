// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"Conventional Commitsを使ってCommitメッセージをキレイに書く"}</H2>
<CaseBlock caseList={[
    {caseString:"チーム開発時にコミットメッセージを相手にわかりやすく伝えるために、Conventional Commitsを使うとき", check:true,},
    {caseString:"VSCodeの拡張から簡単に素早くConventional Commitsを書くことができる", check:true,},
]} />
<P>{"VSCodeの拡張機能Conventional Commitsを使って、コミットメッセージを素早く追加機能かバグ修正かわかりやすく区別できるように書く。"}</P>


<H2>{"Conventional Commitsとは"}</H2>
<H3>{"コミットメッセージをわかりやすくかつ簡単にするためのルール"}</H3>
<P>{"Conventional Commitsはコミットメッセージを開発者たちにわかりやすく伝えるためのルールで、次のように型・スコープ・タイトル・本文・ヘッダーから構成される。"}</P>
<CodeView language="bash" filename="">{
`<型>[任意 スコープ]: <タイトル>
[任意 本文]
[任意 フッター]`
}</CodeView>
<CodeView language="bash" filename="">{
`型：コミット種類
（例：feat: 機能を実装、fix: 機能を修正、doc: ドキュメント関連、refactor: リファクタリング）

スコープ（任意）：コミット範囲・どこを実装・修正したか（モジュールや機能名）

タイトル：コミットメッセージのタイトル

本文（任意）：メッセージの詳細情報

フッター（任意）：作者の情報など`
}</CodeView>
<P>{"Conventional Commitsを採用することによって、レポジトリの開発者やユーザー、または支援者がコミット履歴を追いやすくなり、よりプロジェクトの開発スピードが早くなることが期待されます。"}</P>
<P>{"また、コミットメッセージに統一感を持たせることにより、型ごとにグルーピングなどコミット履歴を整理することができる。"}</P>

<H3>{"コミットメッセージの例"}</H3>
<P>{"本文を持たない簡単なコミットメッセージ"}</P>
<CodeView language="bash" filename="">{
`feat: LayoutコンポーネントにHeaderコンポーネントを追加しました。
docs: READMEの誤字を修正しました。`
}</CodeView>
<P>{"詳細なコミットメッセージ"}</P>
<CodeView language="bash" filename="">{
`feat(Layout): LayoutコンポーネントにHeaderコンポーネントを追加しました。

新しくブログのヘッダに使用するHeaderコンポーネントを作成しました。
また、LayoutコンポーネントにHeaderコンポーネントを挿入し、ヘッダを表示できるようにしました。

Author: kouhai-san <kouhaisan.yorimichi@gmail.com>`
}</CodeView>
<ReferenceBlock href={"https://www.conventionalcommits.org/ja/v1.0.0/"} />



<H2>{"VSCodeにConventional Commitsのプラグインをインストールする"}</H2>
<H3>{"Conventional Commitsのプラグインをインストール"}</H3>
<P>{"VSCodeではConventional Commitsの拡張プラグインがあるため、コンソール上にコミットメッセージを書くよりも直感的かつ素早く作成することができる。"}</P>
<P>{"VSCodeの拡張プラグインから\"Conventional Commits\"を検索してインストールする。"}</P>
<ImageBlock imgSrc={"/blog/posts/vscode-conventional_1_miuapq"} />

<H3>{"Convertional Commitsでコミットメッセージを書く"}</H3>
<Ol>
<Li num={"1"} title={"コミットしたいファイルをステージに追加する"}>
<P>{"通常のコミットと同様にファイルをステージに追加する。"}</P>
<ImageBlock imgSrc={"/blog/posts/vscode-conventional_2_vod1r3"} />
</Li>
<Li num={"2"} title="Conventional Commitsボタンを押す">
<P>{"続いて、プラグインをインストールしたことによりConventional Commitsのボタンが新しく追加されるためボタンを押す。"}</P>
<P>{"すると、type(型)、scope(スコープ)、gitmoji(絵文字)、short(タイトル)、longer description(本文)、breaking changes(破壊的変更)が順番に聞かれるため選択またはメッセージを作成する。"}</P>
<CodeView language="bash" filename="conventional commits">{
`gitemoji(絵文字)：
コミットメッセージで使用する絵文字。typeによって様々な絵文字がある。

breaking changes(破壊的変更)：
機能実装に伴い使えなくなる機能や、モジュールのバージョン変更を説明するときに使用する。`
}</CodeView>
<ImageBlock imgSrc={"/blog/posts/vscode-conventional_4_nxfnal"} />
</Li>
<Li num={"3"} title="ステージ上のファイルをコミットする">
<P>{"さきほどの手順からコミットメッセージが作成できたため通常通りコミットする。コミット後にコミットメッセージを確認する。"}</P>
<ImageBlock imgSrc={"/blog/posts/vscode-conventional_6_wz1jfs"} />
<Alert>{"拡張プラグインのGit Graphから表示しています。"}</Alert>
</Li>
</Ol>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"Conventional Commitsを参考に、コミットメッセージをわかりやすく伝えることができる", check:true,},
    {caseString:"VSCodeの拡張から簡単に素早くConventional Commitsを書くことができる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
