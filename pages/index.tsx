import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
// import client from "../apollo-client";
import { client } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout";

interface HomePageProp {
  homePage: {
    __typename: string;
    title: string;
    description: string;
    slices: {
      __typename: string;
    }[];
  };
}

const Home = ({ homePage }: HomePageProp) => {
  return (
    <Layout>
      <SliceZone components={components} slices={homePage.slices} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const homePageData = await client.query({
    query: gql`
      query {
        allHomes(id: "YvKx6xAAACAAyZS0") {
          edges {
            node {
              slices {
                __typename
                ... on HomeSlicesProject_card {
                  type
                  label
                  variation {
                    __typename
                    ... on HomeSlicesProject_cardDefault {
                      primary {
                        title
                        description
                        projectid {
                          _linkType
                          __typename
                        }
                        image
                      }
                    }
                  }
                }
                __typename
                ... on HomeSlicesTech_stack_card {
                  type
                  label
                  variation {
                    __typename
                    ... on HomeSlicesTech_stack_cardDefault {
                      items {
                        icon
                        tech_name
                      }
                      primary {
                        title
                        description
                      }
                    }
                  }
                }
                __typename
                ... on HomeSlicesCall_to_action {
                  type
                  label
                  variation {
                    __typename
                    ... on HomeSlicesCall_to_actionDefault {
                      primary {
                        title
                        description
                        button_text
                        link {
                          _linkType
                          __typename
                        }
                        image
                      }
                    }
                  }
                }
                __typename
                ... on HomeSlicesHome_hero {
                  type
                  label
                  variation {
                    __typename
                    ... on HomeSlicesHome_heroDefault {
                      primary {
                        title
                        button
                        link {
                          _linkType
                          __typename
                        }
                        image
                      }
                    }
                  }
                }
              }
              _meta {
                id
                uid
                type
                tags
                lang
              }
              _linkType
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      homePage: homePageData.data.allHomes.edges[0].node,
    },
  };
}
