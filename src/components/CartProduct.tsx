import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQty, removeFromCart } from "@/redux/slices/cart";
import ReactCountUp from "./ReactCountUp";
import Fade from "react-reveal/Fade";

interface CartProductProps {
  _id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  qty: number;
  minimumOrderQuantity: number;
  border?: boolean;
  disabled?: boolean;
}

const CartProduct: React.FC<CartProductProps> = ({
  _id,
  title,
  price,
  description,
  category,
  image,
  qty,
  minimumOrderQuantity,
  border = false,
  disabled = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = price * qty;

  const removeItemFromCart = () => dispatch(removeFromCart({ _id }));
  const incQty = () => {
    dispatch(
      updateQty({
        _id,
        title,
        qty: qty < minimumOrderQuantity ? qty + 1 : qty,
        toast: qty < minimumOrderQuantity ? false : true,
      })
    );
  };

  const decQty = () =>
    dispatch(
      updateQty({
        _id,
        title,
        qty: qty - 1,
        toast: false,
      })
    );

  return (
    <Fade bottom>
      <div
        className={`px-2 sm:grid sm:grid-cols-5 text-zinc-300 bg-gray-950 backdrop-blur-lg rounded-md ${
          border ? "border-b border-zinc-400" : ""
        } overflow-hidden`}
      >
        <div className="w-fit text-center sm:text-left my-auto hover:drop-shadow-lg">
          <img
            src={image}
            alt={title}
            width={150}
            height={150}
            className="cursor-pointer"
            onClick={() => navigate(`/${category}/${title}`)}
          />
        </div>

        {/* Middle */}
        <div className="col-span-3 sm:p-4 mt-2 mb-6 sm:my-0">
          <h4 className="mb-3 link lg:text-xl md:text-lg text-base capitalize font-medium">
            <Link to={`/${category}/${title}`}>{title}</Link>
          </h4>
          <p className="lg:text-sm text-xs my-2  mb-4 line-clamp-3 link">
            <Link to={`/${category}/${title}`}>{description}</Link>
          </p>
          <span className="font-medium md:text-base text-lg flex justify-center md:justify-end gap-1">
            {qty} ×{" "}
            <ReactCountUp className="font-semibold" prefix="₹" amt={price} /> =
            <span className="font-bold text-white mx-1">
              <ReactCountUp
                className="text-lg font-semibold"
                prefix="₹"
                amt={total}
              />
            </span>
          </span>
        </div>

        {/* Buttons on the right of the products */}
        <div className="flex flex-col space-y-4 my-auto  justify-self-end">
          <div className="flex justify-between">
            <button
              className={`button sm:p-1 ${disabled ? "opacity-50" : ""}`}
              onClick={decQty}
              disabled={disabled}
            >
              <span className="text-xl hover:text-black">-</span>
            </button>
            <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
              <span className="font-bold md:text-base text-sm text-white">
                {qty}
              </span>
            </div>
            <button
              className={`button sm:p-1 ${disabled ? "opacity-50" : ""}`}
              onClick={incQty}
              disabled={disabled}
            >
              <span className="text-xl hover:text-black">+</span>
            </button>
          </div>
          <button
            className={`button py-2  lg:px-10 md:px-8 px-6 ${
              disabled ? "opacity-50" : ""
            }`}
            onClick={removeItemFromCart}
            disabled={disabled}
          >
            Remove
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default CartProduct;
