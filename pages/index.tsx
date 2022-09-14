import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
// import client from "../apollo-client";
import { client } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout";
import Link from "next/link";

interface HomePageProp {
  links: any;
  newHomePageData: any;
  homePage: {
    __typename: string;
    title: string;
    description: string;
    slices: any
  };
}

const Home = ({ homePage, links, newHomePageData }: HomePageProp) => {
  // console.log(homePage);
  // console.log("homepage", newHomePageData);

  return (
    <Layout>
      <ul>
        {links?.map((link: any) => {
          return (
            <li key={link}>
              <Link href={`projects/${link}`}>
                <a href={`projects/${link}`}>{link}</a>
              </Link>
            </li>
          );
        })}
      </ul>
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
                        link {
                          _linkType
                          ... on _ExternalLink {
                            url
                            target
                          }
                          ... on _Document {
                            _meta {
                              id
                              uid
                            }
                          }
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

  const allProjectPages = await client.query({
    query: gql`
      query {
        allProject_pages {
          edges {
            node {
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
  });

  const newHomePageData = await client.query({
    query: gql`
      {
        home(uid: "home", lang: "nl-nl") {
          slices {
            ... on HomeSlicesProject_card {
              variation {
                ... on HomeSlicesProject_cardDefault {
                  primary {
                    title
                    description
                    image
                    link {
                      _linkType
                      ... on _Document {
                        _meta {
                          id
                          uid
                        }
                      }
                      ... on _ExternalLink {
                        url
                        target
                      }
                    }
                  }
                }
              }
            }
            ... on HomeSlicesTech_stack_card {
              variation {
                ... on HomeSlicesTech_stack_cardDefault {
                  primary {
                    title
                    description
                  }
                  items {
                    icon
                    tech_name
                  }
                }
              }
            }
            ... on HomeSlicesCall_to_action {
              variation {
                ... on HomeSlicesCall_to_actionDefault {
                  primary {
                    title
                    description
                    button_text
                    image
                    link {
                      _linkType
                    }
                  }
                }
              }
            }
            ... on HomeSlicesHome_hero {
              variation {
                ... on HomeSlicesHome_heroDefault {
                  primary {
                    title
                    button
                    image
                    link {
                      ... on _Document {
                        _meta {
                          id
                          uid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const links = allProjectPages.data.allProject_pages.edges?.map((e: any) => {
    return e?.node._meta.uid;
  });

  // console.log(homePageData.data.allHomes.edges[0].node);
  // console.log("homepage", newHomePageData);

  return {
    props: {
      homePage: homePageData.data.allHomes.edges[0].node,
      links,
      newHomePageData,
    },
  };
}
