import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout";
import { createClient } from "../prismicio";

interface HomePageProp {
  menu: any;
  contactPage: {
    __typename: string;
    title: string;
    description: string;
    slices: any;
    data: {
      slices: any;
    };
  };
}

const Home = ({ contactPage, menu }: HomePageProp) => {
  return (
    <Layout menu={menu}>
        Contact
      <SliceZone components={components} slices={contactPage.data.slices} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const contactPage = await client.getSingle("contact");
  const menu = await client.getSingle("menu");

  return {
    props: {
      contactPage,
      menu,
    },
  };
}
