// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"ATP-Link ArcherのWifiドライバをUbuntuにインストールする"}</H2>
<CaseBlock caseList={[
    {caseString:"UbuntuにTP-Link Archerの毎回ドライバを入れたいとき。", check:true,},
]} />
<P>{"Linux（Ubuntu）でTP-Link ArcherのWifiアダプターを使用するときのメモです。"}</P>
<P>{"Ubuntuを再インストールする際にTP-Link Archerの毎回ドライバを入れる方法を調査していたためまとめました。"}</P>


<H2>{"ドライバインストール方法"}</H2>
<H3>{"RTL8812AUのレポジトリからドライバをインストールする"}</H3>
<P>{"UbuntuにTP-Link ArcherのWireアダプターを使用する際に、ドライバがないとWifiを認識することができないため、以下のレポジトリからドライバをインストールする。"}</P>
<ReferenceBlock href={"https://github.com/aircrack-ng/rtl8812au"}/>
<Alert mark={""}>ドライバのインストールにはgitをインストールする必要があります。また、gitからレポジトリをcloneするため有線ケーブルなどでネットにつながっている必要があります。</Alert>

<H2>{"RTL8812AUのインストール"}</H2>
<H3>{"インストール手順"}</H3>
<Ol>
<Li num={"1"} title={"DKMSをインストール"}>
<P>{"はじめにDKMSをインストールする。DKMSはDynamic Kernel Module Supportの略で、Linuxのカーネルがアップグレードした際にインストールされているDKMSも自動的に再コンパイルされる。"}</P>
<P>{"RTL8812AUはDKMSモジュールのためカーネルが更新された場合でも、カーネルに合わせた状態に再コンパイルされます。"}</P>
<CodeView language="bash" filename="dkms install">{
`sudo apt-get install dkms`}</CodeView>
</Li>
<Li num={"2"} title="レポジトリのダウンロード">
<P>{"レポジトリをダウンロードする。ダウンロード後、レポジトリの中に移動する。"}</P>
<CodeView language="bash" filename="git clone">{
`git clone -b v5.6.4.2 https://github.com/aircrack-ng/rtl8812au.git
cd rtl*`}</CodeView>
</Li>
<Li num={"3"} title="ドライバをインストール">
<P>{"ドライバをインストールすれば終了です。インストール後、Wifiマークが表示されるため、Wifiがつながっているか確認する。もしWifiマークが出ていない場合は再起動して確認する。"}</P>
<CodeView language="bash" filename="install">{
`sudo make dkms_install`}</CodeView>
</Li>
</Ol>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"TP-Link Archerドライバを入れる方法を簡単にまとめました。", check:true,},
    {caseString:"インストール手順はgithubに記載されている手順通りです。", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
