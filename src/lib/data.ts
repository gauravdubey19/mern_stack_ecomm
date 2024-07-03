import { ProductDemo } from "./types";

export const products: ProductDemo[] = [
  {
    id: 1,
    name: "Cozy Knit Sweater",
    description: "Soft and warm knit sweater",
    price: 59.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Sleek Leather Backpack",
    description: "Durable and stylish backpack",
    price: 99.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    description: "Comfortable and supportive office chair",
    price: 199.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Furniture",
  },
  {
    id: 4,
    name: "Wireless Noise-Cancelling Headphones",
    description: "High-quality audio experience",
    price: 149.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Rustic Wood Dining Table",
    description: "Elegant and durable dining table",
    price: 399.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Furniture",
  },
  {
    id: 6,
    name: "Stylish Leather Wallet",
    description: "Sleek and functional wallet",
    price: 29.99,
    image:
      "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    category: "Accessories",
  },
];

export const links = [
  {
    id: 0,
    label: "orders",
    url: "/#orders",
  },
  {
    id: 1,
    label: "about",
    url: "/about",
  },
];

export const footerLinks = [
  {
    id: 0,
    head: "Company",
    links: [
      { id: 0, title: "About Us", url: "#" },
      { id: 1, title: "Our Team", url: "#" },
      { id: 2, title: "Carrers", url: "#" },
      { id: 3, title: "News", url: "#" },
    ],
  },
  {
    id: 1,
    head: "Products",
    links: [
      { id: 0, title: "Clothing", url: "#" },
      { id: 1, title: "Accessories", url: "#" },
      { id: 2, title: "Furniture", url: "#" },
      { id: 3, title: "Electronics", url: "#" },
    ],
  },
  {
    id: 2,
    head: "Resources",
    links: [
      { id: 0, title: "Blog", url: "#" },
      { id: 1, title: "Help Center", url: "#" },
      { id: 2, title: "FAQs", url: "#" },
      { id: 3, title: "Community", url: "#" },
    ],
  },
  {
    id: 3,
    head: "Legal",
    links: [
      { id: 0, title: "Privacy Policy", url: "#" },
      { id: 1, title: "Terms of Service", url: "#" },
      { id: 2, title: "Cookie Policy", url: "#" },
    ],
  },
  {
    id: 5,
    head: "Contact",
    links: [
      { id: 0, title: "Support", url: "#" },
      { id: 1, title: "Support", url: "#" },
      { id: 2, title: "Press", url: "#" },
      { id: 3, title: "Partnerships", url: "#" },
    ],
  },
];
