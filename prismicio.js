import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'dirk-portfolio-website'

const prismicClient = prismic.createClient(
  prismic.getEndpoint(repositoryName),
  {
    // If your repository is private, add an access token
    accessToken: '',

    // This defines how you will structure URL paths in your project.
    // Update the types to match the Custom Types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    routes: [
      {
        type: 'page',
        path: '/:uid',
      },
      {
        type: 'home',
        path: '/:uid',
      },
      {
        type: 'project_page',
        path: '/:uid',
      }
    ],
  }
)

export const client = new ApolloClient({
  link: new HttpLink({
    uri: prismic.getGraphQLEndpoint(repositoryName),
    fetch: prismicClient.graphqlFetch,
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
})