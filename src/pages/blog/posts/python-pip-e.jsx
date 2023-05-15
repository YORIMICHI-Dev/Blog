// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"pip install -e .ってなに"}</H2>
<CaseBlock caseList={[
    {caseString:"pip install -e .の意味と使い方が知りたいとき", check:true,},
]} />
<P>{"異常検知のライブラリanomalibをインストールして実行したときに、ディレクトリ関連でパッケージがimportできなかったときに見つけたため調査。"}</P>


<H2>{"pip install -e .について調査"}</H2>
<H3>{"pip install -e .で開発モードでインストールする"}</H3>
<P>{"pip install -e .はPythonのパッケージを開発しているときに、そのパッケージ（現在のディレクトリ）を開発モードでインストールするためのもの。"}</P>
<P>{"通常のpip installでパッケージをインストールする場合は、パッケージのソースコードは特定の場所（libライブラリ）に読み込まれる。そのため、ソースコードに変更があった場合はモジュールをライブラリに入れ直すため再度インストールする必要がある。"}</P>
<P>{"一方、開発モードでインストールすることの利点として、パッケージのソースコードに変更があった場合においても再インストールする必要がなくなる。"}</P>
<P>{"現在、パッケージを作成する業務はないため使うことはほとんどないが、pipについて少し知識が増えた。"}</P>

<H3>{"pip install -e .で現在のディレクトリに$PYTHONPATHを通す"}</H3>
<P>{"pip install -e .は現在ディレクトリのパッケージをインストールするときに、ディレクトリパス情報を取得できる。"}</P>
<P>{"そのため、擬似的にexport 'PYTONPATH=現在ディレクトリまでのパス'を実行しているように錯覚する。"}</P>
<P>{"今回の問題は単純にPYTHONPATHの設定をしなかったため親ディレクトリから伸びるパッケージのパスがimportできなかった。"}</P>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"pip install -e .で、開発モードでパッケージをインストールすることができる。パッケージ内容が変更しても再インストールする必要はない。", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
