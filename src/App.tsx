import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProductsCategoryPage from "./components/pages/ProductsCategoryPage";
import ProductsDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Error404 from "./404";
import Loading from "./loading";
import "./App.css";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <>
      <section className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Loading />} />
          <Route errorElement={<Error404 />} path="/" element={<Home />} />
          <Route
            errorElement={<Error404 />}
            path="/signin"
            element={
              <Fade top>
                <div className="animate-slideDownOne w-full p-10 flex-center">
                  <SignIn />
                </div>
              </Fade>
            }
          />
          <Route
            errorElement={<Error404 />}
            path="/signup"
            element={
              <div className="animate-slideDownOne w-full p-10 flex-center">
                <SignUp />
              </div>
            }
          />
          <Route
            errorElement={<Error404 />}
            path="/about"
            element={<About />}
          />
          <Route errorElement={<Error404 />} path="/cart" element={<Cart />} />
          <Route
            errorElement={<Error404 />}
            path="/:category"
            element={<ProductsCategoryPage />}
          />
          <Route
            errorElement={<Error404 />}
            path="/:category/:title"
            element={<ProductsDetails />}
          />
        </Routes>
        <Toaster />
        <Footer />
      </section>
    </>
  );
}

export default App;
