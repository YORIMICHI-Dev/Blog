// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"taskipyによるタスクランナーの設定"}</H2>
<CaseBlock caseList={[
    {caseString:"pythonでlintやformatなどタスクランナーコマンドを設定したいとき", check:true,},
    {caseString:"poetryのpyproject.tomlでタスクランナーを設定したいとき", check:true,},
]} />
<P>{"Next.jsのpackage.jsのタスクランナー(npm run devなど)がpythonにもあるか確認していたら見つけたためメモ。"}</P>


<H2>{"taskipy"}</H2>
<H3>{"taskipyのインストール"}</H3>
<P>{"taskipyはpython用のタスクランナーで、lintやformatなどのpythonコマンドを定義して自動化してくれる。"}</P>
<P>{"例えば、djangoやfastapiのスタート、lintやformatなどの整形コマンドを定義してタスクを実行することができる。"}</P>
<P>{"開発レポジトリは以下のURL。"}</P>
<ReferenceBlock href={"https://github.com/taskipy/taskipy"} />
<P>{"taskipyのタスクランナーはpyproject.tomlで設定できるため、今回はpoetryを使用することを考える。インストール方法は以下である。"}</P>
<Alert>{"あらかじめpoetryをインストールする必要があります。"}</Alert>
<CodeView language="bash" filename="install">{
`poetry add taskipy --dev`
}</CodeView>


<H3>{"taskipyの設定"}</H3>
<P>{"インストールしたらタスクランナーをpyproject.tomlに定義していく。"}</P>
<P>{"今回はlint、format、fastapiの起動タスクを定義するため、それぞれruff、black、fastapiをインストールする。"}</P>
<CodeView language="bash" filename="install">{
`# formater, linter
poetry add black ruff --dev
# fastapi
poetry add fastapi "uvicorn[starndard]"`
}</CodeView>
<P>{"続いて、pyproject.tomlにタスクランナーを追加して定義する。"}</P>
<P>{"poetryの環境に入っているblackなどを実行するため、poetry run からはじまるコマンドを設定していく。"}</P>
<CodeView language="pyproject" filename="setting">{
`[tool.taskipy.tasks]
start = { cmd = "poetry run main:app --reload", help = "runs fastapi app"}
lint = { cmd = "poetry run ruff check src", help = "check python module by ruff"}
check = { cmd = "poetry run ruff check --fix src", help = "check python module by ruff"}
format = { cmd = "poetry run black src", help = "format python module by black"}`
}</CodeView>
<P>{"taskipyのタスクランナーを定義するtool.taskipy.tasksを記載し、その下にコマンドを作成する。"}</P>
<P>{"上から、fastapiの起動、ruffによるsrcディレクトリ以下のlint、またlintした中でruffによる自動フォーマットを実行、blackによるフォーマット実行である。lintやformatもpyproject.tomlに定義していれば、その設定が反映される。"}</P>
<P>{"またcmdに実行するコマンド、helpにコマンドの説明を記載することができる。"}</P>

<H3>{"taskipyの実行"}</H3>
<P>{"定義したタスクを実行していく。"}</P>
<P>{"poetryの環境内にtaskipyをインストールしたためpoetry run taskの後に実行したいタスクランナーを指定する。"}</P>
<CodeView language="bash" filename="task">{
`# fastapi実行
poetry run task start
# lint, format実行
poetry run task lint
poetry run task format`
}</CodeView>
<P>{"タスクランナーを使用することにより、明示的にタスクを実行することが可能となる。また、コマンドをパイプラインで実行したいときも、タスクランナーを定義すれば短いコマンドで実行することができる。"}</P>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"pythonでlintやformatなどタスクランナーコマンドを設定することができる。", check:true,},
    {caseString:"poetry環境におけるpyproject.tomlファイル内で明示的にタスクを定義することができる。", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
