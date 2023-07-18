// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, ImageBlock, CodeView, CaseBlock, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"JSXタグにCSSモジュールを割り当てる"}</H2>
<CaseBlock caseList={[
    {caseString:"コンポーネントごとにJSXタグへCSSスタイルを当てたいとき", check:true,},
    {caseString:"コンポーネントごとに共通するスタイルはとCSSモジュールを併用したいとき", check:true,},
]} />
<P>{"CSSモジュールを使ってJSXのタグにスタイルを当てる方法のメモ。"}</P>


<H2>{"CSSモジュールの概要"}</H2>
<H3>{"CSSモジュールによりコンポーネントごとにCSSスタイルを割り当てる"}</H3>
<P>{"ReactではCSSモジュールをコンポーネントごとに記載したCSSモジュールをimportすることにより、簡潔にCSSを割り当てることができる。CSSモジュールの拡張子は.module.css。"}</P>
<P>{"JSXタグのプロパティであるclassNameに、importしたstylesとクラス名をセットで渡すことができる。はじめにスタイルシートを定義する。"}</P>
<CodeView language={"css"} filename={"sample.css"}>{
`// 中身は通常のスタイルと同じ記載です。
.container {
/* 個々のスタイルの設定 */
}

.btn {
/* 個々のスタイルの設定 */
}}
`}</CodeView>
<P>{"続いてJSXタグのプロパティであるclassNameに、importしたstylesとクラス名をセットで渡す。"}</P>
<CodeView language={"typescript"} >{
`// CSSモジュール(sample.module.css)をimportする
import styles from "sample.module.css"

// JSXのタグ処理
<div className={styles.container}>
      <button className={styles.btn}>Click</button>
</div>`
}</CodeView>
<P>{"CSSモジュールはコンポーネントごとに作成するため、CSSモジュールのファイルが別であればクラス名が重複しても問題なく、クラス名を考える時間が少なくなる。"}</P>
<P>{"また、コンポーネントごとに結びついているため、スタイル間の依存性が十分に小さくなり、スタイルの管理が容易になる。"}</P>



<H3>{"bodyやa, navなどの汎用タグは通常のスタイルシートから記載する"}</H3>
<P>{"bodyやaなどの汎用タグはCSSモジュールでは定義できず、以下のようなエラーが発生する。"}</P>
<CodeView language={"bash"} >{
`Syntax error: Selector "body" is not pure (pure selectors must contain at least one local class or id)`
}</CodeView>
<P>{"汎用タグなど他のコンポーネントにも共通するスタイルの場合はCSSモジュールではなく従来のスタイルシードに記載する。ReactやNext.jsではglobal.cssとしてプロジェクト作成時に生成される。"}</P>
<CodeView language={"css"} filename={"global.css"}>{
`// global.cssなどのスタイルシートに記載しましょう。
body {
/* font-family, backgroundなど*/
}

a{
/* text-decorationなど*/
}

nav {
/* margin など*/
}
`}</CodeView>


<H2>{"コンポーネントにCSSモジュールを割り当てる"}</H2>
<H3>{"CSSモジュールの書き方"}</H3>
<P>{"コンポーネントごとに記載したCSSモジュールをimportして、JSXのタグのプロパティであるclassNameに変数名とスタイルを当てる。そのとき、クラス名をstyles.クラス名で記載する。"}</P>
<P>{"また、クラス名を複数持つ場合は`${styles.クラス名1} ${styles.クラス名2}`と読み込む。"}</P>
<CodeView language={"typescript"} filename={"sample.tsx"}>{
`// CSSモジュール(sample.module.css)をimportする
import styles from "sample.module.css"

function Component() {
   // 何かしらの処理...

    return (
        <div>
            // containerを読み込む
            <div className={styles.container} >
                // blockとactiveを読み込む
                <div className={\`\${styles.block} \${styles.active}\`}>
                    <button className={styles.btn}>Click</button>
                </div>
            </div>
        </div>
    )
}

export default Component`
}</CodeView>

<H3>{"ReactのuseStateを利用して少し工夫したCSSモジュールの書き方"}</H3>
<P>{"useStateを用いて状態を管理すると動的にクラス名を決定することができる。簡単にボタンを押すとクラス名が変化する例を記載する。"}</P>
<P>{"ボタンをクリックするごとに状態変数activeがtrueまたはfalseと交互に変化し、trueのときはクラス名にactiveを追加、falseのときはクラス名にactiveを使用しないトグルとする。"}</P>
<CodeView language={"typescript"} filename={"sample.tsx"}>{
`// CSSモジュール(sample.module.css)をimportする
import { useState } from "react";
import styles from "sample.module.css"

function Component() {
    const [active, setActive] = useState<boolean>(false)
    // ボタンを押すごとにactiveの状態が入れ替わる
    const ToggleClick = () => {
        setActive(!active)
    }

    return (
        <div>
            <div className={styles.container} >
               {/* activeがtrueのときはクラス名にactiveを追加する */}
                <div className={ active ? \`\${styles.block} \${styles.active}\` : styles.block}>
                    <button className={styles.btn} onClick={ToggleClick}>Click</button>
                </div>
            </div>
        </div>
    )
}

export default Component`
}</CodeView>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"コンポーネントごとにJSXタグへCSSスタイルを当てることができる", check:true,},
    {caseString:"コンポーネントごとに共通するスタイルはCSSモジュールを併用することができる。", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
