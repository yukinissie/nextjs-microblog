import Layout from "../../components/Layout";
import { getAllPosstsIds, getPostData } from "../../lib/post";

export async function getStaticPaths() {
  const paths = getAllPosstsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.blogContentHTML}
    </Layout>
  );
}
