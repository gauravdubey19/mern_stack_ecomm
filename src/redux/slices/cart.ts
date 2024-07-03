import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";
import { CartItem, CartState } from "@/lib/types";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    hydrate: (_state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
    // Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (index >= 0) {
        const newCart = [...state.items];
        newCart[index] = {
          ...newCart[index],
          qty: newCart[index].qty + 1,
        };
        state.items = newCart;
      } else {
        const item = { ...action.payload };
        delete item.toast;
        state.items = [...state.items, item];
      }
      // Toast to indicate item added to cart
      if (action.payload.toast) {
        toast({
          title: "Added to Cart",
          description: action.payload.title,
          imgSrc: action.payload.image,
          buttonText: "Checkout",
          redirectTo: "/cart",
        });
      }
    },
    // Update the quantity of item in cart
    updateQty: (
      state,
      action: PayloadAction<{
        _id: number;
        qty: number;
        title: string;
        toast: boolean;
      }>
    ) => {
      const newCart = [...state.items];
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (index >= 0) {
        if (action.payload.qty >= 1) {
          newCart[index] = { ...newCart[index], qty: action.payload.qty };
          state.items = newCart;
        } else {
          newCart.splice(index, 1);
          state.items = newCart;
        }
        if (action.payload.toast) {
          toast({
            variant: "destructive",
            title: "Maximum Quantity Order limit reached!",
            description: `${action.payload?.title} - can't add more quantity.`,
          });
        }
      } else {
        console.warn("Product not present in the cart!");
      }
    },
    // Remove an item from cart
    removeFromCart: (state, action: PayloadAction<{ _id: number }>) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      const newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
        state.items = newCart;
      } else {
        console.warn(
          `Can't remove product (_id:${action.payload._id}) as it's not in the cart`
        );
      }
    },
    // Empty the cart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, hydrate, emptyCart } =
  cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: { cart: CartState }) => state.cart.items;
export const selectTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.price * item.qty, 0);

export default cartSlice.reducer;
