// ブログで使用するコンポーネント
import {H2, H3, P, Ol, Li, CodeView, CaseBlock, ConclusionBlock, RefarenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const spdlog = () => {
    return (
<>
{/* 開始 */}

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
<RefarenceBlock href={"https://github.com/gabime/spdlog"}/>

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

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"C++を使ってstd::outではなくログをファイルやコンソールに出力したいとき", check:true,},
]} />



{/* 終了 */}
</>
    );
}

export default spdlog
