// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import * as prismic from '@prismicio/client'

// // Fill in your repository name
// export const repositoryName = 'dirk-portfolio-website'

// const prismicClient = prismic.createClient(
//   prismic.getEndpoint(repositoryName),
//   {
//     // If your repository is private, add an access token
//     accessToken: '',

//     // This defines how you will structure URL paths in your project.
//     // Update the types to match the Custom Types in your project, and edit
//     // the paths to match the routing in your project.
//     //
//     // If you are not using a router in your project, you can change this
//     // to an empty array or remove the option entirely.
//     routes: [
//       {
//         type: 'page',
//         path: '/:uid',
//       },
//       {
//         type: 'home',
//         path: '/:uid',
//       },
//       {
//         type: 'project_page',
//         path: '/:uid',
//       }
//     ],
//   }
// )

// export const client = new ApolloClient({
//   link: new HttpLink({
//     uri: prismic.getGraphQLEndpoint(repositoryName),
//     fetch: prismicClient.graphqlFetch,
//     useGETForQueries: true,
//   }),
//   cache: new InMemoryCache(),
// })

import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'home':
      return '/'
    case 'project_page':
      return `/projects/${doc.uid}`
    default:
      return null
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}