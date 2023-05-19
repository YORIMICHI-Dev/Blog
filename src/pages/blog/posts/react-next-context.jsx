// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, ImageBlock, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"useContext, useReducerの使い方メモ"}</H2>
<CaseBlock caseList={[
    {caseString:"コンポーネント間で共通のState値を利用や更新したいとき", check:true,},
]} />
<P>{"今までuseStateを使ってコンポーネントの状態変化を管理してきたが、コンポーネント間で共通のState値を使いたいときにpropsのバケツリレーが煩わしくなってきため、useeContextとuseReducerの使い方をメモした。"}</P>


<H2>{"コンポーネント間で共通Contextの設定"}</H2>
<H3>{"共通したい'Context'の初期化"}</H3>
<P>{"Contextはコンポーネント間で共有できるState値や、State値を更新するdispatchを含めた機能で、はじめにContextの初期化を行う。"}</P>

<Ol>
<Li num={"1"} title={"Contextの準備"}>
<P>{"ReactまたはNext.jsで作成した作業ディレクトリ内にlibディレクトリを作成しその中にcontext.tsを作成する。"}</P>
<CodeView language={"bash"} >{
`// ディレクトリ例
（作業ディレクトリ）
　　　　　|---src
　　　　　     |---lib    
　　　　　　　　    |---context.ts
         `
}</CodeView>
<P>{"context.js内にcreateContextとDispatchをimportする"}</P>
<P>{"createContextはContextを初期化する関数で、DispatchはContextのState値を更新する関数の設定を定義するtype"}</P>
<CodeView language={"typescript"} filename="context">{
`import { createContext, Dispatch } from 'react'`
}</CodeView>

</Li>
<Li num={"2"} title={"グローバルなStateとdispatchの設定"}>
<P>{"続いてStateを設定する。はじめにStateのtypeを設定する。Stateは複数定義することができる。"}</P>
<CodeView language={"typescript"} filename="context">{
`export type State = {
    currentNum: number
    isOpen: bool
}`
}</CodeView>
<P>{"また、State値を更新する関数をdispatchのtypeを定義する。"}</P>
<CodeView language={"typescript"} filename="context">{
`export type Action = { type: 'PLUS_NUM'; plus: number } |
                      { type: 'SET_IS_OPEN'; flag: boolean}
}`
}</CodeView>
<P>{"1つ目のtypeはdispatchに当てはめたい処理の名前である。また、plusはdispatchに渡す引数である。"}</P>
<P>{"dispatchのtypeであるActionは使用したい処理が複数あれば、or演算子でつなげる。"}</P>
</Li>
<Li num={"3"} title={"Contextの初期化"}>
<P>{"さきほど定義した、Stateとdispatchのを持つContextを初期化する。"}</P>
<CodeView language={"typescript"} filename="context">{
`export const Context = createContext<{
    state: State
    dispatch: Dispatch<Action>
}>({
    state: { currentNum: 0, isOpen: false },
    dispatch: () => {},
})`
}</CodeView>
</Li>
<P>{"以上までがContextの初期化である。"}</P>
<CodeView language={"typescript"} filename="context">{
`import { createContext, Dispatch } from 'react'

export type State = {
    currentNum: number
    isOpen: bool
}

export type Action = { type: 'PLUS_NUM'; plus: number } |
                     { type: 'SET_IS_OPEN'; flag: boolean}
}

export const Context = createContext<{
    state: State
    dispatch: Dispatch<Action>
}>({
    state: { currentNum: 0, isOpen: false },
    dispatch: () => {},
})
`
}</CodeView>
</Ol>

<H3>{"dispatchの処理を定義"}</H3>
<P>{"dispatchによる処理を定義する。各処理はReducerと呼ばれ、実行したい処理をdispatchのtypeごとに定義する。"}</P>

<Ol>
<Li num={"1"} title={"Reducerの準備"}>
<P>{"libディレクトリの中にreducer.tsを作成する。"}</P>
<CodeView language={"bash"} >{
`// ディレクトリ例
（作業ディレクトリ）
　　　　　|---src
　　　　　     |---lib    
　　　　　　　　    |---context.ts
　　　　　　　　    |---reducer.ts
         `
}</CodeView>
<P>{"context.tsで作成したStateとActionをimportしておく。"}</P>
<CodeView language={"typescript"} filename="reducer">{
`import { State, Action } from './context'`
}</CodeView>

</Li>
<Li num={"2"} title={"Reducer"}>
<P>{"Reducerを定義していく。今回はswitch文で指定されたtypeごとの処理と戻り値を用意する。"}</P>
<CodeView language={"typescript"} filename="reducer">{
`export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'PLUS_NUM':
            return {
                ...state,
                isModalOpen: state.currentNum + action.plus,
            }

        case 'SET_IS_OPEN':
            return {
                ...state,
                isOpen: action.flag,
            }
    }
}`
}</CodeView>
<P>{"戻り値は必ずStateと同じ内容を戻す。そのため、変更した変数のみ明示し、その他は前回値と同じものを使用する。"}</P>
</Li>
</Ol>
<P>{"以上までがReducerの設定である。"}</P>
<CodeView language={"typescript"} filename="reducer">{
`import { State, Action } from './context'

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'PLUS_NUM':
            return {
                ...state,
                isModalOpen: state.currentNum + action.plus,
            }

        case 'SET_IS_OPEN':
            return {
                ...state,
                isOpen: action.flag,
            }
    }
}`
}</CodeView>

<H3>{"Contextの読み込み"}</H3>
<P>{"定義したContextをコンポーネント間で読み込ませる。"}</P>
<P>{"Next.jsの場合はpagesディレクトリ内の_app.tsxから読み込ませることにより、全コンポーネントで共有することができる。さきにサンプルコードは以下になる。"}</P>
<CodeView language={"typescript"} filename="context">{
`import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useReducer } from 'react'
import { Context, State } from '@/lib/store/context'
import { reducer } from '@/lib/store/reducer'

export default function App({ Component, pageProps }: AppProps) {
    const contextState: State = { currentNum: 0, isOpen: false }
    const [state, dispatch] = useReducer(reducer, contextState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Component {...pageProps} />
        </Context.Provider>
    )
}
`
}</CodeView>
<P>{"必要なモジュールはreactモジュールのuseReducerと、libディレクトリ内のContext, Stateとreducerである。"}</P>
<P>{"使用するContextの初期値と定義したreducerをReactフックのuseReducerに設定する。続いて作成したContext.ProviderでComponentを囲む。"}</P>
<P>{"valuesにはstateとdispatchをpropsとして渡す。"}</P>

<H2>{"Contextの使い方"}</H2>
<H3>{"ContextからState値やdispatchを呼び出す"}</H3>
<P>{"ReactフックのuseContextから現在のContextを呼び出す。呼び出す場合はProviderで渡した変数名であるstateとdispatchとする。"}</P>
<P>{"例として、初期値0からPlusボタンから現在の値を1ずつ足していくコンポーネントを以下に記載する。"}</P>
<CodeView language={"typescript"} filename="sample">{
`import { Context } from '@/lib/store/context'
import { useContext } from 'react'

export function Component {
    { state, dispatch } = useContext(Context)

    return (
        <>
            <div>
                <span>Current: {state.currentNum}</span>
                <button onClick={() => dispatch({type: "PLUS_NUM", plus: 1})}>Plus</button>
            </div>
        </>
    )
}`
}</CodeView>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"コンポーネント間で共通のState値を利用や更新することができる。", check:true,},
    {caseString:"コンポーネント間のpropsによるバケツリレーを防ぐことができる。", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
