import Layout from "@/components/Layout"
import {getAllPostIds,getPostData} from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticPaths() {
    const paths=getAllPostIds();

    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const postData= await getPostData(params.id);

    return {
        props:{
            postData,
        }
    }
}

const Post = ({postData}) => {

    const router=useRouter();
    if(router.isFallback){
        return <div>読込中</div>
    }
    return (
        <Layout>
        <Head>
        <title> {postData.title}</title>
       </Head>
        <article>
            <h1 className={utilStyles.headingX1}>{postData.title}</h1>
            <div className={utilStyles.lightText}>{postData.date}</div>

            <div dangerouslySetInnerHTML={{ __html:postData.blogContentHTML }} />

        </article>
        </Layout>
    )
}

export default Post
