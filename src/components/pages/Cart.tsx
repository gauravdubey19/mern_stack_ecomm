import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, selectItems, selectTotal } from "@/redux/slices/cart";
import { GrCreditCard } from "react-icons/gr";
import CartProduct from "../CartProduct";
import ReactCountUp from "../ReactCountUp";
import Goback from "../Goback";
import Fade from "react-reveal/Fade";
// import { toast } from "../ui/use-toast";
// import { createCheckoutSession } from "@/lib/actions/strip.actions";
// import { CartState } from "@/lib/types";

// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY ?? "");

const Cart: React.FC = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  // const { session } = useSession();
  // console.log(session?.publicUserData?.identifier);

  // const createCheckout = async () => {
  //   setDisabled(true);
  //   try {
  //     const stripe = await stripePromise;
  //     if (!stripe) throw new Error("Stripe initialization failed");

  //     if (!items && !session?.publicUserData?.identifier) {
  //       toast({
  //         title: "Something went wrong, please try again later!",
  //         description:
  //           "if still not getting to checkout, try to re-login again.",
  //         variant: "destructive",
  //       });
  //       return setDisabled(false);
  //     }
  //     const email = session?.publicUserData?.identifier;
  //     // Calling the backend to create a checkout session
  //     // const checkoutSession = await createCheckoutSession(items, email);

  //     // Redirecting user/customer to Stripe Checkout
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: checkoutSession.data?.id,
  //     });

  //     if (result.error) {
  //       alert(result.error.message);
  //       console.error(result.error.message);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert((err as Error).message);
  //   }
  //   setDisabled(false);
  // };

  return (
    <>
      <div className="py-10 md:px-6 heightFix text-zinc-300">
        <Goback />
        <main className="max-w-screen-xl mx-auto">
          {items?.length ? (
            <div className="my-6 shadow rounded-md">
              <div className="flex flex-col md:p-8 p-6">
                <h1 className="sm:text-2xl text-xl font-semibold border-b-2">
                  Shopping Cart
                </h1>
                <div className="flex justify-between items-center py-6">
                  <span className="font-medium text-lg text-blue-light">
                    Items
                    <span className="font-semibold text-xl ml-2">
                      {items?.length}
                    </span>
                  </span>
                  <button
                    className={`button-red py-2 px-8 xs:px-10 ${disabled ? "opacity-50" : ""}`}
                    onClick={() => dispatch(emptyCart())}
                    disabled={disabled}
                  >
                    Empty Cart
                  </button>
                </div>
                {items.map((item, i) => (
                  <CartProduct
                    key={`cart-product-${item?._id}`}
                    _id={item?._id}
                    title={item?.title}
                    price={item?.price}
                    description={item?.description}
                    category={item?.category}
                    image={item?.image}
                    qty={item?.qty}
                    minimumOrderQuantity={item?.minimumOrderQuantity}
                    border={i !== items?.length - 1}
                    disabled={disabled}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full px-6 lg:py-20 sm:py-10 py-4">
              <div className="text-center md:max-w-none sm:w-auto mx-auto max-w-xs w-4/5">
                <Fade top>
                  <img
                    src="/assets/empty_cart.svg"
                    alt="Empty Cart"
                    width={350}
                    height={350}
                  />
                </Fade>
                <Fade bottom>
                  <h3 className="lg:text-2xl text-xl font-medium mt-4">
                    Your Cart is Empty
                  </h3>
                </Fade>
              </div>
            </div>
          )}
          {items?.length ? (
            <div className="flex flex-col md:p-10 py-8 px-6 shadow-md rounded-md md:text-xl sm:text-lg text-base my-10">
              <h2 className="whitespace-nowrap font-semibold overflow-x-auto scrollDiv">
                Subtotal ({items.length} items) :
                <span className="font-bold text-red-500 mx-2">
                  <ReactCountUp
                    className="text-lg font-semibold"
                    prefix="₹"
                    amt={total}
                  />
                </span>
              </h2>
              <SignedIn>
                <button
                  role="link"
                  className={`button-green mt-6 flex-center lg:text-lg text-base py-2 ${disabled ? "opacity-50" : ""}`}
                  // onClick={createCheckout}
                  onClick={() => setDisabled(false)}
                  disabled={disabled}
                >
                  <GrCreditCard className="sm:w-6 w-5" />
                  <span className="ml-2">Proceed to checkout</span>
                </button>
              </SignedIn>
              <SignedOut>
                <Link
                  to="/signin"
                  className="button mt-6 lg:text-lg text-base py-2"
                >
                  Sign in to checkout
                </Link>
              </SignedOut>
            </div>
          ) : null}
        </main>
      </div>
    </>
  );
};

export default Cart;
