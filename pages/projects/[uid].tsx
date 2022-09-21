import React from "react";
import { gql } from "@apollo/client";
// import client from "../apollo-client";
// import { client } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Layout from "../../components/Layout";
import { components } from "../../slices";


function ProjectPage({ menu, page }: any) {
  return(
    <Layout menu={menu}>
        <SliceZone slices={page.data.slices}  components={components} />
    </Layout>
  ); 
}

export default ProjectPage;

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("project_page", params.uid);
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      menu,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("project_page");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}
