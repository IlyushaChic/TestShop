import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ShoppingState, BackendGoodsItem, ShoppingCartItem } from './sliceInterfaces';
import { productsApi } from '../../services/products';
import { convertToShoppingCartItem } from '../../pages/productsPage/helpers';
import { useAppDispatch } from '../hooks';

const initialState: ShoppingState = {
  shoppingСart: []
};

export const shoppingСartSlice = createSlice({
  name: 'shoppingСart',
  initialState,
  reducers: {
    deleteItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingСart.findIndex((item) => item.id === action.payload);
      state.shoppingСart[itemIndex].quantity = 0;
    },
    removeAll: (state, action) => {
      state.shoppingСart.forEach((item) => (item.quantity = 0));
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingСart.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1 && state.shoppingСart[itemIndex].quantity > 0) {
        state.shoppingСart[itemIndex].quantity -= 1;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingСart.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.shoppingСart[itemIndex].quantity += 1;
      }
    },
    loadDataToStore: (state, action: PayloadAction<ShoppingCartItem[]>) => {
      state.shoppingСart = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(productsApi.endpoints.getAllGoodsByDealerId.matchFulfilled, (state, action) => {
        state.shoppingСart = action.payload;
      })
      .addMatcher(productsApi.endpoints.getAllGoods.matchFulfilled, (state, action) => {
        const shoppingCarts: ShoppingCartItem[] = JSON.parse(localStorage.getItem('storeState'))
        if (shoppingCarts.length > 0) {
          state.shoppingСart = shoppingCarts;
        } else {
          state.shoppingСart = action.payload.map((element: BackendGoodsItem) =>
            convertToShoppingCartItem(element)
          );
        }
      });
  }
});

export default shoppingСartSlice.reducer;

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(shoppingСartSlice.actions, dispatch)
}
