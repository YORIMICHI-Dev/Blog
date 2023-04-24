// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"コアダンプ対策にC++でデバッグをする"}</H2>
<CaseBlock caseList={[
    {caseString:"Visual Studio Codeでデバッグ設定をしてエラーを確認したいとき", check:true,},
    {caseString:"コアダンプで発生箇所など具体的なエラー内容がわからないとき", check:true,},
]} />
<P>{"C++では不正なメモリにアクセスしたとき、コンピュータが取り扱えない処理はコアダンプとしてプログラム途中で強制終了されます。"}</P>
<P>{"コアダンプはプログラマのコードミスで発生するため、プログラムを追跡しデバッグができるようにしました。"}</P>


<H2>{"VSCodeでデバッグする"}</H2>
<H3>{"デバッグからC++の処理を追跡し、どんな処理がされたか確認する"}</H3>
<P>{"コードが増大になるにつれて、変数の変化やプログラムの処理条件、エラー箇所など確認することが多くなります。"}</P>
<P>{"C++の開発環境ごとにデバッグ方法は異なりますが、私は基本的にどの言語でもVSCodeを使っているため、VSCodeによるデバッグ方法を説明します。"}</P>
<Ol>
<Li num={"1"} title={"gdbをインストールする"}>
<P>{"gdbとはgcc・g++コンパイラ用のデバッグコマンドです。linux環境では標準としてインストールされているため、コマンドがインストールされているかwhichコマンドで確認します。"}</P>
<CodeView language="bash" filename="which gdb">{
`$ which gdb`
}</CodeView>
<P>{"もしgdbがインストールされていなければ下記のコマンドからインストールします。"}</P>
<CodeView language="bash" filename="install gdb">{
`$ sudo apt install gdb`
}</CodeView>
</Li>
<Li num={"2"} title="Visual Studio Codeでデバッグ準備">
<P>{"Visual Studio Codeのlaunch.jsonにデバッグを設定します。"}</P>
<P>{"はじめに、Ctrl + Shift + Pキーからコマンドパレットを開き、C/C++デバッグ構成の追加をクリックします。"}</P>
<ImageBlock imgSrc={"/blog/posts/cpp-debug1_q3jm7j"} />
<P>{"続いて、(gdb)起動をクリックします。すると.vscodeディレクトリとlaunch.jsonが作成されます。"}</P> 
<ImageBlock imgSrc={"/blog/posts/cpp-debug2_yvwp6a"} />
<ImageBlock imgSrc={"/blog/posts/cpp-debug3_l0rxm8"} />
</Li>
<Li num={"3"} title="ソースファイルを -gオプション でデバッグ用にコンパイル">
<P>{"作成したソースファイルを-gオプション を追加してデバッグ情報を追加してコンパイルします。デバッグを試すサンプルコードは以下です。"}</P>
<CodeView language="cpp" filename="debug">{
`#include <iostream>

void numberCheck(int num1, int num2) {
    if (num1 == num2) {
        std::cout << "num1とnum2は同じ数字です。" << std::endl;
    } else if (num1 > num2) {
        std::cout << "num1はnum2より大きい数字です。" << std::endl;
    } else if (num1 < num2) {
        std::cout << "num1はnum2より小さい数字です。"<< std::endl;
    }
}

int main(void) {
    int num1 = 1;
    int num2 = 3;

    std::cout << "数字を比較します" << std::endl;
    numberCheck(num1, num2);
}`
}</CodeView> 
<P>{"-gオプション でデバッグ情報を追加し、-oオプションで実行ファイルにコンパイルします。"}</P>
<CodeView language="bash" filename="compile">{
`g++ -g sample.cpp -o sample.out`
}</CodeView> 
</Li>
<Li num={"4"} title="デバッグする実行ファイルを設定する">
<P>{"コンパイルによって作成された sample.out 実行ファイルをデバッグします。"}</P>
<P>{"作成した launch.json にデバッグしたい実行ファイルを紐付けます。変更するコードは'program'キーに実行ファイルのパスを設定するだけです。"}</P>
<P>{"${workspaceFolder}は作業ディレクトリまでのディレクトリパスです。作業ディレクトリの下に実行ファイルを入力します。"}</P>
<CodeView language="json" filename="setting">{
"'program': '${workspaceFolder}/sample.out',"
}</CodeView> 
</Li>
</Ol>


<H2>{"VSCodeでデバッグ実行"}</H2>
<H3>{"デバッグ作業の流れ"}</H3>
<Ol>
<Li num={"1"} title={"ブレイクポイントを設定する"}>
<P>{"プログラムを確認するブレイクポイントを設定します。"}</P>
<P>{"Visual Studio Codeではライン番号の横をクリックすると赤い点としてブレイクポイントが表示されます。"}</P>
<ImageBlock imgSrc={"/blog/posts/cpp-debug4_lxunmo"} />
</Li>
<Li num={"2"} title="デバッグを実行">
<P>{"実行とデバッグボタンをクリックし、(gdb)起動のボタンをクリックするとデバッグが開始します。またはF5をクリックします。"}</P>
<ImageBlock imgSrc={"/blog/posts/cpp-debug5_zsv9yr"} />
<Table columnName={["番号", "意味"]}
       values={[
        ["1", "デバッグスタート"],
        ["2", "ロールイン"],
        ["3", "ステップイン"],
        ["4", "ステップアウト"],
        ["5", "デバッグ再スタート"],
        ["6", "デバッグ中止）"],
        ]}/>
</Li>
<Li num={"3"} title="デバッグで変数を確認">
<P>{"プログラムが進みにつれ変数の中身も変わっていきます。ブレイクポイント時点の変数の中身は左上の変数から確認できます。"}</P>
<P>{"今回はnum1とnum2の変数に1と3が格納されます。"}</P>
<ImageBlock imgSrc={"/blog/posts/cpp-debug6_jtjcs6"} />
</Li>
</Ol>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"Visual Studio Codeでデバッグ設定をしてC++のデバッグができます", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
