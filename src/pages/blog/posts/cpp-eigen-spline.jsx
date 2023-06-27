// Components for Blog
import {H2, H3, P, Ol, Li, Table, Key, Alert, CaseBlock, ImageBlock, CodeView, ConclusionBlock, ReferenceBlock} from "@/components/atoms/blog_components/BlogComponents"


const cpp_debug = () => {
    return (
<>
{/* Start */}

<H2>{"EigenでBスプライン曲線を描く"}</H2>
<CaseBlock caseList={[
    {caseString:"C++のライブラリEigenからBスプライン曲線を作成したいとき", check:true,},
    {caseString:"2次元座標・3次元座標のBスプライン曲線を作成するとき", check:true,},
]} />
<P>{"以前EigenのライブラリからBスプライン曲線を作成したときのメモです。"}</P>


<H2>{"Bスプライン曲線の概要"}</H2>
<H3>{"数式の概要メモ"}</H3>
<P>{"Bスプライン曲線の式は制御点・Bスプライン基底関数・ノットベクトルから計算される。"}</P>
<P>{"・制御点: 曲線補間に必要な座標点。この点を基準に曲線形状が決まる。"}</P>
<P>{"・Bスプライン基底関数: i番目の制御点からi+1番目の制御点を補間する曲線の式。ノットベクトルによって式は決定される。"}</P>
<P>{"・ノットベクトル: Bスプライン基底関数の計算に使用する。ノットベクトルの要素は均等な数字の並びになる。"}</P>

<H3>{"Bスプラインの作成"}</H3>
<Ol>
<Li num={"1"} title={"Bスプライン曲線の制御点(x,y)を準備"}>
<P>{"Bスプライン曲線の制御点(x,y)を準備する。今回は制御点5個とした、行が制御点番号、列が制御点番号の行列である。"}</P>
<CodeView language="cpp" filename="controller">{
`// 行：制御点座標(x,y)、列：制御点番号
Eigen::MatrixXd controll_matrix(2, 5);
controll_matrix << 0.0,  3.0,  5.0, 7.0, 10.0,
                   3.0,  6.0, -3.0, 0.0,  4.0;`
}</CodeView>
</Li>
<Li num={"2"} title="制御点からBスプラインを計算する">
<P>{"制御点からBスプラインを計算する。使用するライブラリはSplinesライブラリで、Bスプライン曲線を計算するクラス・メソッドが提供されている。"}</P>
<CodeView language="cpp" filename="b-spline">{
`// 制御点からBスプラインを計算
Eigen::Spline2d spline = Eigen::SplineFitting<Eigen::Spline2d>::Interpolate(controll_matrix, 2);`
}</CodeView>
<Alert mark="check">{"Eigen::Spline2dは計算されたBスプライン情報を持つクラス。2dは2次元座標のdouble型を示す。"}</Alert>
<Alert mark="check">{"Eigen::SplineFitting<Spline2d>::InterpolateはBスプラインを計算するクラス。引数は制御点（Eigen::MatrixX）と曲線の次数（2次や3次）。"}</Alert>
<Alert>{"SplinesライブラリはEigen-unsupportのディレクトリにあるため、Eigenにてサポートはされていない。"}</Alert>
</Li>
<Li num={"3"} title="スプライン曲線の始点から終点までの距離を決める">
<P>{"スプライン曲線の始点から終点までの距離をベクトル（STLコンテナ）に格納する。このとき、距離は0～1を任意の要素数で分割した値になる。"}</P>
<CodeView language="cpp" filename="distance">{
`    // スプライン曲線の始点から終点までの距離（0~1までの均等な要素を持つSLTコンテナ）を定義しよう
int spline_element = 100;           // 分割数
std::vector<double> distances;
for (int i = 0; i < spline_element; i++)
{
    double distance = 1.0 / (spline_element - 1) * i;  // 0～1まで要素を均等に分割
    distances.push_back(distance);   // 例 spline_element = 3のとき、distances = {0.0, 0.5, 1.0}
}`
}</CodeView>
</Li>
<Li num={"4"} title="Bスプライン計算結果を取り出す">
<P>{"Step3の距離の集合から、Bスプライン計算結果を取り出す。各距離に対して曲線上の座標(x,y)が取り出されるため、新しい行列に取り入れる。"}</P>
<CodeView language="cpp" filename="result">{
`// Bスプライン計算結果を取り出そう
Eigen::Spline2d::PointType pt; // 各距離における曲線上の座標
Eigen::MatrixXd spline_matrix(2, spline_element); // 各距離の曲線上の座標を格納
// 各距離の座標を取り出し、
for (int i = 0; i < distances.size(); i++)
{
    pt = spline(distances[i]); 
    spline_matrix.col(i) << pt.matrix();
}`
}</CodeView>
</Li>
</Ol>
<P>{"コードのまとめと例。"}</P>
<CodeView language="cpp" filename="example">{
`#include <iostream>
#include <Eigen/Dense>
#include <vector>
#include <unsupported/Eigen/Splines> // Splineクラスを持つヘッダファイルです

int main(void)
{
    // step1 
    // Bスプライン曲線の制御点(x,y)を準備しよう（制御点5個）
    // 行：制御点座標(x,y)、列：制御点番号
    Eigen::MatrixXd controll_matrix(2, 5);
    controll_matrix << 0.0,  3.0,  5.0, 7.0, 10.0,
                       3.0,  6.0, -3.0, 0.0,  4.0;

    // step2
    // 制御点からBスプラインを計算しよう
    Eigen::Spline2d spline = Eigen::SplineFitting<Eigen::Spline2d>::Interpolate(controll_matrix, 3); 

    // step 3
    // スプライン曲線の始点から終点までの距離（0~1までの均等な要素を持つSLTコンテナ）を定義しよう
    int spline_element = 100;
    std::vector<double> distances;
    for (int i = 0; i < spline_element; i++)
    {
        // 0～1まで要素を均等に分割
        double distance = 1.0 / (spline_element - 1) * i;
        distances.push_back(distance);
    }

    // step 4
    // Bスプライン計算結果を取り出そう
    Eigen::Spline2d::PointType pt; // 各距離における曲線上の座標
    Eigen::MatrixXd spline_matrix(2, spline_element); // 各距離の曲線上の座標を格納
    // 各距離の座標を取り出し、
    for (int i = 0; i < distances.size(); i++)
    {
        pt = spline(distances[i]); 
        spline_matrix.col(i) << pt.matrix();
    }

    std::cout << spline_matrix << std::endl;
}`
}</CodeView>


<H2>{"まとめ"}</H2>
<ConclusionBlock conclusionList={[
    {caseString:"C++のライブラリEigenからBスプライン曲線を作成できる", check:true,},
]} />

{/* Finish */}
</>
    );
}

export default cpp_debug
