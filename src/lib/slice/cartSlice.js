"use client";
// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     value: JSON.parse(localStorage.getItem("cart")) || [],
//   },
//   reducers: {
//     addToCart(state, action) {
//       let index = seachIndex(state, action);
//       index < 0
//         ? (state.value = [...state.value, { ...action.payload, soni: 1 }])
//         : state.value;
//       setLocalStorage(state.value);
//     },
//     incrementCartQuantity(state, action) {
//       let index = seachIndex(state, action);
//       state.value = state.value?.map((item, inx) =>
//         index === inx ? { ...item, soni: item.soni + 1 } : item
//       );
//       setLocalStorage(state.value);
//     },
//     decrementCartQuantity(state, action) {
//       let index = seachIndex(state, action);
//       state.value = state.value?.map((item, inx) =>
//         index === inx ? { ...item, soni: item.soni - 1 } : item
//       );
//       setLocalStorage(state.value);
//     },
//     removeItemFromCart(state, action) {
//       state.value = state.value?.filter((el) => el.id !== action.payload.id);
//       setLocalStorage(state.value);
//     },
//   },
// });
// function setLocalStorage(state) {
//   localStorage.setItem("cart", JSON.stringify(state));
// }
// function seachIndex(state, action) {
//   return state.value.findIndex((el) => el.id === action.payload.id);
// }
// export const {
//   addToCart,
//   decrementCartQuantity,
//   incrementCartQuantity,
//   removeItemFromCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;

/////////////////////////////////////

// "use client";
// import { createSlice } from "@reduxjs/toolkit";

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     // initialize(state) {
//     //   state.value = getInitialWishlistState();
//     // },
//     toogleLike(state, action) {
//       state.value = action.payload;
//       // let index = state.value.findIndex((el) => el.id === action.payload.id);
//       // if (index < 0) {
//       //   state.value = [...state.value, action.payload];
//       //   localStorage.setItem("wishes", JSON.stringify(state.value));
//       // } else {
//       //   state.value = state.value.filter((el) => el.id !== action.payload.id);
//       //   localStorage.setItem("wishes", JSON.stringify(state.value));
//       // }
//     },
//   },
// });

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = seachIndex(state, action);
      index < 0
        ? (state.value = [...state.value, { ...action.payload, soni: 1 }])
        : state.value;
      setLocalStorage(state.value);
    },
    incrementCartQuantity(state, action) {
      let index = seachIndex(state, action);
      state.value = state.value?.map((item, inx) =>
        index === inx ? { ...item, soni: item.soni + 1 } : item
      );
      setLocalStorage(state.value);
    },
    decrementCartQuantity(state, action) {
      let index = seachIndex(state, action);
      state.value = state.value?.map((item, inx) =>
        index === inx ? { ...item, soni: item.soni - 1 } : item
      );
      setLocalStorage(state.value);
    },
    removeItemFromCart(state, action) {
      state.value = state.value?.filter((el) => el.id !== action.payload.id);
      setLocalStorage(state.value);
    },
  },
});
function setLocalStorage(state) {
  localStorage.setItem("cart", JSON.stringify(state));
}
function seachIndex(state, action) {
  return state.value.findIndex((el) => el.id === action.payload.id);
}
export const {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

//////////////////

// "use client";
// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     // JSON.parse(localStorage.getItem("cart")) ||
//     value: [],
//   },
//   reducers: {
//     initialize(state) {
//       state.value = getInitialCartState();
//     },
//     addToCart(state, action) {
//       state.value = action.payload;
//       const index = searchIndex(state, action);
//       if (index < 0) {
//         state.value = [...state.value, { ...action.payload, soni: 1 }];
//       }
//       setLocalStorage(state.value);
//     },
//     incrementCartQuantity(state, action) {
//       state.value = action.payload;
//       const index = searchIndex(state, action);
//       state.value = state.value.map((item, inx) =>
//         index === inx ? { ...item, soni: item.soni + 1 } : item
//       );
//       setLocalStorage(state.value);
//     },
//     decrementCartQuantity(state, action) {
//       state.value = action.payload;
//       const index = searchIndex(state, action);
//       state.value = state.value.map((item, inx) =>
//         index === inx ? { ...item, soni: item.soni - 1 } : item
//       );
//       setLocalStorage(state.value);
//     },
//     removeItemFromCart(state, action) {
//       state.value = action.payload;
//       state.value = state.value.filter((el) => el.id !== action.payload.id);
//       setLocalStorage(state.value);
//     },
//   },
// });

// function setLocalStorage(state) {
//   localStorage.setItem("cart", JSON.stringify(state));
// }

// function searchIndex(state, action) {
//   return state.value.findIndex((el) => el.id === action.payload.id);
// }

// export const {
//   addToCart,
//   decrementCartQuantity,
//   incrementCartQuantity,
//   removeItemFromCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;
