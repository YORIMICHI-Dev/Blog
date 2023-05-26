// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"rm -rfではなくtrash-cliコマンドでファイルを削除する"}</H2>
<CaseBlock caseList={[
    {caseString:"rmコマンドだと削除したファイルがゴミ箱に移動してくれないため、必ずゴミ箱へ移したいとき", check:true,},
    {caseString:"trash-cliコマンドでファイルを削除するとき", check:true,},
]} />
<P>{"cmakeで作成したbuildファイルを消す作業で、rm -rf ./が履歴に残りうっかり別のディレクトリを削除することがあったため、rmで強制的に削除するのではなくtrash-cliコマンドで必ずゴミ箱へ移動するようにする。"}</P>


<H2>{"rmコマンドのまとめ"}</H2>
<H3>{"rmコマンドで削除ファイルをゴミ箱へ送ることができるか"}</H3>
<P>{"そもそもrmコマンドのオプションでゴミ箱へ移動できないか調べても、特にできそうなコマンドはなかった。"}</P>
<Table columnName={["オプション", "結果"]}
       values={[
        ["-f (または--force)", "コマンドの実行確認を行わず強制的に削除"],
        ["-r, -R (または--recursive)", "ディレクトリを再帰的に削除"],
        ["-i (または--interactive)", "削除前に実行するか確認"],
        ["-v (または--verbose)", "削除の経過を表示"],
        ]}/>
<P>{"rmコマンドで削除するのではなく、trashコマンドをインストールして削除を行う。"}</P>

<H2>{"trash-cliコマンドで安全に削除する"}</H2>
<H3>{"trash-cliコマンドのインストール"}</H3>
<P>{"trach-cliとは、rmコマンドと違い削除したファイルをゴミ箱へ送ってくれるため、間違えて消したファイルも簡単にもとに戻すことができる。開発者のGitHubは次です。"}</P>
<ReferenceBlock href={"https://github.com/andreafrancia/trash-cli"}/>
<P>{"次のコマンドからpackageをインストールする。"}</P>
<CodeView language={"bash"} filename={"apt"}>{
`sudo apt install trash-cli`
}</CodeView>

<H3>{"trash-cliコマンドの使い方"}</H3>
<P>{"適当なファイルを削除し、ゴミ箱から復元する一通りの操作。はじめにファイルをゴミ箱へ移動する。"}</P>
<CodeView language={"bash"} filename={"trash-put"}>{
`trash-put file.txt`
}</CodeView>
<P>{"ゴミ箱の中身を確認する。"}</P>
<CodeView language={"bash"} filename={"trash-list"}>{
`trash-list file1.txt

// 結果例
2023-05-14 12:36::00 /home/yorimichi/Document/file.txt`
}</CodeView>
<P>{"ゴミ箱の中身をすべて確認する場合はtrash-listのみ。"}</P>
<CodeView language={"bash"} filename={"trash-list"}>{
`trash-list`
}</CodeView>
<P>{"ゴミ箱から復元する。"}</P>
<CodeView language={"bash"} filename={"trash-restore"}>{
`trash-restore /home/yorimichi/Document/file.txt

// 対話モードで0（ファイル番号）を指定
0 2023-05-14 12:36::00 /home/yorimichi/Document/file.txt
What file to restore [0..0]: 0
`
}</CodeView>


<Table columnName={["コマンド", "結果"]}
       values={[
        ["trash-put", "ディレクトリやファイルをゴミ箱へ移動"],
        ["trash-list", "ゴミ箱の中身を確認"],
        ["trash-restore", "ゴミ箱の中身を元に戻す　元に戻すには対話から番号を指定（例：0~3, 5）"],
        ["trash-empty [number]", "指定した番号をゴミ箱から削除　指定がない場合はすべて削除"],
        ]}/>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"trash-cliコマンドでファイルをゴミ箱へ移すことができる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
