export const c = "comments";

// <ProductCategorySection
//   key={index}
//   category={category}
//   products={products}
// />

// HeroCarousel.tsx ->

// import React, { useRef } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "../components/ui/Carousel";
// import { Link } from "react-router-dom";
// import Autoplay from "embla-carousel-autoplay";
// // import Link from "next/link";

// export interface CarouselProps {
//   className?: string;
//   opts?: {
//     align?: "start" | "center" | "end";
//     loop?: boolean;
//     autoplay?: boolean;
//     interval?: number;
//   };
// }

// const HeroCarousel: React.FC = () => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

//   return (
//     <section className="w-full h-80 border relative overflow-hidden">
//       <Carousel
//         plugins={[plugin.current]}
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//         // opts={{ align: "start", loop: true, autoplay: true, interval: 5000 }}
//         className="w-full h-full rounded-lg overflow-hidden"
//       >
//         <CarouselContent>
//           <CarouselItem>
//             <img
//               src="https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg"
//               alt="Product 1"
//               width={1920}
//               height={1080}
//               className="object-cover w-full h-full"
//             />
//             <ContentBlock />
//           </CarouselItem>
//           <CarouselItem>
//             <img
//               src="https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg"
//               alt="Product 2"
//               width={1920}
//               height={1080}
//               className="object-cover w-full h-full"
//             />
//             <ContentBlock />
//           </CarouselItem>
//           <CarouselItem>
//             <img
//               src="https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg"
//               alt="Product 3"
//               width={1920}
//               height={1080}
//               className="object-cover w-full h-full"
//             />
//             <ContentBlock />
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 hover:bg-background/75 focus:outline-none focus:ring-1 focus:ring-ring">
//           <ChevronLeftIcon className="h-5 w-5 text-primary" />
//         </CarouselPrevious>
//         <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 hover:bg-background/75 focus:outline-none focus:ring-1 focus:ring-ring">
//           <ChevronRightIcon className="h-5 w-5 text-primary" />
//         </CarouselNext>
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
//           <div className="h-2 w-2 rounded-full bg-background/50 transition-all hover:bg-background/75 focus:outline-none focus:ring-1 focus:ring-ring data-[active]:bg-primary" />
//           <div className="h-2 w-2 rounded-full bg-background/50 transition-all hover:bg-background/75 focus:outline-none focus:ring-1 focus:ring-ring data-[active]:bg-primary" />
//           <div className="h-2 w-2 rounded-full bg-background/50 transition-all hover:bg-background/75 focus:outline-none focus:ring-1 focus:ring-ring data-[active]:bg-primary" />
//         </div>
//       </Carousel>
//     </section>
//   );
// };

// const ContentBlock: React.FC = () => (
//   <div className="absolute inset-0 flex flex-col justify-center space-y-4 px-4 md:px-6">
//     <div className="space-y-2">
//       <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//         Elevate Your Style with Our Premium Collection
//       </h1>
//       <p className="max-w-[600px] text-muted-foreground md:text-xl">
//         Discover the perfect blend of fashion and quality in our carefully
//         curated selection of products.
//       </p>
//     </div>
//     <div className="flex flex-col gap-2 min-[400px]:flex-row">
//       <Link
//         to="#"
//         className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//       >
//         Shop Now
//       </Link>
//     </div>
//   </div>
// );

// interface ChevronIconProps {
//   className?: string;
// }

// const ChevronLeftIcon: React.FC<ChevronIconProps> = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// );

// const ChevronRightIcon: React.FC<ChevronIconProps> = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m9 18 6-6-6-6" />
//   </svg>
// );

// export default HeroCarousel;

// product-detail page ->

// import React, { useEffect, useState } from "react";
// import { Button } from "./ui/Button";
// import { ProductOrg } from "../lib/types";
// import { SearchProduct } from "../lib/actions/products.actions";
// import Loading from "../loading";
// import { useParams } from "react-router-dom";

// const ProductsDetailPage: React.FC = () => {
//   const { title } = useParams<{ title: string }>();
//   const [product, setProduct] = useState<ProductOrg | null>(null);

//   useEffect(() => {
//     const search = async () => {
//       try {
//         if (title) {
//           const res = await SearchProduct(title);
//           if (res) setProduct(res);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (!product) search();
//   }, [title, product]);

//   if (!product) return <Loading />;

//   return (
//     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-8 px-4 md:px-6 text-zinc-300">
//       <div className="grid gap-4">
//         <div className="grid grid-cols-5 gap-3">
//           <div className="col-span-5 md:col-span-4">
//             <img
//               src={product.thumbnail}
//               alt="Product Image"
//               className="aspect-square object-cover w-full rounded-lg overflow-hidden"
//             />
//           </div>
//           <div className="hidden md:grid gap-3">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 className="border hover:border-primary rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={image}
//                   alt={`Preview thumbnail ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="aspect-square object-cover"
//                 />
//                 <span className="sr-only">View Image {index + 1}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="grid gap-6">
//         <div>
//           <h1 className="text-3xl font-bold text-white">{product.title}</h1>
//           <p className="">{product.description}</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`w-5 h-5 ${
//                   i < Math.round(product.rating)
//                     ? "fill-primary"
//                     : "fill-muted stroke-muted-foreground"
//                 }`}
//               />
//             ))}
//           </div>
//           <div className="text-4xl font-bold">${product.price}</div>
//         </div>
//         <div>
//           <p className="text-sm leading-loose">
//             Introducing the {product.title}, a perfect blend of style and
//             comfort for the modern individual. This product is crafted with
//             high-quality materials, ensuring a soft and breathable fabric that
//             feels gentle against the skin.
//           </p>
//           <p className="text-sm leading-loose">{product.description}</p>
//         </div>
//         <Button size="lg">Add to cart</Button>
//       </div>
//       <div className="col-span-2 grid gap-6 mt-8">
//         <div>
//           <h2 className="text-2xl font-bold">Reviews</h2>
//           <ul>
//             {product.reviews.map((review, index) => (
//               <li key={index} className="mt-4 border-b border-gray-200 pb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon
//                         key={i}
//                         className={`w-4 h-4 ${
//                           i < review.rating
//                             ? "fill-primary"
//                             : "fill-muted stroke-muted-foreground"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-sm">
//                     {review.reviewerName} -{" "}
//                     {new Date(review.date).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <p className="mt-1 text-sm text-zinc-400">{review.comment}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold">Product Information</h2>
//           <ul className="mt-4 text-sm">
//             <li>
//               <strong>Brand:</strong> {product.brand}
//             </li>
//             <li>
//               <strong>Category:</strong> {product.category}
//             </li>
//             <li>
//               <strong>Tags:</strong> {product.tags.join(", ")}
//             </li>
//             <li>
//               <strong>Availability Status:</strong> {product.availabilityStatus}
//             </li>
//             <li>
//               <strong>Stock:</strong> {product.stock}
//             </li>
//             <li>
//               <strong>Warranty Information:</strong>{" "}
//               {product.warrantyInformation}
//             </li>
//             <li>
//               <strong>Shipping Information:</strong>{" "}
//               {product.shippingInformation}
//             </li>
//             <li>
//               <strong>Return Policy:</strong> {product.returnPolicy}
//             </li>
//             <li>
//               <strong>Minimum Order Quantity:</strong>{" "}
//               {product.minimumOrderQuantity}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface StarIconProps extends React.SVGProps<SVGSVGElement> {}

// const StarIcon: React.FC<StarIconProps> = (props) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// };

// export default ProductsDetailPage;
