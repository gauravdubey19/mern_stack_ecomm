export interface ProductDemo {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductOrg {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
}

export interface ProductResponse {
  products: ProductOrg[];
}

// ProductDetail ->
export interface ProductImagesProps {
  product: {
    thumbnail: string;
    images: string[];
  };
}
export interface ProductDetailsProps {
  product: {
    id: number;
    title: string;
    description: string;
    thumbnail?: string;
    rating: number;
    price: number;
    category: string;
    minimumOrderQuantity: number;
  };
}
export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}
export interface ProductReviewsProps {
  reviews: ProductReview[];
}
export interface ProductInformationProps {
  product: {
    brand: string;
    category: string;
    tags: string[];
    availabilityStatus: string;
    stock: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
  };
}

// Cart types for the state and payloads
export interface CartItem {
  category: string;
  description: string;
  _id: number;
  title: string;
  image: string | undefined;
  price: number;
  minimumOrderQuantity: number;
  qty: number;
  toast?: boolean;
}

export interface CartState {
  items: CartItem[];
}
