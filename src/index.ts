import express, { Response, Request } from 'express'
import path from 'path'
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
// import { UserResolver } from './graphql/resolvers/UserResolver'
;(async () => {
  const app = express()

  app.get('/', (_, res: Response) => {
    res.status(200).json({ message: 'Hello' })
  })

  const apolloServer = new ApolloServer({
    typeDefs: `
    type Query {
      hello: String!
    }
    `,
    resolvers: {
      Query: {
        hello: () => 'hello world'
      }
    }
  })

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('Express server started')
  })
})()
