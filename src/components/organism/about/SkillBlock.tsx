import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faGlobe, faTools, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faUbuntu } from '@fortawesome/free-brands-svg-icons';

const SkillBlock = () => {
    return (
		<div className="py-6 mx-auto">
			<div className="grid justify-center xl:grid-cols-2">
				{Skills.map((skill, index) => {
					return (
						<div key={index} className="flex md:flex-row flex-col md:items-start items-center space-x-5 py-5 md:pl-20 md:mr-auto">
							<div className='flex items-center h-16 w-16 justify-center rounded-lg shadow-lg bg-thirdBrawn'>
								<FontAwesomeIcon icon={skill.icon} className='h-8 w-8 text-gray-700' />		
							</div>

							<div className='flex flex-col space-y-4 p-4'>
								<div>
									<h3 className="mb-1 text-lg font-semibold md:text-xl">{skill.title}</h3>
									{skill.detail.map((detail, index) => {
										return (
											<p key={index} className='text-grayishBlue sm:text-md leading-relaxed'>{detail}</p>											
										)
									})}						
								</div>
								<div className='space-y-1'>
									{skill.skill.map((skill, index) => {
										return (
											<p key={index} className='text-grayishBlue sm:text-md leading-relaxed'>{skill}</p>
										)
									})}
								</div>
							</div>
						</div>						
					)
				})}
			</div>
		</div>
   	);
};

export default SkillBlock;


const Skills = [
	{
		title: "Program",
		icon: faCode,
		detail: [
			"プログラミング言語は主にPythonを学んできました",
			"機械学習やバックエンド内の処理を書くにもPythonです",
			"最近はフロントエンドであるTypeScriptで遊んでいます",
		],
		skill: [
			"Python (Numpy, Pandas, matplotlib, Pytorchなど機械学習, etc...)",
			"C++ (標準ライブラリ, Cmake, Eigen)",
			"TypeScript (標準機能, 型注釈はChatGpt見ながら)",
			"MySQL (CRUDとGUIによる操作, JOINや副問合せは基本くらい)"
		],
	},
	{
		title: "Web App",
		icon: faGlobe,
		detail: [
			"Webで創作物をデプロイするために触っています",
			"保守案件でDjangoを触ったので機械学習と組み合わせてみたい",
			"CSSはなんとなくTailwindで書いています",
			"書きやすいような書きにくいような"
		],
		skill: [
			"fastapi / Django",
			"React / Nodejs / Next.js",
			"HTML / CSS (Tailwind)"
		],
	},
	{
		title: "Cloud Server",
		icon: faCloud,
		detail: [
			"保守案件としてAWSを触っています",
			"ブログもAWSでデプロイしています",
		],
		skill: [
			"AWS (EC2, ELB, Route53, RDS, S3, SES, etc...)",
		],
	},
	{
		title: "OS / Container",
		icon: faUbuntu,
		detail: [
			"OSはITに就職してからずっとUbuntuを使っています",
			"Mac Pro支給されましたが結局Ubuntuで作業しています",
		],
		skill: [
			"Ubuntu (22.04 LTS)",
			"Mac",
			"Docker",
		],
	},
	{
		title: "Tools",
		icon: faTools,
		detail: [
			"ツールはどこの会社でも採用されているものを使っています",
			"案件問わず会社ごとに決まっていると思うため",
			"特に好みなどはありません",
		],
		skill: [
			"Git / Github",
			"Jira",
			"Slack",
			"Bitbucket",
			"Microsoft (PowerPoint, Word, Excel, Teams)",
		],
	},
	{
		title: "Certifications",
		icon: faCertificate,
		detail: [
			"資格は業務で必要になることがないため気まぐれで勉強しています",
			"最低限の勉強は続けていきたいです",
		],
		skill: [
			"基礎情報技術者",
			"AWS (SAA-C03, CLF)",
			"LPIC-1",
			"Java Silver",
		],
	},
]
