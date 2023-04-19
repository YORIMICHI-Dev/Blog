// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"
import img1 from "public/images/posts/aws-storage/aws-storage.png"

const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"AWSでEC2インスタンスのEBS容量を変更する"}</H2>
<CaseBlock caseList={[
    {caseString:"AWSでEC2インスタンスのストレージサイズを変更したいとき", check:true,},
    {caseString:"EC2インスタンスの容量が足りないとき", check:true,},
]} />
<P>{"AWSでEC2インスタンスのストレージサイズを変更する方法をまとめました。"}</P>
<P>{"以前開発中に容量不足が発生したため一連の作業を実行しました。"}</P>
<Alert >ストレージサイズを変更すると料金コストが変わるため、あらかじめコストを見積もってください。</Alert>

<H2>{"ストレージサイズを変更"}</H2>
<H3>{"ストレージサイズを確認する"}</H3>
<P>{"ストレージサイズが不足していると外部ファイルをダウンロードしたり、新機能で新しいモジュールを追加するとき次のエラーが発生します。"}</P>
<CodeView language="bash" filename="error">{
`aws Could not install packages due to an OSError: [Errno 28] No space left on device`
}</CodeView>
<P>{"容量を削減するため不要なファイルを削除することができない場合は、容量を増やす必要があります。"}</P>
<P>{"はじめにEC2インスタンスに接続し現在のストレージサイズを調べる。"}</P>
<CodeView language="bash" filename="sudo lsbkl">{
`sudo lsbkl

// 表示結果例
NAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
nvme1n1       259:0    0  30G  0 disk /data
nvme0n1       259:1    0  16G  0 disk
└─nvme0n1p1   259:2    0   8G  0 part /
└─nvme0n1p128 259:3    0   1M  0 part`
}</CodeView>
<P>{"ここから、追加予定のファイルサイズを確認しどのくらい容量を追加する必要があるか見積もる。"}</P>

<H3>{"ストレージサイズを変更する"}</H3>
<P>{"ストレージサイズを変更する場合はEC2インスタンスのEBSサイズを変更し、パーティションの割当とファイルシステム更新を実行する。"}</P>
<Ol>
<Li num={"1"} title={"EC2インスタンスのEBSサイズ変更"}>
<P>{"AWSにログインし対象のEC2インスタンスのEBSボリュームを選択する。"}</P>
<P>{"続いて、ボリューム画面のアクションから変更ボタンを押す。するとボリュームの変更画面に飛ぶため、そこからサイズを変更する。"}</P>
<ImageBlock imgSrc={img1} />
</Li>
<Li num={"2"} title="パーティションの割当">
<P>{"続いて、EC2インスタンスに接続しパーティションサイズを変更する。"}</P>
<P>{"例としてnvme0n1ディスクのパーティションNo. 1のサイズを変更する。"}</P>
<CodeView language="bash" filename="partition">{
`sudo growpart /dev/nvme0n1 1`
}</CodeView>
<P>{"サイズ変更を確認する。"}</P>
<CodeView language="bash" filename="confirm">{
`sudo lsblk
NAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
nvme1n1       259:0    0  30G  0 disk /data
nvme0n1       259:1    0  16G  0 disk
└─nvme0n1p1   259:2    0  16G  0 part /
└─nvme0n1p128 259:3    0   1M  0 part`
}</CodeView>
</Li>
<Li num={"3"} title="ファイルシステムにサイズ変更を反映する">
<P>{"ファイルシステムにパーティションサイズ変更を反映する。ファイルシステムのサイズはdfコマンドから確認する。"}</P>
<P>{"例としてnvme0n1ディスクのパーティションNo. 1のサイズを変更する。"}</P>
<CodeView language="bash" filename="file system">{
`df -hT
Filesystem      Type  Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  xfs   8.0G  1.6G  6.5G  20% /`
}</CodeView>
<P>{"続いてxfs_growfsコマンドからファイルシステムを拡張する。拡張するファイルシステムのマウント先（今回は'/'）を指定する。"}</P>
<CodeView language="bash" filename="file system expansion">{
`sudo xfs_growfs -d /`}</CodeView>
<P>{"ファイルシステムが拡張されたか確認する。"}</P>
<CodeView language="bash" filename="file system">{
`df -hT
Filesystem      Type  Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  xfs   16.0G  1.6G  6.5G  20% /`
}</CodeView>
</Li>
</Ol>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"WSでEC2インスタンスのストレージサイズを変更したいができます", check:true,},
]} />
<ReferenceBlock href={"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"}/>

{/* Finish */}
</>
    );
}

export default cpp_debug
