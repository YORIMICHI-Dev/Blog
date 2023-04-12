import Layout from "@/components/template/Layout";
import FadeInOnVisible from "@/components/molecules/FadeInOnVisible";
import ProfileBlock from "@/components/organism/about/ProfileBlock";
import SkillBlock from "@/components/organism/about/SkillBlock";
import HistoryBlock from "@/components/organism/about/HistoryBlock";
import PageH1 from "@/components/atoms/PageH1";
import PageH2 from "@/components/atoms/PageH2";

function about() {

    return (
        <Layout title="About">
            <PageH1>About</PageH1>
            
            <div className="flex flex-col space-y-16">
                
                {/* プロフィール */}
                <FadeInOnVisible>
                    <section id="profile" className="shadow-md pb-20 rounded-lg">
                        <PageH2>Profile</PageH2>
                        <ProfileBlock />                
                    </section>
                </FadeInOnVisible>

                {/* スキル */}
                <FadeInOnVisible>
                    <section id="skill" className="shadow-md py-20  rounded-lg">
                        <PageH2>Skill</PageH2>
                        <SkillBlock />     
                    </section>                    
                </FadeInOnVisible>


                {/* 履歴 */}

                <FadeInOnVisible>
                    <section id="history" className="shadow-md py-20  rounded-lg">
                        <PageH2>History</PageH2>
                        <HistoryBlock />
                    </section>                    
                </FadeInOnVisible>

            </div>
        </Layout>
    );
}

export default about;