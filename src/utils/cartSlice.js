import { createSlice } from '@reduxjs/toolkit';


const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const initialCartItems = JSON.parse(localStorage.getItem('Shoppingcart')) || [];
const initialTotalAmount = calculateTotalAmount(initialCartItems);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: initialCartItems,
    totalAmount: initialTotalAmount,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('Shoppingcart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('Shoppingcart', JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('Shoppingcart', JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('Shoppingcart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      localStorage.setItem('Shoppingcart', JSON.stringify(state.items));
    },
  },
});



export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;