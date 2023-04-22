// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"
import img1 from "public/images/posts/ubuntu-certificate/ubuntu-certificate1.png"
import img2 from "public/images/posts/ubuntu-certificate/ubuntu-certificate2.png"

const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"AWSのEC2上にあるnginxとHTTPS通信するためcertbotでSSL/TLSをやってみる"}</H2>
<CaseBlock caseList={[
    {caseString:"nginxサーバーと無料でHTTPS通信したいとき", check:true,},
    {caseString:"SSL/TLS証明を提供されているLet's Encryptの証明書をcertbotから取得するとき", check:true,},
]} />
<P>{"AWSのEC2インスタンス上にあるnginxサーバーとHTTPではなくセキュリティ上HTTPS通信したいとき、AWSなのでAWS Certificate Managerを使って暗号化するのが一般的だと思います。しかし、nginxの場合はACMが対応されていませんでした（Apacheは最近されたそうです。）"}</P>
<P>{"ELBやCloud Frontを使えばACMによるHTTPS通信ができるそうなのですが、私の場合は個人ブログをnginxサーバーに立てているだけなので冗長性や速度は必要なくコスト面からも必要十分過ぎたため、無料の証明書を発行されているLet's Encryptから発行してみました。"}</P>


<H2>{"SSL/TLS証明の発行"}</H2>
<H3>{"SSL/TLSの無償発行（Let's Encrypt）"}</H3>
<P>{"証明書発行は有償がほとんどであるため、無料で証明書を発行するには証明書を自作するか、無償で提供されているLet's Encryptから取得する。"}</P>
<P>{"Let's Encryptは無料で証明書を取得できたり、証明書を自動で更新してくれている。今回はありがたく使わせていただく。"}</P>
<ReferenceBlock href={"https://letsencrypt.org/ja/"}/>


<H2>{"nginxサーバーにSSL/TLSによる証明書を割り当てる"}</H2>
<H3>{"certbotのインストール"}</H3>
<P>{"証明書発行はLet's Encryptがされていますが、証明書の取得とnginxへの割当はcertbotが推奨されていたためマニュアル通りにやってみました。"}</P>
<ReferenceBlock href={"https://certbot.eff.org/"}/>
<P>{"certbotのホームページに移動するとHTTPが動いているサーバーが聞かれるため、自分の環境を選択してインストール方法を確認します。"}</P>
<Alert>{"私の環境はUbuntu 22.04LTSとnginxのため、以下の説明は私の環境準拠になります。"}</Alert>
<ImageBlock imgSrc={img1} />
<P>{"選択したらインストール方法と証明書取得方法のページに移動するため、指示に従って順番に行っていく。"}</P>
<Ol>
<Li num={"1"} title={"SSH接続よりサーバーへ接続する"}>
<P>{"nginxサーバーへSSHよりアクセスします。私はEC2のためEC2 Instance Connectからサーバーへアクセスしています。"}</P>
</Li>
<Li num={"2"} title={"snapdをインストールする"}>
<P>{"snapdをインストールします。snapdはaptと同じくソフトウェアパッケージをインストールするパッケージマネージャですが、Ubuntuを含めたLinuxディストリビューションでサポートされています。"}</P>
<P>{"certbotはsnapdでインストールが推奨されています。"}</P>
<CodeView language={"bash"} filename={"snapd"}>{
`sudo apt update
sudo apt install snapd`
}</CodeView>
</Li>
<Li num={"3"} title={"snapdをupdateする"}>
<P>{"snapdを最新バージョンにupdateします。"}</P>
<CodeView language={"bash"} filename={"update"}>{
`sudo snap install core; sudo snap refresh core`
}</CodeView>
</Li>
<Li num={"4"} title={"既存のcertbotを削除する"}>
<P>{"snapdによるパッケージマネージを行うため既存のcertbotがあれば削除します。"}</P>
<CodeView language={"bash"} filename={"delete"}>{
`sudo apt-get remove certbot`
}</CodeView>
</Li>
<Li num={"5"} title={"certbotをインストールする"}>
<P>{"snapdからcertbotをインストールします。また、シンボリックリンクを作成しcertbotコマンドを直打ちできるようにします。"}</P>
<CodeView language={"bash"} filename={"install"}>{
`sudo snap install --classic certbot`
}</CodeView>
<CodeView language={"bash"} filename={"link"}>{
`sudo ln -s /snap/bin/certbot /usr/bin/certbot`
}</CodeView>
</Li>
</Ol>
<P>{"ここまでで、certbotのインストールが終わりになります。certbotがインストールできればあとは証明書を取得するだけです。"}</P>

<H3>{"SSL/TLS証明書の取得"}</H3>
<P>{"certbotでSSL/TLS証明書を取得しnginxに割り当てます。nginxの設定ファイル更新はcertbotが自動的に行ってくれます。"}</P>
<Ol>
<Li num={"1"} title={"証明書の取得とnginx設定の自動更新"}>
<P>{"certbotで証明書を取得しnginxのHTTPS化を自動で行っていきます。コマンドは以下の1行です。"}</P>
<CodeView language={"bash"} filename={"link"}>{
`sudo certbot --nginx`
}</CodeView>
<P>{"いくつか質問が出てくるため順番に答えていきます。"}</P>
<CodeView language={"bash"} filename={""}>{
`// 連絡先のEmailアドレスの設定
Creating virtual environment...
Installing Python packages...
Installation succeeded.
Enter email address (used for urgent notices and lost key recovery) (Enter 'c' to cancel): yorimichi-dev@gmail.com`
}</CodeView>
<CodeView language={"bash"} filename={""}>{
`// ライセンスの承認
-------------------------------------------------------------------------------
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.1.1-August-1-2016.pdf. You must agree
in order to register with the ACME server at
https://acme-v01.api.letsencrypt.org/directory
-------------------------------------------------------------------------------
(A)gree/(C)ancel:`
}</CodeView>
<CodeView language={"bash"} filename={""}>{
`// 証明書を発行するドメイン名を選択（nginxの設定ファイルから選ばれる）
// 複数出た場合、すべて選択するならEnter、選択するなら番号を入力
Which names would you like to activate HTTPS for?
We recommend selecting either all domains, or all domains in a VirtualHost/server block.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: yorimichi-dev.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): `
}</CodeView>
</Li>
<Li num={"2"} title={"certbotの自動更新の確認"}>
<P>{"証明書の有効期間は90日ですが、certbot実行後は90日後に証明書を自動的に更新してくれます。"}</P>
<P>{"cronまたはsystemdタイマで自動的に更新するようにあらかじめ設定されます。以下のコマンドで確認します。"}</P>
<CodeView language={"bash"} filename={"confirm"}>{
`// cronジョブによる自動更新
crontab -l
sudo crontab -l

// systemで自動更新
systemctl list-timers --all`
}</CodeView>
<P>{"自動的更新をされるかテストする場合はcertbot renew --dry-runコマンドで確認します。successがでてくれば自動更新されます。"}</P>
<CodeView language={"bash"} filename={"dry run"}>{
`sudo certbot renew --dry-run

// 結果 successがでれば自動更新
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/yorimichi-dev.com.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Simulating renewal of an existing certificate for yorimichi-dev.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations, all simulated renewals succeeded: 
  /etc/letsencrypt/live/yorimichi-dev.com/fullchain.pem (success)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`
}</CodeView>
</Li>

</Ol>
<P>{"これでSSL/TLS証明の発行とnginxとのHTTPS通信設定が完了します。最後に実際にnginxサーバーにブラウザからアクセスしてみます。（私の環境はNext.jsにバウンドされています。）"}</P>
<ImageBlock imgSrc={img2} />


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"nginxサーバーと無料でHTTPS通信することができる", check:true,},
    {caseString:"certbotからSSL/TLS証明書を取得してnginxサーバー似自動設定することができる", check:true,},
    {caseString:"AWSでELBやCloud Frontを経由せず、無料でEC2サーバーとHTTPS通信できる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
