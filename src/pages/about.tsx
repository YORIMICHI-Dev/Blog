import Layout from "@/components/template/Layout";
import FadeInOnVisible from "@/components/molecules/FadeInOnVisible";
import ProfileBlock from "@/components/organism/about/ProfileBlock";
import SkillBlock from "@/components/organism/about/SkillBlock";
import HistoryBlock from "@/components/organism/about/HistoryBlock";
import PageH1 from "@/components/atoms/PageH1";

function about() {

    return (
        <Layout title="About">
            <PageH1>About</PageH1>
            
            <div className="flex flex-col space-y-16">
                
                {/* プロフィール */}
                <FadeInOnVisible>
                    <section id="profile" className="shadow-md pb-20 rounded-lg">
                        <h2 className="mb-6 md:text-4xl text-3xl font-semibold">Profile</h2>
                        <ProfileBlock />                
                    </section>
                </FadeInOnVisible>

                {/* スキル */}
                <FadeInOnVisible>
                    <section id="skill" className="shadow-md py-20  rounded-lg">
                        <h2 className="mb-6 md:text-4xl text-3xl font-semibold">Skill</h2>
                        <SkillBlock />     
                    </section>                    
                </FadeInOnVisible>


                {/* 履歴 */}

                <FadeInOnVisible>
                    <section id="history" className="shadow-md py-20  rounded-lg">
                        <h2 className="mb-6 md:text-4xl text-3xl font-semibold">History</h2>
                        <HistoryBlock />
                    </section>                    
                </FadeInOnVisible>

            </div>
        </Layout>
    );
}

export default about;