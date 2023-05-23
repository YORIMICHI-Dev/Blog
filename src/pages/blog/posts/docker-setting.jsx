// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"DockerでUbuntuのコンテナを立ち上げる"}</H2>
<CaseBlock caseList={[
    {caseString:"dockerでUbuntuの仮想環境を構築したいとき", check:true,},
    {caseString:"docker-compose, Dockerfileの基本的な作成方法を考えるとき", check:true,},
]} />
<P>{"普段Mac Proを使って業務を行っているが、Ubuntuの方が使い慣れているためdockerでUbuntu環境を立ち上げる方法をまとめました。"}</P>
<Alert>{"Mac Proは業務用のため、dockerのインストール自体は自家用PCのUbuntuからインストールしています"}</Alert>


<H2>{"Ubuntuのdockerイメージを取得する方法"}</H2>
<H3>{"dockerのインストール"}</H3>
<P>{"はじめにdockerをインストールするため必要なパッケージをインストールする。"}</P>
<CodeView language={"bash"} filename={"package"}>{
`sudo apt-get update
sudo apt-get install \\
    apt-transport-https \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release`
}</CodeView>
<P>{"次に、Dockerの公式GPGキーを追加する。"}</P>
<CodeView language={"bash"} filename={"gpg"}>{
`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
}</CodeView>
<P>{"次に、安定版のリポジトリを設定する。"}</P>
<CodeView language={"bash"} filename={"gpg"}>{
`echo \
"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
}</CodeView>
<P>{"最後に、安定版のリポジトリを設定する。"}</P>
<CodeView language={"bash"} filename={"install"}>{
`sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io`
}</CodeView>

<H3>{"dockerのインストール別解"}</H3>
<P>{"snapコマンドが使えれば、一行で終わる。"}</P>
<CodeView language={"bash"} filename={"snap"}>{
`sudo snap install docker`
}</CodeView>

<H3>{"ユーザーがdockerコマンドを実行する手順"}</H3>
<P>{"dockerグループに入っていないとdockerコマンドを実行するためにsudoが必要になる。そのため、userをdockerグループに入れてrebootする。"}</P>
<CodeView language={"bash"} filename={"usermod"}>{
`sudo usermod -aG docker $USER
reboot`
}</CodeView>

<H3>{"Ubuntu22.04LTSのイメージをプルする"}</H3>
<P>{"Ubuntu22.04LTSのイメージをプルする。使用したいイメージをDocker Hubから検索する。今回は以下のページを参照にubuntu:22.04のイメージをプルする。"}</P>
<ReferenceBlock href={"https://hub.docker.com/_/ubuntu"} />
<CodeView language={"bash"} filename={"docker pull"}>{
`docker pull ubuntu:22.04
docker images

//結果
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
ubuntu       22.04     3b418d7b466a   3 weeks ago   77.8MB`
}</CodeView>

<H2>{"docker-composeからコンテナを立ち上げる"}</H2>
<H3>{"設定用のdocker-compose.yamlファイルを作成"}</H3>
<P>{"docker-composeよりコンテナを立ち上げる際の設定をdocker行う。docker-composeをしなくても、イメージをプルしたためdocker runコマンドからイメージを立ち上げることは可能だが、マウントやポートなど設定する際にはファイルに残しといたほうが便利であるため。"}</P>
<P>{"はじめにdocker-compose.yamlを作成する。作成場所は例として/home/yorimichi/Desktop/test/docker-compose.yamlとした。"}</P>
<CodeView language={"yaml"} filename={"docker-compose"}>{
`# docker compose version
version: '3.7'
# 立ち上げるコンテナ内容
services:
  # コンテナ識別子
  ubuntu_test:
    # 使用するイメージ
    image: Ubuntu:22.04
    # コンテナホスト名
    hostname: user1
    # コンテナ名
    container_name: container1
    # コンテナ作成時スタート状態にする
    tty: true
    # マウント設定
    volumes:
      - type: bind
        source: /home/kouhai-san/Desktop/test/
        target: /home/yorimichi/test/
    # ポート設定
    ports:
      - 8080:80
    # コンテナ立ち上げ後のコマンド
    command: /bin/bash`
}</CodeView>

<P>{"docker-composeを作成したらdocker composeコマンドよりコンテナを作成する"}</P>
<P>{"-fコマンドよりdocker-composeの設定ファイルを指定し、upでコンテナを作成する。また、コンテナ作成後にバックグランドで動作させるため-dコマンドを追加する。"}</P>
<CodeView language={"bash"} filename={"docker compose"}>{
`docker compose -f ./docker-compose.yaml up -d`
}</CodeView>
<P>{"作成されたdockerコンテナを確認する。"}</P>
<CodeView language={"bash"} filename={"docker ps"}>{
`docker ps

CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS         PORTS                                   NAMES
a4a45a4ad40b   ubuntu:22.04   "/bin/bash"   6 seconds ago   Up 5 seconds   0.0.0.0:8080->80/tcp, :::8080->80/tcp   container1`
}</CodeView>

<H3>{"dockerコンテナへ入る"}</H3>
<P>{"作成されたdockerコンテナへ入る。既に動作中のコンテナへ入るためdocker execを実行する。"}</P>
<P>{"-itコマンドはコンテナをシェル操作するときに必要なコマンドである。また、対象のコンテナのIDを入力するが、他コンテナと被らなくなる長さで十分であり、今回の場合はaだけでも大丈夫。/bin/bashは使用するbashシェル。"}</P>
<CodeView language={"bash"} filename={"docker exec"}>{
`docker exec -it a4a /bin/bash`
}</CodeView>
<P>{"ここまでで、docker-composeで設定したUbuntu22.04のイメージのコンテナの作成と実行ができた。"}</P>

<H3>{"dockerコンテナ停止・削除"}</H3>
<P>{"動作中コンテナの停止。"}</P>
<CodeView language={"bash"} filename={"docker stop"}>{
`docker stop a4a`
}</CodeView>
<P>{"不要になったコンテナの削除。"}</P>
<CodeView language={"bash"} filename={"docker rm"}>{
`docker rm a4a`
}</CodeView>


<H2>{"Dockerfileを作成してコンテナの設定を自動化"}</H2>
<H3>{"Dockerfileの設定"}</H3>
<P>{"Dockerfileを作成することにより、コンテナ立ち上げ時にイメージのプルと読み込みやコンテナの環境設定や必要なパッケージをインストールする。"}</P>
<P>{"Dockerfileの例。"}</P>
<CodeView language={"dockerfile"} filename={"Dockerfile"}>{
`# Ubuntu 22.04のイメージを使用
FROM ubuntu:22.04

# メタデータ
LABEL maintainer="yorimichi"
LABEL version="1.0"
LABEL description="Example of Dockerfile using Ubuntu 22.04"

# タイムゾーン設定
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y tzdata

# パッケージのインストール
RUN apt install -y \\
    curl \\
    nano \\
    git \\
    build-essential

RUN apt install -y \\
    libbz2-dev \\
    libffi-dev \\
    liblzma-dev \\
    libncursesw5-dev \\
    libreadline-dev \\
    libsqlite3-dev \\
    libssl-dev \\
    libxml2-dev \\
    libxmlsec1-dev \\
    llvm \\
    make \\
    tk-dev \\
    wget \\
    xz-utils \\
    zlib1g-dev

# pyenvをインストール
RUN curl https://pyenv.run | bash

# 環境変数を設定し、シェルログイン時にpyenvが利用できるようにする
ENV PYENV_ROOT /root/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH

# Pythonのバージョンを設定しインストール
ENV PYTHON_VERSION 3.10
RUN pyenv install $PYTHON_VERSION
RUN pyenv global $PYTHON_VERSION

# poetryをインストール
RUN curl -sSL https://install.python-poetry.org | python3 -

# poetryの設定
ENV PATH /root/.local/bin:$PATH
RUN poetry config virtualenvs.in-project true

# 作業ディレクトリ
WORKDIR /home/yorimichi/test

# コンテナ起動時に実行するコマンド
CMD [ "/bin/bash" ]
`
}</CodeView>

<H3>{"docker-compose.yamlの修正"}</H3>
<P>{"Dockerfileの設定をdocker-compose.yamlに反映させるため一部修正する。"}</P>
<P>{"修正箇所はimageをbuildに設定し、Dockerfileの場所を示すcontextとDockerfileファイル名を入力する。今回はdocker-compose.yamlとDockerfileは同じ場所に置いている。"}</P>
<CodeView language={"yaml"} filename={"docker-compose"}>{
`# docker compose version
version: '3.7'
# 立ち上げるコンテナ内容
services:
  # コンテナ識別子
  ubuntu_test:
    # buildに使用するDockerfile
    build:
      # ファイル場所
      context: .
      # ファイル名
      dockerfile: Dockerfile
    # コンテナホスト名
    hostname: user1
    # コンテナ名
    container_name: container1
    # コンテナ作成時スタート状態にする
    tty: true
    # マウント設定
    volumes:
      - type: bind
        source: /home/kouhai-san/Desktop/test/
        target: /home/yorimichi/test/
    # ポート設定
    ports:
      - 8080:80
    # コンテナ立ち上げ後のコマンド
    command: /bin/bash`
}</CodeView>

<H3>{"docker composeによるbuild"}</H3>
<P>{"Dockerfileの設定をイメージとしてビルドする。"}</P>
<P>{"docker composeからbuildを行う。"}</P>
<CodeView language={"bash"} filename={"build"}>{
`docker compose -f ./docker-compose.yaml build`
}</CodeView>
<P>{"しばらくビルド内容が表示される。ビルド終了後はdocker composeよりコンテナを作成する。"}</P>
<CodeView language={"bash"} filename={"docker compose"}>{
`docker compose -f ./docker-compose.yaml up -d`
}</CodeView>
<CodeView language={"bash"} filename={"docker ps"}>{
`docker ps

CONTAINER ID   IMAGE              COMMAND       CREATED         STATUS         PORTS                                   NAMES
d25d14f12368   test-ubuntu_test   "/bin/bash"   3 seconds ago   Up 2 seconds   0.0.0.0:8080->80/tcp, :::8080->80/tcp   container1`
}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"dockerでUbuntuの仮想環境を構築することができる。", check:true,},
    {caseString:"docker-compose, Dockerfileの基本的な使い方ができる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
