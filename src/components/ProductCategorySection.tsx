import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { IoMdArrowForward } from "react-icons/io";
import { ProductOrg } from "../lib/types";
import ProductCard from "./ProductCard";

// const Fade = require("react-reveal/Fade");
import Fade from "react-reveal/Fade";

interface ProductCategorySectionProps {
  category: string;
  products: ProductOrg[];
}

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
  category,
  products,
}) => {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <div className="px-2 py-5">
        <Fade top>
          <div className="flex-between animate-slideDown text-white">
            <h1 className="text-xl lg:text-3xl font-bold capitalize">
              {category}
            </h1>
            <Link
              to={`/${category}`}
              className="group flex items-center gap-2 font-semibold text-sm md:text-xl"
            >
              View more
              <IoMdArrowForward
                size={30}
                className="group-hover:fill-cyan-300/80 group-hover:scale-105 group-hover:-ml-2 group-active:translate-x-1 ease-in-out duration-200"
              />
            </Link>
          </div>
        </Fade>
        <Carousel className="w-full h-auto">
          <Fade bottom>
            <CarouselContent>
              {filteredProducts.map((product, index) => (
                <CarouselItem
                  key={index || product.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5 mt-5 cursor-grab active:cursor-grabbing"
                >
                  <ProductCard key={product.id} product={product} />
                </CarouselItem>
              ))}
              <CarouselItem className="basis-4/1">
                <div className="text-white relative w-60 h-full overflow-hidden rounded-lg group hover:shadow-md hover:shadow-cyan-800 hover:-translate-y-2 transition-all duration-300">
                  <div className="z-0 absolute w-full h-full bg-slate-600/25 flex-center">
                    <img src="/assets/loadMore.gif" alt="load-more" />
                  </div>
                  <Link
                    to={`/${category}`}
                    className="z-20 absolute w-full h-full bg-black/25 group-hover:bg-black/50 flex-center gap-2 font-semibold text-sm md:text-xl ease-in-out duration-300"
                  >
                    View more
                    <IoMdArrowForward
                      size={30}
                      className="group-hover:fill-cyan-300/80 group-hover:scale-105 group-hover:-ml-2 group-active:translate-x-1 ease-in-out duration-200"
                    />
                  </Link>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Fade>
          <div className="hidden lg:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ProductCategorySection;
