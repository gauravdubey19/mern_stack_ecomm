import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCategoryList,
  fetchProductsByCategory,
} from "@/lib/actions/products.actions";
import { ProductOrg } from "@/lib/types";
import Loading from "@/loading";
import ProductCard from "../ProductCard";
import Goback from "../Goback";
import Fade from "react-reveal/Fade";

const ProductsCategoryPage: React.FC = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || ""
  );
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductOrg[] | null>(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const categoryListRes = await fetchCategoryList();
        if (categoryListRes) setCategoryList(categoryListRes);

        if (selectedCategory) {
          const res = await fetchProductsByCategory(selectedCategory);
          if (res) setProducts(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [selectedCategory]);

  if (!products) return <Loading />;

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className="select-none py-12 md:py-16 lg:py-20 text-white">
      <Goback />
      <div className="container">
        {categoryList && (
          <Fade top>
            <div className="categoryList w-full flex-center mb-5">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="scrollDiv w-[90%] md:w-[70%] lg:w-[60%] cursor-pointer px-4 py-3 rounded-md bg-gray-800/25 text-white capitalize border-none active:outline-none"
              >
                {categoryList.map((category, index) => (
                  <option
                    key={index || category}
                    value={category}
                    className="bg-black capitalize overflow-hidden"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </Fade>
        )}
        <Fade top className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
            {selectedCategory}
          </h2>
        </Fade>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCategoryPage;
