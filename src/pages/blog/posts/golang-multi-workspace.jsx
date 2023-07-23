// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"go workでローカルパッケージのモジュールを認識させる"}</H2>
<CaseBlock caseList={[
    {caseString:"ローカルパッケージのモジュールを認識させてimportしたいとき", check:true,},
    {caseString:"go workの使い方について整理したいとき", check:true,},
]} />
<P>{"golangでマイクロサービスを作成する際、モジュールを共有して認識させるため、go.workを使用した。"}</P>

<H2>{"go workについて"}</H2>
<H3>{"go workの概要"}</H3>
<P>{"Golangのバージョン1.18から導入された新機能で、ワークスペース内でのモジュールのimportを容易にするためのコマンド。"}</P>
<P>{"go workを使用してプロジェクトのルートディレクトリに設定ファイルgo.workを置くことで、追記したディレクトリ内のgo.modモジュールが簡単にimportすることができる。"}</P>
<ReferenceBlock href={"https://go.dev/doc/tutorial/workspaces#learn-more-about-workspaces"}/>

<H3>{"go workの使い方"}</H3>
<P>{"例として以下のようなワークスペースがある。目的はutilsディレクトリのモジュールを、serviceディレクトリ内のmain.goファイルからimportし、util.goで定義した関数SampleFunctionを実行する。"}</P>
<CodeView language={"bash"} filename={"directory"}>{
`workspace
    |
    |--service
    |   |--cmd
    |   |   |--main.go
    |   |--go.mod
    |
    |--utils
        |--utils.go
        |--go.mod`
}</CodeView>
<CodeView language={"go"} filename={"utils/go.mod"}>{
`module utils

go 1.20`
}</CodeView>
<CodeView language={"go"} filename={"utils/utils.go"}>{
`package utils

import (
  "log"
)

func SampleFunction() {
  log.Println("SampleFunction was called")
}`
}</CodeView>

<CodeView language={"go"} filename={"service/cmd/web/main.go"}>{
`package main

import (
  // TODO go.workファイルを作成してutilsパッケージをimportする
)

func main() {
  // TODO SampleFunctionを呼び出す
}`
}</CodeView>


<P>{"はじめにgo work initコマンドを実行するとgo.workファイルが作成される。go.workファイルからimportしたいgo.modファイルを持つディレクトリを指定する。今回はutilsディレクトリを選択する。"}</P>
<CodeView language={"bash"} filename={"go work init"}>{
`go work init`
}</CodeView>
<Alert>{"moddirs内にgo.modファイルが作成されている必要がある。"}</Alert>
<P>{"go workコマンドより以下のようにgo.workファイルが作成される。"}</P>
<CodeView language={"go"} filename={"go.work"}>{
`go 1.20`
}</CodeView>
<P>{"続いてgo.modファイルを持つディレクトリをワークスペースとして追加する。追加する場合はgo work useから追加する。"}</P>
<CodeView language={"bash"} filename={"go work init"}>{
`go work use service utils`
}</CodeView>
<CodeView language={"go"} filename={"go work use"}>{
`go 1.20

use (
    ./service
    ./utils
)`

}</CodeView>

<P>{"これによりutilsディレクトリ内のgo.modファイルからutilsモジュールをimportすることができるようになったためmain.goの中身を書き換える。"}</P>
<CodeView language={"go"} filename={"service/cmd/web/main.go"}>{
`package main

import (
  "utils/utils" // module名/package名
)

func main() {
  utils.SampleFunction()
}`
}</CodeView>
<CodeView language={"bash"} filename={"result"}>{
`go run cmd/web/main.go

// 結果
SampleFunction was called`
}</CodeView>
<P>{"go.workによりローカルのutilsディレクトリのパスを指定することで、その中のモジュールをimportすることができる。"}</P>
<Alert>{"go.workはローカルのパスを指定しているため開発環境ごとにパスを修正する必要がある。また、go.workファイルはgitignoreファイルに記載することが推奨されている。"}</Alert>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"ワークスペース機能によりローカルパッケージのモジュールを認識させてimportすることができる", check:true,},
    {caseString:"go workを使ってことなるモジュールを持つディレクトリをワークスペースに追加することができる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
