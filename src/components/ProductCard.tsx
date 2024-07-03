import React from "react";
import { Link } from "react-router-dom";
import { ProductOrg } from "../lib/types";
import { Button } from "@/components/ui/button";
import ReactCountUp from "./ReactCountUp";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cart";
import { MdAddShoppingCart } from "react-icons/md";

interface ProductCardProps {
  product: ProductOrg;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const addItemToCart = () =>
    dispatch(
      addToCart({
        _id: product?.id,
        title: product?.title,
        price: 83 * product?.price,
        description: product?.description,
        category: product?.category,
        image: product?.thumbnail,
        minimumOrderQuantity: product?.minimumOrderQuantity,
        qty: 1,
        toast: true,
      })
    );
  return (
    <>
      <div className="relative group text-white rounded-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <Link to={`/${product?.category}/${product?.title}`}>
          <img
            src={product?.thumbnail}
            alt={product?.title}
            width={400}
            height={400}
            className="group w-full h- object-cover group-hover:drop-shadow-lg ease-in-out duration-100"
          />
          <div className="p-2 bg-transparent backdrop-blur-md">
            <h3 className="text-md md:text-lg font-medium line-clamp-1 group-hover:text-xl ease-in-out duration-300">
              {product?.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product?.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <ReactCountUp
                className="text-lg font-semibold"
                prefix="₹"
                amt={83 * product?.price}
              />
            </div>
          </div>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={addItemToCart}
          className="absolute bottom-2 right-2 z-10 rounded-full hover:bg-slate-400/30 hover:border-black group active:translate-y-1 ease-in-out duration-300"
        >
          <span className="text-black text-2xl font-extrabold group-hover:text-cyan-600">
            <MdAddShoppingCart />
          </span>
          {/* <span className="sr-only">Add to cart</span> */}
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
