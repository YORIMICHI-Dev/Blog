// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"f-stringとr-stringを一緒に使ったときのメモ"}</H2>
<CaseBlock caseList={[
    {caseString:"f-stringとr-stringを同時に使えるか気になったとき", check:true,},
    {caseString:"同時に使える場面と使えない場面が気になったとき", check:true,},
]} />
<P>{"f-stringとr-stringを同時に使用する場面があったため、同時に使えるときと使えないときについて調査しました。"}</P>


<H2>{"基本的にf-stringとr-stringは同時に使える"}</H2>
<H3>{"f-stringとr-stringのおさらい"}</H3>
<P>{"f-stringは文字列のフォーマット方法の一つで、文字列内に変数や式を直接埋め込むことができる。str型で使用するダブルクオーテーション\"\"やシングルクオーテーション''の前にfを置く。"}</P>
<CodeView language="python" filename="f-string">{
`name = "yorimichi"
age = 22

# f-stringを使った文字列フォーマット
formatted_string = f"My name is {name} and I am {age} years old."
print(formatted_string)
# 出力: My name is yorimichi and I am 22 years old.`
}</CodeView>
<P>{"一方、r-stringはエスケープシーケンスを無視して文字列をそのまま扱うことができる。str型で使用するダブルクオーテーション\"\"やシングルクオーテーション''の前にrを置く。"}</P>
<P>{"特にファイルパスや正規表現を取り扱うとき、メタ文字(\\dや\\s)の前にエスケープシーケンスを多用する場合に、エスケープシーケンスの数を減らし見やすくするため使用する。"}</P>
<CodeView language="python" filename="r-string">{
`# r-stringを使ったエスケープシーケンスの無視
# ファイルパス名
raw_string = r"C:\\Users\\Kouhai-san\\Documents"
print(raw_string)  # 出力: C:\Users\Kouhai-san\Documents

# 正規表現 \\d => [0-9], \\s => [\\t,\\n,\\f,\\r]、\\w => [_s-zA-Z0-9]のどれか文字
import re
pattern = r"\d+\s\w+"
regex = re.compile(pattern)
print(regex.match("100 words")) 
# <re.Match object; span=(0, 9), match='100 words'>t`
}</CodeView>


<H3>{"f-stringとr-stringを同時に使用する方法"}</H3>
<P>{"f-stringとr-stringは同時に扱う場合は単純にシングルクオーテーション''の前にfとrを置くだけ。"}</P>
<P>{"例えば、ファイルの拡張子が変数の場合、f-stringを使用することで直接文字列内に埋め込むことができ、r-stringを使ってエスケープシーケンスを使わずファイルパスを文字列にすることが可能。"}</P>
<P>{"また、正規表現に関しても変数を入れながらバックスラッシュをそのまま扱える。"}</P>
<CodeView language="python" filename="f-string and r-string">{
`# f-stringとr-stringを組み合わせて使用
# ファイルの種類とファイルパス名
file_suffix = ".txt"
file_path = fr"C:\\Users\\Kouhai-san\\Documents\\file{file_suffix}"
print(file_path)  # 出力: C:\\Users\\Kouhai-san\\Documents\\file.txt

# 正規表現
import re
number_pattern = r"\\d"
space_pattern = r"\\s"
pattern = fr"{number_pattern}+{space_pattern}\\w+"
regex = re.compile(pattern)
print(regex.match("100 words")) 
# <re.Match object; span=(0, 9), match='100 words'>`
}</CodeView>


<H3>{"'{}'内に文字列を入れたい場合は一緒に使用できない"}</H3>
<P>{"f-stringとr-stringはまとめて記述することができる。しかし、文字列内にかぎかっこ'{}'を使用する場合だけ少し工夫する。"}</P>
<P>{"f-stringを記述すると'{}'は変数の埋め込みに使用することが期待されてしまいます。そのため、\"{}\"内に必ず変数や式を埋め込む必要がある。"}</P>
<P>{"r-stringと一緒に記述しても文字列ではなく、変数などの埋め込みがないとエラーとなり、正規表現の文字数制限などで'{}'を使用する場合はf-stringを避けてr-stringのみで記述する必要がある。"}</P>
<P>{"下記は正規表現として'{}'を使用するときだけr-stringのみ使用し、文字列を連結する例。"}</P>
<CodeView language="python" filename="exception">{
`# f-stringとr-stringの正規表現
import re
number_pattern = r"\\d"
space_pattern = r"\\s"

wrong_pattern = fr"{number_pattern}{1,4}\\w+{space_pattern}\\w+"
print(wrong_pattern) # \\d(1, 4)\\w+\\s\\w+   {1,4}がタプルになっている

# 正規表現で{}を使用する場合、f-stringとは分けて記述する
correct_pattern = f"{number_pattern}" + r"{1,4}\\w+" + fr"{space_pattern}\\w+"
print(correct_pattern) #  \\d{1,4}\\w+\\s\\w+

regex = re.compile(correct_pattern)
print(regex.match("22years old")) # <re.Match object; span=(0, 11), match='22years old'>'>`
}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"f-stringとr-stringを同時に使え、ダブルクオテーション\"\"の前にrfを付け加えるだけ", check:true,},
    {caseString:"f-stringの仕様上かぎかっこ{}を使う場合は同時に使えない", check:false,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
