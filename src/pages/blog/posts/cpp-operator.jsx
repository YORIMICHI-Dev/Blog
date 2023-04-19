// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"C++でoperator関数を定義する"}</H2>
<CaseBlock caseList={[
    {caseString:"operator関数で演算子'+'や'-'、よく使われる演算子'<<'や'==', '!='をユーザー定義したいとき", check:true,},
    {caseString:"operator関数により演算子を自由にオーバーロードするときはメンバーと共有する", check:true,},
]} />
<P>{"intやdouble以外に、自作したクラスで'+'や'-'の演算子を使用する場合は自分で設定する必要があります。"}</P>
<P>{"自作クラスで演算子を使う場合はあらかじめoperator関数を定義していきます。"}</P>


<H2>{"operator関数について"}</H2>
<H3>{"自作クラスの演算子の処理をカスタマイズする"}</H3>
<P>{"operator関数とは演算子'+'や'-'などの処理を定義している関数です。"}</P>
<P>{"通常、intやdouble型にはdefaultの処理として'+'は足し算、'-'は引き算が定義されています。"}</P>
<CodeView language="cpp" filename="int double">{
`#include <iostream>

int main(void){
    int num1 = 1;
    int num2 = 2;
    // 通常、"+"は加算として処理されます
    std::cout << num1 + num2 << std::endl;    //  num1 + num2 =  3
    std::cout << num1 - num2 << std::endl;    //  num1 - num2 =  -1
}`
}</CodeView>
<P>{"一方、自作したクラスから生成したインスタンスに'+'を使うとエラーが発生します。"}</P>
<CodeView language="cpp" filename="your own class">{
`#include <iostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;       // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

int main(void){
    Memo memo1("1日", 300);
    Memo memo2("2日", 500);
    // メモから支出を確認
    std::cout << memo1.day + "と" + memo2.day + "の支出は" 
                       << memo1 + memo2 << "です。" <<  std::endl; 
    // エラー: これらのオペランドと一致する演算子 "+" はありません
}`
}</CodeView>
<P>{"自身で作ったクラスでは演算子'+'や'-'などの処理はデフォルトで定義されていません。そこで、operator関数を使って演算子の挙動を定義します。"}</P>

<H3>{"operator関数の定義方法"}</H3>
<P>{"さきほどの演算子'+'を有効にするためには、operator+を定義します。定義することでインスタンス同士の'+'による処理が可能になります。"}</P>
<CodeView language="cpp" filename={"operator+"}>{
`#include <iostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

// Memoインスタンスの"+"の処理を定義
int operator+(const Memo &memo1, const Memo &memo2){
    return memo1.expence + memo2.expence;
}

int main(void){
    Memo memo1("1日", 300);
    Memo memo2("2日", 500);
    // メモから支出を確認
    std::cout << memo1.day + "と" + memo2.day + "の支出合計は" 
                       << memo1 + memo2 << "です。" <<  std::endl; 
    // 1日と2日の支出合計は800です。
}`
}</CodeView>

<H2>{"よく使うoperator関数'<<'のオーバーロード"}</H2>
<H3>{"シフト演算子'<<'のオーバーロード方法"}</H3>
<P>{"クラスを定義した後によく使われる演算子として'<<'があります。'<<'はコンソールに出力するstd::coutやファイルに出力するstd::fstreamによく使われます。"}</P>
<P>{"operator<<の定義は少し特殊です。"}</P>
<CodeView language="cpp" filename={"operator<<"}>{
`#include <iostream>
#include <ostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

// Memoインスタンスの"<<"の処理を定義
std::ostream& operator<<(std::ostream &os, const Memo &memo){
    os << memo.day << "の支出は" << memo.expence <<"円です。";
    return os;
}

int main(void){
    Memo memo("1日", 500);
    // コンソールに出力
    std::cout<< memo << std::endl;
    // 1日の支出は500円です。
}`
}</CodeView>
<P>{"戻り値は出力処理を行うstd::ostream、演算子はoperator<<、引数はstd::ostreamとMemoです。returnは出力したい内容をstd::ostreamのインスタンスosに格納していきます。"}</P>
<P>{"pythonの'__str__'や'__repr__'関数の定義と似ています。"}</P>

<H3>{"operator<<を使ってインスタンスをstd::stringへ変換"}</H3>
<P>{"operator<<を定義していれば、自作クラスのインスタンスをstd::string型に変換することができます。方法としてstd::to_stringをオーバーロードします。"}</P>
<CodeView language="cpp" filename={"std::string"}>{
`#include <iostream>
#include <ostream>
#include <sstream> // <<に格納したインスタンスを文字列に変換する

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};


// Memoインスタンスの"<<"の処理を定義
std::ostream& operator<<(std::ostream &os, const Memo &memo){
    os << memo.day << "の支出は" << memo.expence <<"円です。";
    return os;
}

// std::to_stringをMemoインスタンスにオーバーロード
namespace std{
    string to_string(const Memo& memo){
        stringstream ss;
        ss << memo;
        return ss.str();
    }
}

int main(void){
    Memo memo("1日", 500);
    // 文字列としてコンソールに出力
    std::cout<< std::to_string(memo) << std::endl;
    std::cout<< "文字列の長さは" << std::to_string(memo).size() << std::endl;
    // 1日の支出は500円です。
    //  文字列の長さは31
}`
}</CodeView>
<P>{"std::stringstreamからMemoインスタンスを'<<'に格納し、str()にてstd::stringに変換します。もちろんstd::stringの関数を使用することができます。"}</P>


<H2>{"比較演算子'==', '!='や'>', '<'のオーバーロード"}</H2>
<H3>{"比較演算子'==', '!='のオーバーロード方法"}</H3>
<P>{"比較演算子'==', '!='は比較したい変数を演算子で比較し、結果をbool型で戻します。また、'==', '!='は対になる比較演算子のため両方とも定義するほうがベター。"}</P>
<CodeView language="cpp" filename={"== !="}>{
`// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

// Memoインスタンスの"==", "!="の処理を定義
bool operator==(const Memo &memo1, const Memo &memo2){
    return memo1.expence == memo2.expence;
}
bool operator!=(const Memo &memo1, const Memo &memo2){
    return memo1.expence != memo2.expence;
}`
}</CodeView>

<H3>{"比較演算子'>', '<'のオーバーロード方法"}</H3>
<P>{"比較演算子'>', '<'も比較したい変数を演算子で比較し、結果をbool型で戻す。"}</P>
<CodeView language="cpp" filename={"== !="}>{
`// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

// Memoインスタンスの">", "<"の処理を定義（">=", "<="も同様に）
bool operator>(const Memo &memo1, const Memo &memo2){
    return memo1.expence > memo2.expence;
}
bool operator<(const Memo &memo1, const Memo &memo2){
    return memo1.expence < memo2.expence;
}`
}</CodeView>


<H2>{"むやみにoperator関数を埋めていかない"}</H2>
<H3>{"例：operator+, operator-は加算と減算以外の処理にしない"}</H3>
<P>{"operator関数を使って自作クラスの演算子すべてをオーバーロードできます。"}</P>
<P>{"ただ、クラス作成者が自由に演算子の処理を決定すると、今後使う共同開発者が混乱します。"}</P>
<P>{"operator+ならばメンバ変数の加算が一般的です。operator関数によるオーバーロードは必ず誰もが混乱しない処理にする。"}</P>
<CodeView language="cpp" filename={"mistake 1"}>{
`#include <iostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

// Memoインスタンスの"+", を引き算として定義
int operator+(const Memo &memo1, const Memo &memo2){
    return memo1.expence - memo2.expence;
}

int main(void){
    Memo memo1("1日", 300);
    Memo memo2("2日", 500);
    // メモから支出を確認
    std::cout << memo1.day + "と" + memo2.day + "の支出合計は" 
                       << memo1 + memo2 << "です。" <<  std::endl; 
    // 1日と2日の支出合計は-200です。
}`
}</CodeView>

<H3>{"例：operator=は目的がなければオーバーロードしない"}</H3>
<P>{"演算子'='もオーバーロードすることができますが、defaultの処理ではインスタンスの参照を他のインスタンスに引き渡します。"}</P>
<CodeView language="cpp" filename={"default operator="}>{
`#include <iostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}
};

int main(void){
    Memo memo1("1日", 300);
    Memo memo2("2日", 500);
    
    // memo2にmemo1の参照を渡す。
    memo2 = memo1;
    std::cout << memo2.day << std::endl;
    // 1日
}`
}</CodeView>
<P>{"operator=をオーバーロードすると参照を渡す以外にも、自由に処理を決めることができます。"}</P>
<P>{"operator=はクラスのメンバ関数として定義します。"}</P>
<CodeView language="cpp" filename={"operator="}>{
`#include <iostream>

// 自身で定義したクラス
class Memo{
    public:
    std::string day;   // 日にち
    int expence;        // 支出

    // コンストラクタ
    Memo(std::string _day, int _expence): day(_day), expence(_expence){}

    // Memoインスタンスの"="の処理を定義
    Memo operator=(const Memo &other_memo){
    this->day = "31日";
    this->expence = 200;
    return *this;
}
};

int main(void){
    Memo memo1("1日", 300);
    Memo memo2("2日", 500);
    
    // memo2にmemo1の参照を渡すと想定している
    memo2 = memo1;
    std::cout << memo2.day << std::endl;
    //  memo1の1日ではなく31日が表示される
}`
}</CodeView>
<P>{"このオーバーロードはメンバ変数dayとexpenceの値を変えるだけです。しかし、本来はmemo1の参照渡す処理が想定されるため容易にオーバーロードすると混乱します。"}</P>
<P>{"そのため、operator=はdefaultを使いオーバーロードを避けるべきです。他の演算子もできる限り想定できる使い方を考慮します。"}</P>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"自作クラスにはoperator関数で演算子'+'や'-'、よく使われる演算子'<<'や'==', '!='をユーザー定義する", check:true,},
    {caseString:"operator関数により演算子を自由にオーバーロードするときはメンバーと共有することを念頭に設計する", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
