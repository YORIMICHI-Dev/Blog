// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"rest(...)パラメータを含んだオブジェクトの型を設定する"}</H2>
<CaseBlock caseList={[
    {caseString:"rest(...)パラメータを含んだオブジェクトの型を設定したいとき", check:true,},
]} />
<P>{"配列やオブジェクトの中身を取り出す際に...rest内のパラメータを含んだオブジェクトの型を設定したいとき調べた内容のまとめ。"}</P>

<H2>{"restパラメータについて"}</H2>
<H3>{"関数の引数にrestパラメータを使用する"}</H3>
<P>{"TypeScriptで配列やオブジェクトの中身を取り出す際に...rest使用する。"}</P>
<P>{"はじめに関数の引数が...restの場合、実引数が複数ある場合はすべて配列として関数に渡される。pythonの巻数の引数が*argsと同じ作法になる。"}</P>
<CodeView language="typescript" filename="rest">{
`// restパラメータを含んだ関数
const restSample = (...rest) => {
    return rest.map((number) => { return number * 2 })
}

let sample = restSample(1, 2, 3, 4, 5)

console.log(sample)
// [ 2, 4, 6, 8, 10 ]`
}</CodeView>

<H3>{"配列・オブジェクトの中身をrestで取り出す"}</H3>
<P>{"配列・オブジェクトの前に...をつけると、再帰的に中身が取り出される。"}</P>
<P>{"特にオブジェクト内で実行すると、中身が展開される。"}</P>
<CodeView language="typescript" filename="rest">{
`const restSample = () => {
    const profile = {
        name: "yorimichi",
        age: 22,
        height: 162
    }

    const carrier = {
        python: "1year",
        cpp: "1year",
        typescript: "half month"
    }
    
    return  {
        ...profile,
        ...carrier,
    }
}

const profiles = restSample()
console.log(profiles)

// {
  name: 'yorimichi',
  age: 22,
  height: 162,
  python: '1year',
  cpp: '1year',
  typescript: 'half month'
}`
}</CodeView>


<H2>{"restパラメータを展開したオブジェクト内の型について"}</H2>
<H3>{"TypeScriptでrestパラメータは[key: '型']で型付けしてみる"}</H3>
<P>{"オブジェクト内でrestパラメータで展開した場合に型をつける。TypeScriptを使ってオブジェクトに型をつけるときは[key: '型']を使用して書く。これにより複数のkeyに対してまとめて処理できる。"}</P>
<P>{"先程のcarrierオブジェクトにKeyの型をつける。"}</P>
<CodeView language="typescript" filename="typing">{
`// [key:string]: -> keyとvalueの型
interface Key{
    [key: string]: string
}

const restSample = (): Key => {
    const carrier = {
        python: "1year",
        cpp: "1year",
        typescript: "half month"
    }
    
    return  {
        ...carrier,
    }
}

const carrier = restSample()
console.log(carrier)
// { python: '1year', cpp: '1year', typescript: 'half month' }`
}</CodeView>

<P>{"今後オブジェクトのプロパティが増えても型をstringならば変更する必要はない。また、一部のkeyだけ明確に型を定義しても問題ない。"}</P>
<CodeView language="typescript" filename="typing">{
`// 一部のkeyを設定する
interface CarrierTypeKey{
    python: string
    [key: string]: string
}`
}</CodeView>
<H3>{"valueの型が複数考えれる場合はUnionで型を付ける"}</H3>
<P>{"先程のprofileオブジェクトのようにvalueがstringだったりnumberなど複数ある場合はUnionを使用する。"}</P>
<CodeView language="typescript" filename="typing">{
`// valueはstringとnumberのどちらかです
interface CarrierTypeKey{
    [key: string]: string | number
}

const restSample = (): CarrierTypeKey => {
    const profile = {
        name: "yorimichi",
        age: 22,
        height: 162
    }
    
    return  {
        ...profile,
    }
}

const profile = restSample()
console.log(profile)
// { name: 'yorimichi', age: 22, height: 162 }`
}</CodeView>
<Alert >{"Unionで複数の方を定義するとあまり型を定義している意味がなくなる気がする。また、設計段階で型は決めるべきであるため、key: '型'で型定義するのはあまり良くない方法だと思う。"}</Alert>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"オブジェクト内で...restパラメータで展開した場合、オブジェクト内の型がすべて同じ場合は[key: '型']を使用する。valueが複数の場合はUnionで複数の型を定義する。", check:true,},
    {caseString:"restの中身は設計段階で決める必要はあるため[key: '型']はあまりTypeScriptを使用するメリットは薄そう。", check:false,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
