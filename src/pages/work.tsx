import Layout from "@/components/template/Layout";
import WorkBlock from "@/components/organism/WorkBlock";
import FadeInOnVisible from "@/components/molecules/FadeInOnVisible";
import PageH1 from "@/components/atoms/PageH1";


const work = () => {
    return (
        <Layout title="My Work">
            <PageH1>Work</PageH1>
            <FadeInOnVisible>
                <WorkBlock />                
            </FadeInOnVisible>
        </Layout>
    );
}

export default work;