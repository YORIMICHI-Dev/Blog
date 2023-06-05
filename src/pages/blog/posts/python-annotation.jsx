// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"labelImgで画像にアノテーションをつける"}</H2>
<CaseBlock caseList={[
    {caseString:"物体検出に使用する画像にアノテーションをつけたいとき", check:true,},
]} />
<P>{"Yolo v5などでアノテーション画像を作成するときにlabelImgを使ったためメモ。"}</P>


<H2>{"labelImgのインストール"}</H2>
<H3>{"labelImgとは"}</H3>
<P>{"abelImgは画像に写っている特定の被写体をアノテーションデータを作成するアプリで、Yoloなどの物体検出モデルに必要となるアノテーション画像を簡単に作成することができる。"}</P>
<P>{"参考のgithubのレポジトリからダウンロードすることができる。"}</P>
<ReferenceBlock href={"https://github.com/heartexlabs/labelImg"} />

<H3>{"インストール方法"}</H3>
<P>{"Ubuntuの場合は、pipを使用してモジュールをインストールするか、レポジトリをクローンして環境を構築する。"}</P>
<P>{"最新版のバージョンを使用するため、今回はレポジトリをクローンする。"}</P>
<Alert>{"Python 3.10でインストールするとアプリケーションが即座にダウンする現象が起きたため、Python 3.8で動作させる。"}</Alert>
<Ol>
<Li num={"1"} title={"レポジトリをcloneする"}>
<CodeView language="bash" filename="git clone">{
`git clone https://github.com/heartexlabs/labelImg.git`
}</CodeView>
</Li>
<Li num={"2"} title="必要なモジュールのインストール">
<P>{"GUIアプリケーションにpyqt5を使用しているためインストールする。また、クローンしたレポジトリから必要なモジュールをrequirementファイルからインストールする。"}</P>
<CodeView language="bash" filename="install">{
`sudo apt-get install pyqt5-dev-tools
sudo pip3 install -r requirements/requirements-linux-python3.txt
make qt5py3`
}</CodeView>
</Li>
</Ol>



<H2>{"labelImgの起動と使い方"}</H2>
<H3>{"labelImgの起動方法"}</H3>
<P>{"インストールが終了したらlabelImgアプリをレポジトリ内のlabelImg.pyから起動する。"}</P>
<CodeView language="bash" filename="execute">{
`python3 ./labelImg/labelImg.py`
}</CodeView>
<ImageBlock imgSrc={"/blog/posts/python-anotation1_uaenym"} />

<H3>{"アノテーション作成"}</H3>
<P>{"今回アノテーションを行う画像と、クラスラベルは画像に表示されているegg, milk, cupcakeとする。"}</P>
<ImageBlock imgSrc={"/blog/posts/python-anotation2_roms8g"} width={400} />
<Ol>
<Li num={"1"} title={"アノテーションのラベルを定義"}>
<P>{"レポジトリのdata/predefined_classes.txtにクラスラベルを記載する。"}</P>
<CodeView language="txt" filename="label">{
`egg
milk
cupcake`
}</CodeView>
</Li>
<Li num={"2"} title="画像ファイルのディレクトリを開く">
<P>{"\"ディレクトリを開く\"から画像を格納したディレクトリを開く。"}</P>
<ImageBlock imgSrc={"/blog/posts/python-anotation3_dftohv"}  />
</Li>
<Li num={"3"} title="アノテーションを実行">
<P>{"\"矩形を作成する\"からクラスごとに矩形で囲む。\"右枠の指定されたラベル名を使う\"にチェックを入れ指定するか、囲んだあとに出てくる設定したラベル名を選択する。"}</P>
<ImageBlock imgSrc={"/blog/posts/python-anotation4_gm196g"}  />
</Li>
<Li num={"4"} title="アノテーションを保存する">
<P>{"アノテーション完了後に\"保存する\"からアノテーションを保存する。このときアノテーションファイル形式を\"保存する\"ボタンの下から選択する。Yoloの場合はそのまま\"YOLO\"ボタンにする。"}</P>
<P>{"保存後は画像ディレクトリに画像ごとのアノテーションファイルと定義されたクラスのラベル名が記載した\"classes.txt\"が保存される。"}</P>
</Li>
</Ol>



<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"Yolo v5などの物体検出に使用する画像にアノテーションをつけることができる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
