import React, { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../lib/data";
import { ProductOrg } from "../lib/types";
import { SearchProduct } from "../lib/actions/products.actions";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Fade from "react-reveal/Fade";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/slices/cart";

interface SearchProps {
  isSearchFocused: boolean;
  setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC = () => {
  const items = useSelector(selectItems);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <Fade top>
      <div className="sticky top-0 z-50 h-16 select-none w-full p-2 lg:px-20 flex-between gap-2 text-white bg-transparent backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        <Fade top>
          <Link to="/" className="hidden lg:flex-center">
            <img src="/assets/logo.png" alt="logo" className="w-28" />
          </Link>
        </Fade>
        {!isSearchFocused && (
          <Link to="/" className="lg:hidden flex-center">
            <img src="/assets/logo.png" alt="logo" className="w-48" />
          </Link>
        )}
        {/* <div
          className={`hidden lg:flex-center ${isSearchFocused && "w-full"} ease-in-out duration-300`}
        > */}
        <Search
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
        />
        {/* </div> */}
        {!isSearchFocused && (
          <>
            <nav className="hidden md:flex-center w-[30%] gap-4 p-1">
              {links.map((link, index) => (
                <Link
                  to={link?.url}
                  key={index}
                  className="text-lg btn hover:bg-[#252525a6] active:bg-[#252525]"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
            <div className="lg:hidden flex gap-2 text-sm font-semibold">
              <Link to="/cart" className="relative mr-2 hover:fill-cyan-300">
                <BsCart4 size={25} />
                {items?.length > 0 && (
                  <div className="absolute -top-4 -right-1.5 rounded-full text-cyan-400 text-lg">
                    {items?.length}
                  </div>
                )}
              </Link>
              <SignedOut>
                <Link
                  to="/signin"
                  className="btn border border-solid border-[#dfe7f3] active:border-[#252525] active:bg-[#dfe7f3] active:text-[#000] active:translate-y-1 ease-in-out duration-300"
                >
                  login
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </>
        )}

        <div className="hidden lg:flex gap-2 text-sm font-semibold">
          <Link to="/cart" className="relative mr-2 group">
            <BsCart4
              size={25}
              className="group-hover:fill-cyan-200 ease-in-out duration-200"
            />
            {items?.length > 0 && (
              <div className="absolute -top-4 -right-1.5 rounded-full text-cyan-400 text-lg">
                {items?.length}
              </div>
            )}
          </Link>
          <div className="flex gap-2 group">
            <SignedOut>
              <Link
                to="/signin"
                className="btn border border-solid border-[#dfe7f3] active:border-[#252525] group-hover:bg-[#dfe7f3] group-hover:text-[#000]"
              >
                login
              </Link>
              <Link
                to="/signup"
                className="btn bg-[#252525 text-black border border-solid bg-[#dfe7f3] group-hover:bg-transparent group-hover:text-[#dfe7f3] active:border-[#252525]"
              >
                register
              </Link>
            </SignedOut>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </Fade>
  );
};

const Search: FC<SearchProps> = ({ isSearchFocused, setIsSearchFocused }) => {
  const [products, setProducts] = useState<ProductOrg[] | null>(null);

  const search = async (search: string) => {
    try {
      if (search) {
        const res = await SearchProduct(search);
        if (res) setProducts(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!products) search("laptop");
  }, [products]);
  return (
    <div
      className={`group relative w-[30rem] ${
        isSearchFocused && "w-full ml-4 mr-4"
      } rounded-md border border-zinc-200/35 hover:border-zinc-200 focus-within:border-cyan-500 ease-in-out duration-300`}
    >
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        placeholder="Search for Products, Brands and More"
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
        className="w-full h-full p-2 bg-transparent group-hover:placeholder:text-white ease-in-out duration-200 focus:placeholder:text-white border-none outline-none overflow-hidden"
      />
      {/* <Fade> */}
      <div
        className={`hidden absolute group-focus-within:flex flex-col top-10 w-full max-h-[50vh] overflow-y-scroll scrollDiv px-2 bg-black/90 backdrop-blur-xl rounded-lg border border-zinc-500 overflow-hidden`}
      >
        {products &&
          products.map((p, index) => (
            <Link
              to={`/${p?.category}/${p?.title}`}
              key={index}
              onClick={() => setIsSearchFocused(false)}
              className="w-full text-lg capitalize hover:text-cyan-300 hover:text-xl ease-in-out duration-100"
            >
              <Fade bottom>{p.title}</Fade>
            </Link>
          ))}
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default Navbar;

// {products &&
//   products.map((p, index) => (
//     <div
//       key={index}
//       onClick={() => {
//         navigate(`/${p?.category}/${p?.title}`);
//         setIsSearchFocused(false);
//       }}
//       className="w-full text-lg capitalize hover:text-cyan-300 hover:text-xl ease-in-out duration-100 cursor-pointer"
//     >
//       {p.title}
//     </div>
//   ))}
