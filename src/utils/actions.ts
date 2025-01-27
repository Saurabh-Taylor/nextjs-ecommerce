import db from "@/utils/db";
export const fetchFeaturedProducts = async () => {
  // this is the first way to fetch products
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async () => {
  // 2nd way to fetch products but we are doin it without async
  return db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
