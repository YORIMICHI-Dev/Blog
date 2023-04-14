import {H2, H3, P, Li, CodeView} from "@/components/atoms/blog_components/BlogComponents"

const spdlog = () => {
    return (
<>

<H2>{"C++でログを作成する方法"}</H2>
<P>{"以前C++で開発していた時期にログを出力する方法を調査しました。"}</P>
<P>{"テスト結果の成功・失敗を記録したり、プログラミングの進行をトレースするためが大きな理由です。また、1番の目的はプロジェクトメンバーと情報を共有するためです。"}</P>
<P>{"だいたい開発時にはバグが発生するため、どこで起こって次はどのような対策が必要か話し合う資料として必要でした。"}</P>

<H2>{"spdlogのインストール"}</H2>
<H3>{"spdlogで記録する"}</H3>
<P>{"spdlogとはC++で開発されたログ機能を提供するライブラリです。"}</P>
<P>{"ライブラリはヘッダファイルのみまたはコンパイル形式の2種類があります。好きな方を選択しましょう。今回は、簡単にインストールできるヘッダファイルを使用する方法を説明します。"}</P>
<P>{"spdlog開発者のGithubは次です。"}</P>

<H3>{"spdlogで記録する"}</H3>
<P>{"開発しているディレクトリにGithubからレポジトリをcloneするか、ダウンロードします。"}</P>
<Li>{"1-1 レポジトリをcloneする"}</Li>
<CodeView language="bash" filename="git clone">{
`$ git clone https://github.com/gabime/spdlog.git`
}</CodeView>
<Li>{"1-2 cloneしない場合は、レポジトリのzipファイルをダウンロードする"}</Li>
<Li>{"2 includeディレクトリ内のspdlogディレクトリのみを開発ディレクトリに移動する"}</Li>
<P>{"ダウンロードしたディレクトリ内にあるincludeディレクトリ内のspdlog（ヘッダファイルオンリー）を開発ディレクトリに移動します。"}</P>
<P>{"（clone・ダウンロード後のディレクトリ名もspdlogのため、別のディレクトリに保存します。）"}</P>
<Li>{"3 動作確認"}</Li>
<P>{"spdlogを導入できたら動作を確認します。まずは、informationを表示します。"}</P>
<CodeView language="cpp" filename="git clone">{
`#include "spdlog/spdlog.h"

int main(void)
{
    // informationを表示しよう
    spdlog::info("infromaion!");
}
`}</CodeView>



</>
    );
}

export default spdlog
