// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"Eigenライブラリを使った行列計算"}</H2>
<CaseBlock caseList={[
    {caseString:"ヘッダファイルを読み込むだけでベクトルや行列計算がしたいとき", check:true,},
]} />
<P>{"EigenはC++でベクトルや行列の計算するライブラリで、ヘッダファイルで構成されているため簡単にインクルーすることができる。"}</P>
<P>{"C++でpythonのnumpyのように行列計算したい場合にインクルードすることが多いため、インストール方法をまとめる。"}</P>



<H2>{"Eigenのインストール"}</H2>
<H3>{"インストール手順"}</H3>
<P>{"Eigenのホームページに移動してライブラリをインストールする。"}</P>
<ReferenceBlock href={"https://eigen.tuxfamily.org/index.php?title=Main_Page"} />
<ReferenceBlock href={"https://gitlab.com/libeigen/eigen.git"} />

<Ol>
<Li num={"1"} title={"ホームページからライブラリをダウンロードする"}>
<P>{"ホームページに移動して最新LTSの3.4.0のtarかzipファイルをインストールする。"}</P>
<ImageBlock imgSrc={"/blog/posts/cpp-eigen1_pwquiw"} />
<P>{"またはgit cloneからダウンロードする。"}</P>
<CodeView language="bash" filename="git">{
`cpp-eigen1_pwquiw`
}</CodeView>
</Li>
<Li num={"2"} title="ダウンロードしたディレクトリを開発ディレクトリに入れる">
<P>{"ダウンロードしたzipファイルまたはtarファイルを解凍し、開発しているディレクトリのincludeディレクトリに移動する。"}</P>
<CodeView language="bash" filename="folder">{
`ディレクトリ保存例：
（任意のディレクトリ）
　　　　　|---Eigen.cpp　　　　　　　　<<　Eigenを使用するcppファイル    
　　　　　|---include　　　　　　　　　<<　includeディレクトリ    
　　　　　　　　|---eigen-3.4.0　　　　<<　Eigenディレクトリ`
}</CodeView>
</Li>
</Ol>


<H2>{"Eigenのコンパイル方法と使い方"}</H2>
<H3>{"Eigenのコンパイル方法"}</H3>
<P>{"外部のヘッダファイルをコンパイルするため、コンパイル時に-Iオプションとインクルード元のディレクトリを指定する。"}</P>
<CodeView language="bash" filename="compile">{
`// includeディレクトリに入れたEigenディレクトリ名
g++ ./Eigen.cpp -o ./Eigen -I ./include/eigen-3.4.0`
}</CodeView>


<H3>{"ベクトルの演算方法"}</H3>
<P>{"Eigenのベクトルライブラリのヘッダファイルをインクルードするために、#include <Eigen/Dense>を加える。"}</P>
<P>{"ベクトルクラスはEigen::Vector2iやEigen::3dなどで、はじめの数字は要素数であり任意の要素数の場合はXを使う。iやdはそれぞれint型かdouble型を選択する。"}</P>
<CodeView language="cpp" filename="vector">{
`#include <iostream>
#include <Eigen/Dense>

int main(void)
{
    // 要素2のベクトル 要素はint型
    Eigen::Vector2i vector2i;
    vector2i << 1, 2;
    std::cout << vector2i << std::endl;

    // 要素3のベクトル 要素はdouble型
    Eigen::Vector3d vector3d;
    vector3d << 1.0, 2.0, 3.0;
    std::cout << vector3d << std::endl;

    // VectorXiは任意の要素の行列
    // 今回は要素5のベクトル 要素はint型
    Eigen::VectorXi vectorXi(5);
    vectorXi << 1, 2, 3, 4, 5;
    std::cout << vectorXi << std::endl;
}`
}</CodeView>

<P>{"ベクトルの演算は通常通り足し算や引き算は`+`と`-`を使う。内積や外積はベクトル変数のフィールド関数であるdotとcrossを使用する。"}</P>
<CodeView language="cpp" filename="vector">{
`#include <iostream>
#include <Eigen/Dense>

int main(void)
{
    // 要素3のベクトル 要素はint型
    Eigen::Vector3i vector1;
    vector1 << 1, 2, 3;
    Eigen::Vector3i vector2;
    vector2 << 3, 3, 3;
    
    // ベクトル同士の足し算
    Eigen::Vector3i add_vector = vector1 + vector2;
    std::cout << add_vector << std::endl;
    // ベクトル同士の引き算
    Eigen::Vector3i sub_vector = vector1 - vector2;
    std::cout << sub_vector << std::endl;
    // ベクトルとスカラの掛け算
    int scalar = 3;
    Eigen::Vector3i mul_vector = vector1 * 3;
    std::cout << mul_vector << std::endl;

    // ベクトルの内積 dot
    int dot = vector1.dot(vector2);
    std::cout << dot << std::endl;
    // ベクトルの外積 cross
    Eigen::Vector3i cross = vector1.cross(vector2);
    std::cout << cross << std::endl;
}`
}</CodeView>


<H3>{"行列の演算方法"}</H3>
<P>{"Eigenの行列ライブラリのヘッダファイルをインクルードするために、ベクトルと同様に#include <Eigen/Dense>を加える。"}</P>
<P>{"行列クラスはEigen::Matrix2iやEigen::Matrix3dなどで、はじめの数字は要素数であり2や3はそれぞれ(2, 2)や(3, 3)の製法行列になる。任意の要素数の場合はXを使うことで(2, 3)などサイズは自由に設定できる。iやdはそれぞれint型かdouble型を選択する。"}</P>
<CodeView language="cpp" filename="matrix">{
`#include <iostream>
#include <Eigen/Dense>

int main(void)
{
    // 2 × 2の行列 要素はint型
    Eigen::Matrix2i matrix2i;
    matrix2i << 1, 2,
                3, 4;
    std::cout << matrix2i << std::endl;

    // 3 × 3の行列 要素はdouble型
    Eigen::Matrix3d matrix3d;
    matrix3d << 1.0, 2.0, 3.0,
                4.0, 5.0, 6.0,
                7.0, 8.0, 9.0;
    std::cout << matrix3d << std::endl;

    // MatrixXiは任意の行 × 列の行列
    // 今回は2 × 4の行列 要素はint型
    Eigen::MatrixXi matrixXi(2,4);    // 初期化時に(行,列)を指定する
    matrix3d << 1, 2, 3, 4,
                5, 6, 7, 8;
    std::cout << matrixXi << std::endl;
}`
}</CodeView>

<P>{"ベクトルの演算は通常通り足し算や引き算は`+`と`-`を使う。行列の掛け算は単純に'*'を使用する。"}</P>
<CodeView language="cpp" filename="matrix">{
`#include <iostream>
#include <Eigen/Dense>

#include <iostream>
#include <Eigen/Dense>

int main(void)
{
    // 2 × 2の行列 要素はint型
    Eigen::Matrix2i matrix1;
    matrix1 << 1, 2,
               3, 4;
    Eigen::Matrix2i matrix2;
    matrix2 << 1, 1,
               1, 1;
    
    // 行列同士の足し算
    Eigen::Matrix2i add_matrix;
    add_matrix = matrix1 + matrix2;
    std::cout << add_matrix << std::endl;
    // 行列同士の引き算
    Eigen::Matrix2i sub_matrix;
    sub_matrix = matrix1 - matrix2;
    std::cout << sub_matrix << std::endl;
    // 行列同士の掛け算
    Eigen::Matrix2i mul_matrix; = matrix1 * matrix2;
    mul_matrix = matrix1 * matrix2;
    std::cout << mul_matrix << std::endl;
}`
}</CodeView>
<P>{"ベクトルと行列の演算も可能であるが、EigenのVectorは縦ベクトル(N, 1)であることに注意する。"}</P>

<CodeView language="cpp" filename="vector">{
`#include <iostream>
#include <Eigen/Dense>

int main(void)
{
    // 2 × 2の行列 要素はint型
    Eigen::Matrix2i matrix;
    matrix << 1, 2,
              3, 4;
    // 要素が5のベクトル 要素はint型
    Eigen::Vector2i vector;
    vector << 1, 2;
    
    // ベクトルと行列の掛け算
    // 行列(2,2)とベクトル(2,1)のサイズに注意
    Eigen::Vector2i mul_vector = matrix * vector;
    std::cout << mul_vector << std::endl;
}`
}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"Eigenライブラリを使用するとヘッダファイルを読み込むだけでベクトルや行列計算ができる。", check:true,},
]} />


{/* Finish */}
</>
    );
}

export default cpp_debug
