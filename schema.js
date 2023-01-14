const { gql} = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Catagory!]!
    category(id: ID!): Catagory
  }

  type Mutation{
    addCategory(input: AddCategoryInput): Catagory!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Catagory
    reviews: [Review!]!
  }

  type Catagory {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput{
    name: String!
  }

  input AddProductInput{
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    catagoryId: String!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String
    rating: Int!
    productId: String!
  }
`;