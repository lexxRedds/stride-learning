import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Feed {
    feedId: ID!
    type: String!
    userId: String!
    targetType: String!
    targetId: String!
    value: String
    level: Int
    timestamp: String!
  }

  type Query {
    getFeedsByUser(userId: String!): [Feed]
    getFeedsByTarget(targetId: String!): [Feed]
  }

  type Mutation {
    createFeed(
      type: String!
      userId: String!
      targetType: String!
      targetId: String!
      value: String
      level: Int
    ): Feed
  }
`;

export default typeDefs;