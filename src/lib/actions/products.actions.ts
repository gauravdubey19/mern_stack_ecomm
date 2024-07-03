"use server";

import { ProductResponse } from "../types";
// import { getAuth } from "@clerk/reactjs/server";

// export async function handler() {
//   const { userId } = getAuth(req);

//   // Add logic that retrieves the data for the API route

//   return res.status(200).json({ userId: userId });
// }

export const fetchProducts = async (limit: number) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=10`,
      {
        method: "GET" /* or POST/PUT/PATCH/DELETE */,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: ProductResponse = await res.json();
    if (data && data.products) return data.products;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
      {
        method: "GET" /* or POST/PUT/PATCH/DELETE */,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: ProductResponse = await res.json();
    if (data && data.products) return data.products;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryList = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list", {
      method: "GET" /* or POST/PUT/PATCH/DELETE */,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: [] = await res.json();
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export const SearchProduct = async (title: string) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${title}`,
      {
        method: "GET" /* or POST/PUT/PATCH/DELETE */,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data.products[0]);

    if (data && data.products) return data.products;
  } catch (error) {
    console.log(error);
  }
};
