const {ApolloServer, gql} = require("apollo-server");
const {typeDefs} = require("./schema");
const {products, categories, reviews} = require("./db");

const { Catagory } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");

// scalar types: string, int, float, boolean

const server = new ApolloServer({
    typeDefs,
    resolvers:{
      Query,
      Mutation,
      Catagory,
      Product
    },
    context: {
      products, 
      categories,
      reviews
    }
});

server.listen().then(({url})=>{
    console.log("Server start at ", url);
})