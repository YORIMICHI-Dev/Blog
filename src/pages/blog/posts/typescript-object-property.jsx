// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"useStateフックで設定したオブジェクトのプロパティを一部だけ変更する"}</H2>
<CaseBlock caseList={[
    {caseString:"オブジェクトの一部をrestパラメータを使用して変更したいとき", check:true,},
    {caseString:"オブジェクトのState情報の一部を変更したいとき", check:true,},
]} />
<P>{"ReactのuseStateフックでオブジェクトのプロパティを一部変更する処理があったときに調べたメモ。"}</P>

<H2>{"restパラメータについて"}</H2>
<H3>{"restパラメータを使用して一部変更する"}</H3>
<P>{"オブジェクトのパラメータで特定のプロパティを変更する場合はrestパラメータを使用して一部変更する。例として下記のcarrierオブジェクトのパラメータを変更する。"}</P>
<CodeView language="typescript" filename="rest">{
`interface Carrier{
    python: string
    cpp: string
    typescript: string
}

const carrier: Carrier = {
    python: "1year",
    cpp: "1year",
    typescript: "half month"
}

const mergeProfile: Carrier = {
    ...carrier,
    python: "2years",
}
console.log(mergeProfile) 

// 出力結果
{
  python: '2years',
  cpp: '1year',
  typescript: 'half month'
}`
}</CodeView>

<H3>{"useStateのオブジェく情報をrestパラメータを使用して一部変更する"}</H3>
<P>{"useStateを使用して先程のCarrierのStateを一部変更する。"}</P>
<P>{"先程のオブジェクトを一部変更する処理をobjectChange関数として以下のようにまとめる。"}</P>
<CodeView language="typescript" filename="rest">{
`interface Carrier{
    python: string
    cpp: string
    typescript: string
}


const objectChange = (changeObject: Carrier, changePropertyName: keyof Carrier, changeProperty: string) => {
    let updatedObject = {...changeObject};
    updatedObject[changePropertyName] = changeProperty;
    return updatedObject;
}`}</CodeView>
<P>{"ReactコンポーネントのTSXにてStateの一部を変更するコンポーネントを作成する。"}</P>
<CodeView language="typescript" filename="rest">{
`import { useState } from "react"

interface Carrier{
    python: string
    cpp: string
    typescript: string
}


const initCarrier: Carrier = {
    python: "1year",
    cpp: "1year",
    typescript: "half month"
}


const Component = () => {
  // useStateの準備
  const [ carrier, setCarrier ] = useState(initCarrier)

  const clickObjectChange = (changeObject: Carrier, changePropertyName: keyof Carrier, changeProperty: string) => {
    let updatedObject = {...changeObject};
    updatedObject[changePropertyName] = changeProperty;
    return updatedObject;
  }

  // ボタンクリック時にプロパティを変更する
  const handleClick = () => {
    // Update the python property on click
    const updatedCarrier = clickObjectChange(carrier, 'python', '2 years');
    setCarrier(updatedCarrier);
  }

  return (
    <div>
      <div>Python: {carrier.python}</div>
      <div>CPP: {carrier.cpp}</div>
      <div>TypeScript: {carrier.typescript}</div>
      <div>
        <button onClick={handleChange}>Change Carrier</button>            
      </div>
    </div>
  )
}
`}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"オブジェクトの一部をrestパラメータを使用して変更することができる", check:true,},
    {caseString:"ReactのクリックイベントなどでオブジェクトのState情報の一部を変更することができる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
