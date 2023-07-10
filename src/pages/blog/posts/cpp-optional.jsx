// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"C++で無効値を表現したいからoptionalを使う"}</H2>
<CaseBlock caseList={[
    {caseString:"有効値・無効値（値を持つ・持たない）をC++で実装するとき", check:true,},
    {caseString:"生ポインタによるアドレス有効・無効と違いややこしくなく直感的に表現したいとき", check:true,},
]} />
<P>{"pythonのNoneに相当するC++のライブラリを調べたときに、C++17でoptionalという便利なライブラリがあったため、生ポインタを使わずに有効値・無効値を表現する。"}</P>


<H2>{"optionalについて"}</H2>
<H3>{"クラスから生成したインスタンスが値を持っているか・持っていないかを表現する"}</H3>
<P>{"optionalとはC++17から使える標準ライブラリの一つで、std::optionalインスタンスを生成するときに使用する。"}</P>
<P>{"std::optionalは特定のクラスに対してテンプレートでポインタに変換する。このとき、ポインタが有効またば無効かを設定することができる。"}</P>
<P>{"Personクラスのインスタンスに対しoptionalを使用した例が以下となる。生成したPersonインスタンスのポインタを無効とする場合はstd::nulloptを代入するだけで無効値を表現することができる。"}</P>
<P>{"また、スマートポインタのようにPersonクラスと全く関係ない別のポインタを代入することはできないため、不確実なポインタ操作を防ぐことができる。"}</P>
<CodeView language="cpp" filename="optional example">{
`#include <optional>
#include <iostream>

// Personクラス
class Person{
    public:
    // メンバ変数
    std::string name;
    int age;

    // メンバ関数
    void profile(){
        std::cout << "Name: " << this->name << std::endl
                  << "Age: " << this->age << std::endl;
    }

    // コンストラクタ
    Person(std::string _name, int _age): name(_name), age(_age){}
};

int main(void){
    // はじめにPersonの変数を初期化します
    Person person("yorimichi", 22);

    // std::optionalを使ってPersonクラスの変数をoptionalにオーバーライドする
    std::optional<Person> yorimichi_opt = yorimichi;

    // optional変数はポインタとなるためメンバ変数・関数は->から呼ぶ
    yorimichi_opt->profile();

    // 変数が有効値・無効値かを判定
    if (yorimichi_opt.has_value()){
        std::cout << "有効値です" << std::endl;
    }else{
        std::cout << "無効値です" << std::endl;
    }

    // std::nulloptを使用して無効値
    kouhai_opt = std::nullopt;
    
    // 変数が有効値・無効値かを判定
    if (yorimichi_opt.has_value()){
        std::cout << "有効値です" << std::endl;
    }else{
        std::cout << "無効値です" << std::endl;
    }
}`}</CodeView>

<H3>{"生ポインタによるnulloptとの違い"}</H3>
<P>{"new演算子から生成するいわゆる生ポインタにもnulloptを代入して有効値・無効値を表現できるが、生ポインタでは動的にヒープ領域からメモリを確保するため、delを使用して明示的に削除しないとメモリが圧迫したり意図しないうちにポインタにアクセスするなど取り扱いが非常に難しくなる。"}</P>
<P>{"optionalから生成したインスタンスはスタック領域にてメモリが確保されるため、スコープから外れた場合は自動的に削除され取り扱いが簡単になりバグが防ぎやすくなる。"}</P>
<P>{"また、メンバ関数(has_value)を使って、有効値・無効値を判定することができる。"}</P>


<H2>{"有効値・無効値を判定する"}</H2>
<H3>{"クラスのメンバ変数にoptionalを使う"}</H3>
<P>{"クラスのメンバ変数にもstd::optionalを使うことができる。これにより、クラスが無効値（std::nullopt）を持つことができる。"}</P>
<CodeView language="cpp" filename="optional class member">{
`#include <optional>
#include <iostream>

// Personクラス
class Person{
    public:
    // メンバ変数
    std::string name;
    int age;
    std::optional<int> height;

    // コンストラクタ
    Person(std::string _name, int _age): name(_name), age(_age){}
};

int main(void){
    // Personインスタンスを生成します
    Person yorimichi("yorimichi", 22);

    // メンバ変数heigthが有効値・無効値かを判定
    if (yorimichi.height.has_value()){
        std::cout << "Height: " << *yorimichi.height << "cm" << std::endl;
    }else{
        std::cout << "heightが無効値です" << std::endl;
    }
}`}</CodeView>
<P>{"また、無効値の場合に値を代入するvalue_or関数があり、無効値が渡されたとき変数を渡すことができる。"}</P>
<CodeView language="cpp" filename="optional class member">{
`#include <optional>
#include <iostream>

// Personクラス
class Person{
    public:
    // メンバ変数
    std::string name;
    int age;
    std::optional<int> height;

    // コンストラクタ
    Person(std::string _name, int _age): name(_name), age(_age){}
};

int main(void){
    // Personインスタンスを生成します
    Person yorimichi("yorimichi", 22);

    // メンバ変数heigthが有効値・無効値かを判定します。（実体化に*演算子が必要です）
    yorimichi.height = yorimichi.height.value_or(162);
    std::cout << "Height " << *yorimichi.height << "cm" << std::endl;
}`}</CodeView>

<H3>{"メソッドの戻り値をoptionalにしてインスタンス生成が成功したか確認する"}</H3>
<P>{"メソッドの戻り値にstd::optionalを使うことによって、メソッド内の判定ごとに有効値・無効値を選択して戻すことができる。"}</P>
<P>{"これにより、メソッドによるインスタンス生成の成功・失敗を判定することができる。"}</P>
<CodeView language="cpp" filename="optional class member">{
`#include <optional>
#include <iostream>

// Personクラス
class Person{
    public:
    // メンバ変数
    std::string name;
    int age;

    // コンストラクタ
    Person(std::string _name, int _age): name(_name), age(_age){}
};

// oprionalを使ったメソッド
std::optional<Person> createPerson(std::string name, int age){
    // 名前が空欄または年齢が負の場合は無効値を返す
    if (name.empty() || age < 0){
        return std::nullopt;
    }else{
        // 指定した名前と年齢を持つoptionalインスタンスを戻す
        Person person(name, age);
        std::optional<Person> person_opt = person;
        return person_opt;
    }
}

int main(void){
    // Personインスタンスを生成します
    std::optional<Person> yorimichi = createPerson("yorimichi", 22);

    // インスタンス生成に成功したか（無効値か）確認します
    if (kouhai == std::nullopt){
        std::cout << "無効値です" << std::endl;
    }else{
        std::cout << "Name: " << yorimichi->name << std::endl
                  << "Age: " << yorimichi->age << std::endl;
    }

    // Personインスタンスを生成（無効値）
    std::optional<Person> invalid = createPerson("", 24);

    // インスタンス生成に成功したか（無効値か）確認
    if (invalid == std::nullopt){
        std::cout << "無効値です" << std::endl;
    }else{
        std::cout << "Name: " << yorimichi->name << std::endl
                  << "Age: " << yorimichi->age << std::endl;
    }
}`}</CodeView>

<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"optionalライブラリを使って有効値・無効値（値を持つ・持たない）をC++で実装することができる", check:true,},
    {caseString:"生ポインタによるアドレス有効・無効と違い、optionalでは安全にややこしくなく直感的に表現することができる", check:true,},
]} />
<ReferenceBlock href="https://cpprefjp.github.io/reference/optional/optional.html"/>

{/* Finish */}
</>
    );
}

export default cpp_debug
