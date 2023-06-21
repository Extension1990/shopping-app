import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    user: null,
    token: undefined,
    user_loading: false, // `user` info is being processed [e.g Login]
    token_loading: false, // when `token` info is being processed [e.g refreshing auth]
    reducers: {
        addAuthToken(state, action) {
          const { payload } = action;
          return {
            ...state,
            token: payload?.token,
          };
        },
        
        addAuthUser(state, action) {
          const { payload } = action;
          return {
            ...state,
            user: { ...state.user, ...payload.user },
          };
        },

        authUserLoading(state, action) {
          const { payload } = action;
          return {
            ...state,
            user_loading: Boolean(payload?.loading),
          };
        },

        authUserLogout() {
          return {
            ...initialState,
          };
        },

        authTokenLoading(state, action) {
          const { payload } = action;
          return {
            ...state,
            token_loading: Boolean(payload?.loading),
          };
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;