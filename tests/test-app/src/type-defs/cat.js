const Cat = `
  type Cat {
    id: ID!
    name: String
    lastName: String
  }

  type CatsConnection {
    pageInfo: PageInfo!
    edges: [CatEdge]!
    totalCount: Int!
  }

  type CatEdge {
    cursor: String!
    node: Cat!
    custom: String
  }

  enum OrderDirection {
    asc
    desc
  }

  enum OrderNulls {
    first
    last
  }

  extend type Query {
    catsConnection(
      first: Int
      after: String
      last: Int
      before: String
      orderBy: String
      orderDirection: OrderDirection
      orderNulls: OrderNulls
      orderDirectionMultiple: [OrderDirection]
      orderByMultiple: [String!]
      orderNullsMultiple: [OrderNulls]
      useOffsetPagination: Boolean
    ): CatsConnection!
  }
`;

module.exports = Cat;
