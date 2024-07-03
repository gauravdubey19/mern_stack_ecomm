import { useEffect, useState } from "react";
import { SearchProduct, fetchProducts } from "@/lib/actions/products.actions";
import { ProductOrg } from "@/lib/types";
import ProductCarousel from "../ProductCarousel";
import ProductCategorySection from "../ProductCategorySection";
import Loading from "@/loading";

const Home = () => {
  const [products, setProducts] = useState<ProductOrg[] | null>(null);
  const [productsCarousel, setProductsCarousel] = useState<ProductOrg[] | null>(
    null
  );

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetchProducts(160);
        const res2 = await SearchProduct("laptop");

        if (res2) setProductsCarousel(res2);
        if (res) setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (!products) fetching();
  }, [products]);
  // console.log(productsCarousel);

  if (!products) return <Loading />;
  if (!productsCarousel) return <Loading />;
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product?.category))
  );

  return (
    <div className="flex flex-col min-h-[100dvh] select-none">
      <header className="w-full">
        <ProductCarousel products={productsCarousel} />
      </header>
      <main className="flex-1 flex-wrap gap-2 md:px-10 lg:px-20">
        {uniqueCategories?.map((category, index) => (
          <ProductCategorySection
            key={index}
            category={category}
            products={products}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
