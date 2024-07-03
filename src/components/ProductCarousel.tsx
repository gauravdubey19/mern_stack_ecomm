import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ProductOrg } from "../lib/types";
import Autoplay from "embla-carousel-autoplay";

import Fade from "react-reveal/Fade";

interface ProductCarouselProps {
  products: ProductOrg[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="h-[50vh] w-full"
    >
      <CarouselContent>
        {products.slice(0, 8).map((product, index) => (
          <CarouselItem key={index} className="group">
            <Fade top>
              <div className="relative h-[50vh] w-full cursor-grab active:cursor-grabbing overflow-hidden">
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  // width={1200}
                  // height={600}
                  className="h-full w-full object-cover group-hover:scale-105 ease-in-out duration-300"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 flex-center flex-col text-white p-6 text-center ease-in-out duration-300">
                  <h2 className="text-3xl font-bold">{product?.title}</h2>
                  <p className="text-lg line-clamp-1 w-[20rem] md:w-[30rem] overflow-hidden">
                    {product?.description}
                  </p>
                  <Link
                    to={`/${product?.category}/${product?.title}`}
                    className="button"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Fade>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full absolute bottom-5 flex justify-between lg:bottom-40">
        <CarouselPrevious className="z-50 ml-14" />
        <CarouselNext className="z-50 mr-14" />
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
