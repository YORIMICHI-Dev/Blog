// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"dockerコマンドでユーザーをグループに追加する"}</H2>
<CaseBlock caseList={[
    {caseString:"dockerコマンドをユーザーで実行したいとき", check:true,},
    {caseString:"dockerコマンドに限らずsudoをつけずにローカルユーザーでコマンドを実行する手順を確認したいとき", check:true,},
]} />
<P>{"dockerインストール時にroot権限でしか実行できず、ユーザー側からコマンドを実行する手順を確認したためまとめた。"}</P>


<H2>{"dockerコマンドをユーザー側に反映させる"}</H2>
<H3>{"dockerグループの確認"}</H3>
<P>{"dockerをインストールした際にdockerグループが作成されている。はじめにdockerグループのグループに入っているユーザーリストを確認する。"}</P>
<CodeView language={"bash"} filename={"group"}>{
`getent group | grep docker

## 結果例
docker:x:1001:any_user`
}</CodeView>
<P>{"一番最後がユーザーリストであり、ユーザーリストにいるユーザーはdockerコマンドを使用できる。"}</P>

<H3>{"dockerグループにユーザーを追加"}</H3>
<P>{"dockerグループにユーザーを追加する。"}</P>
<CodeView language={"bash"} filename={"usermod"}>{
`sudo usermod -aG docker user_name`
}</CodeView>
<P>{"-aGオプションで、プライマリのグループは変更せず、dockerグループにユーザーを追加する。"}</P>
<P>{"追加したあとはnewgrpまたはbashを再起動させdockerコマンドを実行できるか確認する。"}</P>
<CodeView language={"bash"} filename={"reload"}>{
`newgrp docker`
}</CodeView>
<CodeView language={"bash"} filename={"group"}>{
`getent group | grep docker

## 結果例
docker:x:1001:any_user, add_user`
}</CodeView>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"dockerコマンドをユーザーで実行したいすることができる", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
