

import { createSlice } from "@reduxjs/toolkit";


const cartUiSlice = createSlice({
  name: 'cartUiSlice',
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice
export default cartUiSlice