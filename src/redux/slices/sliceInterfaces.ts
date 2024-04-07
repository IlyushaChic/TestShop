export type ShoppingCartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type ShoppingState = {
  shoppingСart: ShoppingCartItem[];
};

export type BackendGoodsItem = {
  id: number;
  image: string;
  name: string;
  price: number;
};
