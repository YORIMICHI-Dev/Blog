// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, ImageBlock, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"
import img1 from "public/images/posts/react-next-deploy-aws/react-next-deploy-aws.png"

const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"Next.jsをAWSのEC2上にデプロイする"}</H2>
<CaseBlock caseList={[
    {caseString:"AWSのEC2インスタンス上にNext.jsをデプロイしたいとき", check:true,},
    {caseString:"Next.jsをインスタンス上でデーモンとして常に動作させたいとき", check:true,},
]} />
<P>{"Next.jsをAWSのEC2インスタンス上にデプロイする場合は、HTTPリクエストを受け取るサーバーとNext.jsを常に動かし続けるデーモン化が必要です。"}</P>
<P>{"HTTPリクエストを受け取るサーバーとしてNginxを使用し、Next.jsをpm2コマンドでデーモン化しEC2インスタンス上でデプロイしました。"}</P>
<Alert>{"EC2インスタンスは既に立ち上げている状態を想定しています。"}</Alert>

<H2>{"HTTPリクエストを受け取るサーバーを立ち上げる"}</H2>
<H3>{"Nginxのインストール"}</H3>
<P>{"HTTPリクエストを受け取ったとき処理するサーバーを立ち上げる。今回はNginxを使用して処理する。"}</P>
<Ol>
<Li num={"1"} title={"Nginxインストール"}>
<P>{"最初にNginxをインストールする。"}</P>
<CodeView language={"bash"} filename={"install"}>{
`sudo apt install nginx`
}</CodeView>
</Li>
<Li num={"2"} title={"Nginxの立ち上げ"}>
<P>{"インストールが完了したら、Nginxを常に動作させるためsystemctl enableコマンドを叩く。その後、Nginxを開始する。"}</P>
<CodeView language={"bash"} filename={"start"}>{
`sudo systemctl enable nginx
sudo systemctl start nginx`
}</CodeView>
<P>{"Nginxが立ち上がったかを確認する。確認としてsystemctl statusから現在状態を確認する。"}</P>
<CodeView language={"bash"} filename={"status"}>{
`sudo systemctl status nginx

ubuntu@ip-10-0-0-233:~$ sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2023-04-19 11:26:26 UTC; 4h 18min ago
       Docs: man:nginx(8)
   Main PID: 6763 (nginx)
      Tasks: 2 (limit: 1141)
     Memory: 2.7M
        CPU: 44ms
     CGroup: /system.slice/nginx.service
             ├─6763 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             └─6764 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""`
}</CodeView>
<P>{"またHTTPリクエスト（EC2のドメインかIPアドレス）でNginx画面に飛べるか確認する。"}</P>
</Li>
</Ol>

<H3>{"Nginxのリバースプロキシを設定する"}</H3>
<P>{"HTTPリクエストがきたらNexjsが動作しているポート3000にリバースプロキシするように設定する。"}</P>
<Ol>
<Li num={"1"} title={"Nginx設定ファイル作成"}>
<P>{"Nginxの設定ファイルを作成し、/etc/nginx/sites-available/に保存するため、はじめに設定ファイルを作成する。設定ファイル名は自由に決めても問題ない。"}</P>
<CodeView language={"bash"} filename={"touch"}>{
`sudo touch /etc/nginx/sites-available/your-site.conf`
}</CodeView>
<P>{"続いてnanoかvimコマンドでファイルを開き、設定ファイルを更新する。"}</P>
<CodeView language={"bash"} filename={"edit"}>{
`sudo nano /etc/nginx/sites-available/your-site.conf`
}</CodeView>
<CodeView language={"json"} filename={".conf"}>{
`server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 2;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
}</CodeView>
<P>{"2-3行目はリクエスト（HTTP）とサーバーのドメイン名を設定する。サーバードメイン名がない場合はそのままでも問題ない。"}</P>
<P>{"locationは指定されたリクエストURLに一致するHTTPリクエストを処理し、proxy_passでポート3000にリバースプロキシを行う。他はWebsocketの設定のため割愛する。"}</P>
<P>{"設定後、Nginxの設定が間違えていないか構文をチェックする。"}</P>
<CodeView language={"bash"} filename={"check"}>{
`sudo nginx -t`
}</CodeView>
</Li>
<Li num={"2"} title={"Nginx再起動"}>
<P>{"最後にNginxを再起動する。"}</P>
<CodeView language={"bash"} filename={"reboot"}>{
`sudo systemctl restart nginx`
}</CodeView>
</Li>
</Ol>
<P>{"ここまでで、HTTPリクエストがEC2インスタンスにきたときポート3000のNext.jsに飛ばせるように設定が終わった。"}</P>


<H2>{"Next.jsを立ち上げる"}</H2>
<H3>{"Next.jsアプリの立ち上げ"}</H3>
<P>{"立ち上げたいNext.jsのアプリをEC2インスタンス上に移動させる。移動方法はgitによるcloneが一般的だと思われる。またはssh接続よりローカルからコピーする。"}</P>
<P>{"その後、プロジェクトディレクトリ内でビルドする。"}</P>
{/* <ReferenceBlock href={} /> */}
<CodeView language={"bash"} filename={"build"}>{
`npm run build`
}</CodeView>


<H2>{"Next.jsをデーモン化する"}</H2>
<H3>{"pm2コマンドによるデーモン化"}</H3>
<P>{"Next.jsを動かしているNode.jsをデーモンとして実行するプロセスマネージャであるpm2をインストールする。"}</P>
<Ol>
<Li num={"1"} title={"インストール"}>
<CodeView language={"bash"} filename={"install"}>{
`npm install -g pm2`
}</CodeView>
</Li>
<Li num={"2"} title={"設定ファイル作成"}>
<P>{"続いてpm2を実行する際の設定ファイルをNext.jsプロジェクトのルートディレクトリにecosystem.config.jsとして作成する。"}</P>
<CodeView language={"json"} filename={"ecosystem.config.js"}>{
`module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: 'npm',
        args: 'start',
      },
    ],
  };`
}</CodeView>
<P>{"nameは自由だがわかりやすくプロジェクト名を、scriptは実行するnpmコマンドと、argsは実行するpackage.jsonで定義したスクリプトである。"}</P>
</Li>
<Li num={"3"} title={"pm2コマンドでNext.jsを立ち上げる"}>
<P>{"pm2コマンドで設定ファイルからNext.jsをスタートする。"}</P>
<CodeView language={"bash"} filename={"Next.js start"}>{
`pm2 start ecosystem.config.js`
}</CodeView>
<P>{"スタートしたら立ち上がっているか確認する"}</P>
<CodeView language={"bash"} filename={"Next.js check"}>{
`pm2 status

// 表示
┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼───────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ nextjs-app    │ default     │ N/A     │ fork    │ 8064     │ 2h     │ 0    │ online    │ 0%       │ 69.6mb   │ ubuntu   │ disabled │
└────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴────��──────┴──────────┴──────────┴──────────┴──────────┘
ubuntu@ip-10-0-0-233:~$ 
`
}</CodeView>
<P>{"また、pm2で実行しているNode.jsを以下のコマンドで管理することができる。"}</P>
<CodeView language={"bash"} filename={"pm2 command"}>{
`// 停止
pm2 stop nextjs-app
// 再起動
pm2 restart nextjs-app
// ログを表示
pm2 logs nextjs-app`
}</CodeView>
</Li>
</Ol>


<H2>{"デプロイできている確認"}</H2>
<H3>{"HTTPリクエストからNext.jsにアクセスできるか確認"}</H3>
<P>{"最後に、EC2インスタンスのドメイン名またはIPアドレスからデプロイしたNext.jsが接続できているか確認する。"}</P>
<ImageBlock imgSrac={img1} />


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"AWSのEC2インスタンス上にNext.jsをデプロイすることができる", check:true,},
    {caseString:"Nginxとpm2によりサーバーとNext.jsのデーモン化ができる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
