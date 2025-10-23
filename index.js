import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import db from './db.js'

//types
import { typeDefs } from "./schema.js"

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}

//server setup
const server = new ApolloServer({
    //typeDefs -- definitions of different types of data that would be used in the graph (schema)
    //resolvers -- defines how the queries are handled
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)