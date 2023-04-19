// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"

const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"pngファイルをコマンド操作で簡単に圧縮する"}</H2>
<CaseBlock caseList={[
    {caseString:"オフラインでファイルサイズが大きいpngファイルを簡単に小さく圧縮したいとき", check:true,},
]} />
<P>{"共有ファイルのpngファイルサイズが大きく送信するのにサイズ制限がかかる場合に、ささっと圧縮するコマンド。"}</P>


<H2>{"pngファイルを簡単に圧縮するコマンドpngquant"}</H2>
<H3>{"コマンドだけでpngファイルをコンパクトに"}</H3>
<P>{"pngファイルを圧縮する方法は様々あるが、コマンドだけですばやく圧縮するpngquantをインストールする。"}</P>
<P>{"先にインストールだけすれば、コマンドを実行するだけで簡単にpngファイルを圧縮することができる。"}</P>
<P>{"開発者のサイトとGithubのページは次です。"}</P>
<ReferenceBlock href={"https://github.com/kornelski/pngquant"} />


<H2>{"pngquantを使う"}</H2>
<H3>{"インストール方法とコマンド操作"}</H3>
<Ol>
<Li num={"1"} title={"インストール"}>
<P>{"Ubuntuでインストールする。またwhichコマンドにてインストールの確認する。"}</P>
<CodeView language="bash" filename="pngquant install">{
`sudo apt install pngquant
which pngquant`}</CodeView>
<P>{"または、dpgをダウンロードした場合は、ダウンロードしたディレクトリにてパッケージをインストールする。"}</P>
<CodeView language="bash" filename="pngquant install">{
`sudo apt install pngquant_2.13.1-1_amd64.deb`}</CodeView>
</Li>
<Li num={"2"} title="png画像を圧縮する">
<P>{"png画像があるディレクトリにて、pngquantを実行するだけで圧縮が始まる。ファイル指定はファイル名をそのまま入力する。"}</P>
<CodeView language="bash" filename="login">{
`$ pngquant *.png 
# 複数も可能です
$ pngquant *.png *.png`}</CodeView>
<P>{"圧縮後のファイル*-or8.pngまたは*-fs8.pngファイルが同じディレクトリに作成される。"}</P>
</Li>
</Ol>

<H3>{"圧縮したpngファイルサイズの比較"}</H3>
<P>{"pngquantにて圧縮した画像を並べてみました。約64%ファイルサイズが圧縮されても見た目はほとんどかわりません。"}</P>
{/* 画像 */}

<H3>{"オプション一覧"}</H3>
<Table columnName={["オプション", "結果"]}
       values={[
        ["-o (--output)", "ファイルの出力先と名前を指定 (default: カレントディレクリ)"],
        ["--ext", "ファイルの接尾辞を指定 (default: -or8.png or -fs8.png)"],
        ["--quality=min-max", "数字が小さいほど画像の色数を減らしファイルサイズを小さくする (0(worst)-100(perfect))。"],
        ["-f (--force)", "ファイルを上書き保存"],
        ["--nots", "Floyd-Steinberg ditheringアルゴリズムを使用"],
        ]}/>
<CodeView language="bash" filename="output">{
`# 親ディレクトリにsample.png作成
pngquant *.png --output ../sample.png`}</CodeView>
<CodeView language="bash" filename="ext">{
`# 接尾辞に1.pngを追加
pngquant *.png --ext 1`}</CodeView>
<CodeView language="bash" filename="quality">{
`# 画像のクオリティを下げる
pngquant *.png --quality=30-40`}</CodeView>
<CodeView language="bash" filename="pngquant force">{
`# 同名の画像を上書きします
pngquant *.png --force`}</CodeView>
<CodeView language="bash" filename="pngquant install">{
`# Floyd-Steinberg ditheringアルゴリズムを使用しない
pngquant *.png --nofs`}</CodeView>
{/* 画像 */}


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"pngquantコマンドでファイルサイズが大きいpngファイルを簡単に小さく圧縮できる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
