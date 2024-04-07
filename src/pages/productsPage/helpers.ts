import { BackendGoodsItem, ShoppingCartItem } from '../../redux/slices/sliceInterfaces';

export function convertToShoppingCartItem(item: BackendGoodsItem): ShoppingCartItem {
  return {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    quantity: 0
  };
}
