// Components for Blog
import {H2, H3, P, Ol, Li, Table, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const spdlog = () => {
    return (
<>
{/* Start */}

<H2>{"C++でログを作成する方法"}</H2>
<CaseBlock caseList={[
    {caseString:"C++を使ってstd::outではなくログをファイルやコンソールに出力したいとき", check:true,},
]} />
<P>{"以前C++で開発していた時期にログを出力する方法を調査しました。"}</P>
<P>{"テスト結果の成功・失敗を記録したり、プログラミングの進行をトレースするためが大きな理由です。また、1番の目的はプロジェクトメンバーと情報を共有するためです。"}</P>
<P>{"だいたい開発時にはバグが発生するため、どこで起こって次はどのような対策が必要か話し合う資料として必要でした。"}</P>


<H2>{"spdlogのインストール"}</H2>
<H3>{"spdlogで記録する"}</H3>
<P>{"spdlogとはC++で開発されたログ機能を提供するライブラリです。"}</P>
<P>{"ライブラリはヘッダファイルのみまたはコンパイル形式の2種類があります。好きな方を選択しましょう。今回は、簡単にインストールできるヘッダファイルを使用する方法を説明します。"}</P>
<P>{"spdlog開発者のGithubは次です。"}</P>
<ReferenceBlock href={"https://github.com/gabime/spdlog"}/>


<H3>{"spdlogをインストールする"}</H3>
<P>{"開発しているディレクトリにGithubからレポジトリをcloneするか、ダウンロードします。"}</P>
<Ol>
<Li num={"1"} title={"レポジトリをcloneする"}>
<CodeView language="bash" filename="git clone">{
`$ git clone https://github.com/gabime/spdlog.git`
}</CodeView>
<P>{"cloneしない場合は、レポジトリのzipファイルをダウンロードする"}</P>
</Li>
<Li num={"2"} title="includeディレクトリ内のspdlogディレクトリのみを開発ディレクトリに移動する">
<P>{"ダウンロードしたディレクトリ内にあるincludeディレクトリ内のspdlog（ヘッダファイルオンリー）を開発ディレクトリに移動します。"}</P>
<P>{"（clone・ダウンロード後のディレクトリ名もspdlogのため、別のディレクトリに保存します。）"}</P>    
</Li>
<Li num={"3"} title={"動作確認"}>
<P>{"spdlogを導入できたら動作を確認します。まずは、informationを表示します。"}</P>
<CodeView language="cpp" filename="spdlog sample">{
`#include "spdlog/spdlog.h"

int main(void)
{
    // informationを表示しよう
    spdlog::info("infromaion!");
}`}</CodeView>
</Li>
</Ol>


<H2>{"spdlogの基本性能"}</H2>
<H3>{"ログの表示方法"}</H3>
<P>{"まずはログを表示します。ログには用途に合わせてレベルごとに記録します。"}</P>
<CodeView language="cpp" filename="log output">{
`#include "spdlog/spdlog.h"

int main(void)
{
    // 各ログレベルごとにログを記録します
    // デフォルトのレベルはinfo（レベル2）です
    spdlog::info("infromaion!");
    spdlog::warn("warning!");
    spdlog::error("error!");

    // int型やstd::string型も引数に追加できます
    std::string test_message = "OK";
    spdlog::info("Test result is {}", test_message);

    int number_int = 10;
    float number_float = 12.345;
    spdlog::info("number_int is {:03d}", number_int);       // 表示桁数を設定できます
    spdlog::info("number_float is {:03.2f}", number_float); // 表示桁数を設定できます
}`
}</CodeView>


<H3>{"ログの表示方法"}</H3>
<P>{"ログを出力するレベルを設定できます。例えばログレベルがerrorのときは、errorとcriticalレベル以外のログは表示されません。"}</P>
<CodeView language="cpp" filename="log level">{
`#include "spdlog/spdlog.h"

int main(void)
{
    // ログレベルをerrorに変更します
    spdlog::set_level(spdlog::level::error);

    // errorのみログが表示されます
    spdlog::info("infromaion!");
    spdlog::warn("warning!");
    spdlog::error("error!");
}`
}</CodeView>

<H3>{"ログフォーマットの設定"}</H3>
<P>{"ログの出力形式を変更することができます。まずはフォーマットの設定コードは以下です。"}</P>
<CodeView language="cpp" filename="log format">{
`#include "spdlog/spdlog.h"

int main(void)
{
    // 出力フォーマットを変更します
    spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%l---%$] [thread %t] %v");
    spdlog::info("infromaion!");
}`
}</CodeView>
<P>{"よく使用する引数は下の表になります。また、詳細は次のURLを参考にしてください。"}</P>
<Table columnName={["引数", "意味", "表示例"]}
       values={[
        ["%v", "入力したテキストを表示", "YORIMICHI"],
        ["%t", "スレッドIDを表示", "1234"],
        ["%n", "ロガー名を表示", "Logger-Name"],
        ["%l", "ログレベルを表示", "info, error"],
        ["%L", "ログレベルを表示（省略名）", "YORIMICHI"],
        ["%H", "何時か表示（24時間表示）", "24"],
        ["%M", "何分か表示", "30"],
        ["%^, %$", "入力したテキストを表示", "og level is info[green]"],
        ]}/>
<ReferenceBlock href={"https://github.com/gabime/spdlog/wiki/3.-Custom-formatting"}/>

<H3>{"ログをファイルに出力する"}</H3>
<P>{"ログ内容をログファイルとして出力することもできます。基本的にはファイルに出力しています。"}</P>
<CodeView language="cpp" filename="file output">{
`#include "spdlog/spdlog.h"
#include "spdlog/sinks/basic_file_sink.h"
int main(void)
{
    // ファイルを生成できるかtry-catchより確認
    try 
    {
        // 引数は"ログ名"と"保存したいファイルパス"
        auto logger = spdlog::basic_logger_mt("basic_logger", "logs/basic-log.txt");
    }
    catch (const spdlog::spdlog_ex &ex)
    {
        std::cout << "Log init failed: " << ex.what() << std::endl;
    }

    // インスタンスからログをファイルに記録する
   spdlog::set_pattern("[%H:%M:%S] [%^---%l---%$] [thread %t] %v");
   logger->info("YORIMICHI");
}`
}</CodeView>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"C++を使ってstd::outではなくログをファイルやコンソールに出力したいときはspdlogを使用しています", check:true,},
    {caseString:"spdlogのインストールから使い方までざっくりと説明しました", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default spdlog
