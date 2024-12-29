**GraphQL Starter**
## Following These Steps For Start GraphQL Project
### 1. npm init --yes && npm pkg set type="module"
### 2. npm install @apollo/server graphql
### 3. mkdir src touch src/index.ts
### 4. npm install --save-dev typescript @types/node
### 5. touch tsconfig.json and paste this file: "{"compilerOptions": {"rootDirs": ["src"],"outDir": "dist","lib": ["es2020"],"target": "es2020","module": "esnext","moduleResolution": "node","esModuleInterop": true,"types": ["node"]}}"
### 6. Copy : "type": "module","scripts": {"compile": "tsc","start": "npm run compile && node ./dist/index.js"} and paste it package.json
### 7. Paste it index.ts file 
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const resolvers = {
  Query: {
    books: () => books,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
### 8. npm start // start the server