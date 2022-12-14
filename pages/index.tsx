import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout";
import { createClient } from "../prismicio";

interface HomePageProp {
  menu: any;
  homePage: {
    __typename: string;
    title: string;
    description: string;
    slices: any;
    data: {
      slices: any;
    };
  };
}

const Home = ({ homePage, menu }: HomePageProp) => {
  return (
    <Layout menu={menu}>
      <SliceZone components={components} slices={homePage.data.slices} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const homePage = await client.getSingle("home");
  const menu = await client.getSingle("menu");

  return {
    props: {
      homePage,
      menu,
    },
  };
}
