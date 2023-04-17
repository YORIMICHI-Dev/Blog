// Components for Blog
import {H2, H3, P, Ol, Li, Key, Table, Alert, CodeView, CaseBlock, ConclusionBlock, RefarenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"C++でoperator関数を定義する"}</H2>
<CaseBlock caseList={[
    {caseString:"templateを使って関数の引数や戻り値に特定のクラスを定義しないプログラムコードを書きたいとき", check:true,},
    {caseString:"自分で作成したクラスのメンバ変数をtemplateにしたいとき", check:true,},
]} />
<P>{"C++に慣れてきたころにtemplateを使ってみたくなったためまとめました。"}</P>


<H2>{"templateについて"}</H2>
<H3>{"引数や戻り値に特定のクラスを定義しない"}</H3>
<P>{"通常、1つの関数や変数には'int'や'std::string'のように1つの型が設定されるが、templateを使うと必要に応じて1つの関数などに対して様々なクラスが指定できる。"}</P>
<P>{"templateの簡単な例として、はじめにtemplate<typename T>を宣言する。Tは特定のクラスを指定せず、関数の引数に応じた処理を行う。"}</P>
<CodeView language="cpp" filename="template example">{
`#include <iostream>
#include <string>

// template  引数のクラスを特定しない書き方
template<typename T>
void print(T t1, T t2){
    std::cout << t1 + t2 << std::endl;
}

int main(void){
    // intのとき
    int num1 = 2;
    int num2 = 5;
    print<int>(num1, num2);           // int同士の足し算:7

    // std::stringのとき
    std::string name1 = "YORI";
    std::string name2 = "MICHI";
    print<std::string>(name1, name2); // std::string同士は連結:YORIMICHI
}`}</CodeView>
<P>{"templateを使うときは、templateに使用するクラスを<>内に指定する必要があります。（例: print<std::string>, print<int>）"}</P>
<P>{"ちなみに、typename Tは好きな名前にすることができる。"}</P>


<H2>{"templateを試す"}</H2>
<H3>{"template関数"}</H3>
<P>{"先程のtemplateの使い方はtemplateメソッドと呼ぶ。引数だけでなく戻り値もtemplateにできる。"}</P>
<CodeView language="cpp" filename="template function">{
`#include <string>

// 引数と戻り値がtypename T
template<typename T>
T add(T t1, T t2, T t3){
    T t3 =  t1 + t2 + t3;
    return t3;
}

int main(void){
    int num = add<int>(1, 2, 3);    // intの演算 6
    std::string name = add<std::string>("YO", "RI", "MICHI");    // stringの演算 "YORIMICHI"
}`}</CodeView>
<P>{"また、templateは複数のtypenameを指定することができる。"}</P>
<CodeView language="cpp" filename="template function">{
`#include <iostream>
#include <string>

// template  引数がtypename Tと戻り値がtypename U
template <typename T, typename U>
// 戻り値がtemplateのときは戻り値をauto（推論）にもできます
auto getType(T t1, T t2) {
    // 条件ごとにtype Uに指定した型を戻します
    if (t1 > t2) {
        U u = t1;
        return u;
    } else {
        U u = t2;
        return u;
    }
}

int main(void){
    int num1 = 4;
    int num2 = 3;
    // 戻り値をautoより推論します
    auto num = getType<int, float>(num1, num2); // intからfloatに変更
}`}</CodeView>
<P>{"複数選択した場合もtemplateに使用するクラスをそれぞれ<>内に指定する必要があります。例: getType<int, float>, getType<int, int）"}</P>
<P>{"また、関数の戻り値のクラスがtemplateのときは、template関数の戻り値をautoと置き推論できる。このとき、関数を使用したときもautoにすることができます。"}</P>

<H3>{"templateクラス -メンバ関数-"}</H3>
<P>{"templateはクラスのメンバ関数にも使用することができる。メンバ関数の場合は、template関数と同様の手順になる。"}</P>
<CodeView language="cpp" filename="class template function">{
`#include <iostream>
#include <string>


class Math{
    public:
    // メンバ変数
    int initial;

    // コンストラクタ
    Math(int _initial):initial(_initial){};

    // メンバ関数前にtemplateを指定します
    template <typename T>
    int adding(T num){
        return num + this->initial;
    }
};

int main(void){
    Math math(0);
    int num1 = math.adding<int>(10);        // int + int (メンバ変数)
    int num2 = math.adding<float>(10.2);    // flaot + int(メンバ変数)
}`}</CodeView>

<H3>{"templateクラス -メンバ変数-"}</H3>
<P>{"メンバ変数の場合はクラスの直前にtemplateを宣言する。"}</P>
<CodeView language="cpp" filename="class template member">{
`#include <iostream>
#include <string>

// クラス前にtemplateを指定します
template <typename Person>
class Sample{
    public:
    // templateによるメンバ変数
    Person person;

   // 以下省略します
};

// class Child1
class Child1{
    public:
    std::string name;
    int age;
    Child1(): name("Child1"), age(22){}

   // 以下省略します
};

// class Child2
class Child2{
    public:
    std::string name;
    int age;
    Child2(): name("Child2"), age(24){}

   // 以下省略します
};

int main(void){
    // templateに好きなクラスを持たせる
    Sample<Child2> sample1;
    Sample<Child2> sample2;
    std::cout << sample1.person.name << std::endl; // Child1
    std::cout << sample2.person.name << std::endl; // Child2
}`}</CodeView>
<P>{"クラスメンバ変数にtemplateを使用すると、条件ごとに一部分のメンバ変数だけ変更したい場合に便利。"}</P>
<P>{"ちなみに、templateに使用するクラスが決まっているときは、usingを使って次のように省略できる。usingを使うとクラスに別名をつけることができます。"}</P>
<CodeView language="cpp" filename="template using">{
`#int main(void){
    // templateクラスに別名をつけます
    using Sample = Sample<Child1>;
    Sample sample;
    std::cout << sample.person.name << std::endl;   //  Child1
}`}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"templateを使って関数の引数や戻り値に特定のクラスを定義しないプログラムコードを書く", check:true,},
    {caseString:"自分で作成したクラスのメンバ変数・メンバ関数もtemplateとして定義できる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
