// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, CodeView, CaseBlock, ConclusionBlock, RefarenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"Ubuntuでログイン後にキーボードとマウスが動かないときの対処"}</H2>
<CaseBlock caseList={[
    {caseString:"Ubuntuのパッケージを更新したとき、ログイン後キーボードとマウス、タッチパッドが反応せず途方に暮れたとき。", check:true,},
]} />
<P>{"タッチパッドが反応しないことがあったため原因を探してなんとか対処しました。"}</P>


<H2>{"ログイン画面はキーボードが動くのに、ログインしたら動かない場合"}</H2>
<H3>{"ドライバの再インストールを試す"}</H3>
<P>{"ログイン画面ではキーボードが動くのに、ログイン後にUbuntuの画面（GUI）にて反応しない場合はユーザーのデバイスドライバが正しく設定されていない可能性が高いです。"}</P>
<P>{"そのため、ドライバを再インストールします。"}</P>
<Alert mark={"info"}>{"今回のGUIアプリケーションの対象はXorgのため他GUIにおいて同様の現象が発生した場合はそれぞれのドライバを再インストールを試してみてください。"}</Alert>
<Ol>
<Li num={"1"} title={"CUI画面に切り替える"}>
<P>{"はじめにログイン画面（GUI）からCUI画面に移ります。Ubuntuの場合は"}<Key>{"Shift + Ctrl + F1"}</Key>{"コマンドからCUIへ移れます。"}</P>
</Li>
<Li num={"2"} title="CUIからアカウントにログインする">
<P>{"CUIに移るとログインユーザーとパスワードの入力になります。キーボードが反応しないユーザーにログインしましょう。"}</P>
<CodeView language="bash" filename="login">{
`login: {ログインするユーザー名}
password: {パスワード}`}</CodeView>
</Li>
<Li num={"3"} title={"Xorgのデバイスドライバをインストールする"}>
<P>{"Xorgのデバイスドライバに必要なパッケージxserver-xorg-input-allをCUI上にてインストールします。インストール後には再起動します。"}</P>
<CodeView language="cpp" filename="spdlog sample">{
`sudo apt-get install xserver-xorg-input-all
reboot `}</CodeView>
<P>{"再起動後は通常通りログインし、キーボードとマウスが動く確認して動けば大丈夫です。"}</P>
</Li>
</Ol>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"キーボードとマウスが動かなくなったら、xserver-xorg-input-allパッケージを再インストールする", check:true,},
    {caseString:"GUIではデバイスが反応しないため、CUI画面からインストールする", check:true,},
]} />
<H3>{"参考"}</H3>
<RefarenceBlock href={"https://askubuntu.com/questions/1033767/keyboard-not-working-after-update-to-18-04"}/>

{/* Finish */}
</>
    );
}

export default cpp_debug
