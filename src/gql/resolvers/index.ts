import { db } from "../../db";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
        return db.products.find((pd) => pd.id === args.categoryId);
      },
  },
};
