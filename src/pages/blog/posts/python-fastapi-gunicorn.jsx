// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"FastAPIをGunicornで起動する方法メモ"}</H2>
<CaseBlock caseList={[
    {caseString:"Gunicornとuvicornの違いを整理", check:true,},
    {caseString:"Gunicornの設定を使用しながら、非同期処理であるuvicornでFastAPIを立ち上げたいとき", check:true,},
]} />
<P>{"GunicornでFastAPIを立ち上げる方法を調査したためメモ。"}</P>


<H2>{"GunicornとUvicornの違い"}</H2>
<H3>{"Gunicornの概要"}</H3>
<P>{"Gunicorn（「Green Unicorn」の略）は、PythonのWSGI（Web Server Gateway Interface）HTTPサーバーである。"}</P>
<P>{"WSGIは、PythonでWebアプリケーションとWebサーバー間の通信を規定するための標準規格で、PEP 3333で定められており、リクエストとレスポンスを同期的に処理するため、同一時間に一つのリクエストだけを処理できる。そのため、複数のリクエストを並行して処理する必要がないアプリや、リソースが限られた環境で使用する。"}</P>
<P>{"FlaskやDjangoなどの多くのPython WebフレームワークはWSGI規格に基づいている。"}</P>

<H3>{"uvicornの概要"}</H3>
<P>{"Uvicornは、ASGI（Asynchronous Server Gateway Interface）サーバーである。ASGIは、WSGIと比較して非同期処理を含むリクエストを効率的に処理できるようにするための規格。"}</P>
<P>{"ASGIは、リクエストとレスポンスを非同期に処理することができ、同時に多くのリクエストを効率的に処理することができます。これは、高トラフィックのWebアプリケーションやリアルタイムのデータ通信が必要なアプリケーションに適してる。"}</P>
<P>{"FastAPIやStarletteなどのPython WebフレームワークはWSGI規格に基づいている。"}</P>

<H3>{"GunicornとUvicornの違い"}</H3>
<P>{"主な違いは、GunicornがWSGIアプリケーション用で、UvicornがASGIアプリケーション用である。つまり、Webフレームワークが同期的ならGunicornを、非同期的ならUvicornを使用する。"}</P>
<P>{"しかし、Gunicornのプロセス管理機能を使用しながらUvicornの高速なASGIサーバー機能を組み合わせることができる。GunicornによるUvicornを実行した設定方法をまとめる。"}</P>

<H2>{"ASGI(Uvicorn)設定を追加したGunicornでFastAPIを立ち上げる"}</H2>
<H3>{"Gunicornのインストール"}</H3>
<P>{"FastAPIを立ち上げるために必要なライブラリをインストールする。最低限必要なライブラリは、FastAPI, Uvicorn, Gunicornである。"}</P>
<CodeView language="bash" filename="install">{
`pip install fastapi
pip install "uvicorn[standard]"
pip install gunicorn`
}</CodeView>

<H3>{"FastAPIの起動するmain.pyの作成"}</H3>
<P>{"FastAPIを起動する簡単なサンプルコードを以下に示す。単純にAPIをGETメソッドから取得する。"}</P>
<CodeView language="python" filename="main.py">{
`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root() -> dict[str, str]:
    """root

    Returns
    -------
    dict[str, str]
        root
    """
    return {"message": "root"}`
}</CodeView>

<H3>{"Gunicornの設定ファイルgunicorn.config.pyの作成"}</H3>
<P>{"Gunicornの設定ファイルを作成する。主に、CPUのコア数、ASGI（Uvicorn）の設定、ポートの設定、デーモン化を設定する。"}</P>
<P>{"ここでUvicornにより起動を実行するため、worker_classにuvicornのワーカーをセッティングする。"}</P>
<CodeView language="python" filename="guniconr.config.py">{
`"""gunicorn settings"""
import multiprocessing

workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "uvicorn.workers.UvicornWorker"
bind = "0.0.0.0:8000"
daemon = True

# ログ設定
accesslog = "./log/access.log"
errorlog = "./log/error.log"
loglevel = "info" # ログレベル ('debug', 'info', 'warning', 'error', 'critical')`
}</CodeView>
<P>{"主な設定内容は以下。"}</P>
<Table columnName={["引数", "意味", "デフォルト"]}
       values={[
        ["workers", "ワーカープロセスの数を指定、一般的にはシステムのCPUコア数の2倍+1が推奨される", "1"],
        ["worker_class", "使用するワーカータイプ、デフォルトは同期ワーカー", "'sync'"],
        ["bind", "サーバーが待ち受けるネットワークインターフェースとポート", "'127.0.0.1:8000'"],
        ["daemon", "ログレベルを表示", "False"],
        ["timeout", "ワーカーがリクエストを処理するのにかけられる最大時間（秒）", "30"],
        ["reload", "コードの変更を自動的に検知してサーバーをリロードするかどうかを指定", "False"],
        ["accesslog", "アクセスログの出力先、デフォルトは標準出力（-）", "'-'"],
        ["errorlog", "エラーログの出力先、デフォルトは標準出力（-）", "'-'"],
        ["loglevel", "ログレベル('debug', 'info', 'warning', 'error', 'critical')", "'info'"],
        ]}/>
<ReferenceBlock href={"https://docs.gunicorn.org/en/latest/settings.html#config-file"}/>

<H3>{"FastAPIの起動"}</H3>
<P>{"さきほどのmain.pyとgunicorn.config.pyを同じ階層のディレクトリに配置し、gunicornコマンドからFastAPIを起動する。"}</P>
<P>{"gunicornコマンドから設定した設定内容を読み取るため、--config引数からgunicorn.config.pyを指定する。"}</P>
<CodeView language="bash" filename="start">{
`gunicorn --config gunicorn.config.py main:app`
}</CodeView>
<P>{"起動後、指定したbindのlocalhost:8000にアクセスしてAPIが取得できているか確認する。"}</P>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"Gunicornとuvicornの違いを整理した", check:true,},
    {caseString:"Gunicornの設定を使用しながら、非同期処理であるuvicornでFastAPIを立ち上げることができる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
