export default `
    type Query {
        getUsers: [User]!

        getUser(id: ID!): User
    }

    type Mutation {
        createUser(
            nickname: String!
            fullname: String!
            phone: String
            city: String
        ): User!

        deleteUser(id: ID!): String

        updateUser(
            id: ID!
            nickname: String
            fullname: String
            phone: String
            city: String
        ): User!
    }

    type User {
        _id: ID!
        nickname: String!
        fullname: String!
        phone: String
        city: String
    }
`;
