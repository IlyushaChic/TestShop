import { Button, Card } from 'antd';
import React, { FC } from 'react';
import { useActions } from '../../redux/slices/shoppingСartSlice';
import { ShoppingCartItem } from '../../redux/slices/sliceInterfaces';
import styles from './productItem.module.scss';

interface ProductItemProps {
  product: ShoppingCartItem;
}
const BASEURL = 'https://test-frontend.dev.int.perx.ru';


const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { decreaseQuantity, increaseQuantity, } = useActions()

  return (
    <Card key={product.id + Math.random().toFixed(2)} className={styles.cardWrapper}>
      <img src={BASEURL + product.image} alt={product.name} className={styles.image} />
      <h2>{product.name}</h2>
      <p>Цена: {product.price}</p>
      <div className={styles.navigation}>
        {product.quantity === 0 && (
          <Button onClick={() => increaseQuantity(product.id)}>Добавить в корзину</Button>
        )}
        {product.quantity !== 0 && (
          <>
            <Button onClick={() => increaseQuantity(product.id)}>+</Button>
            <p>Количество: {product.quantity}</p>
            <Button onClick={() => decreaseQuantity(product.id)}>-</Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default ProductItem;
