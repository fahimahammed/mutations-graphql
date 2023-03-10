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
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!):  Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Catagory
    updateProduct(id: ID!, input: UpdateProductInput!): Product
    updateReview(id: ID!, input: UpdateReviewInput!): Review
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

  input UpdateCategoryInput{
    name: String!
  }

  input AddProductInput{
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    catagoryId: String
  }

  input UpdateProductInput{
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    catagoryId: String
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String
    rating: Int!
    productId: String!
  }

  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String
    rating: Int!
    productId: String!
  }
`;