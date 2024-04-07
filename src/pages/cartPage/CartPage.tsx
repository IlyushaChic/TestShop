import React, { useEffect, useState } from 'react';
import { List, Button } from 'antd';
import { useAppSelector, useUpdateLocalStorageState } from '../../redux/hooks';
import { useActions } from '../../redux/slices/shoppingСartSlice';
import styles from './cartPage.module.scss';


const CartPage = () => {
  const { shoppingСart } = useAppSelector((state) => state.shoppingСart);
  const [cartItems, setCartItems] = useState(shoppingСart);
  const [isremoveAllBtnVisible, setIsremoveAllBtnVisible] = useState(false);
  const { deleteItem, decreaseQuantity, increaseQuantity, removeAll } = useActions()

  useEffect(() => {
    const isEmpty = shoppingСart.some((element) => element.quantity !== 0)
    setIsremoveAllBtnVisible(isEmpty)
    setCartItems(shoppingСart);
  }, [shoppingСart]);

  useUpdateLocalStorageState(shoppingСart)
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => {
          return (
            item.quantity > 0 && (
              <List.Item
                actions={[
                  <Button onClick={() => decreaseQuantity(item.id)}>-</Button>,
                  <span>{item.quantity}</span>,
                  <Button onClick={() => increaseQuantity(item.id)}>+</Button>,
                  <Button onClick={() => deleteItem(item.id)}>Удалить</Button>
                ]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={`Цена: ${item.price} | Количество: ${item.quantity} | Итого:${item.price * item.quantity}`}
                />
              </List.Item>
            )
          );
        }}
      />
      {isremoveAllBtnVisible ? (
        <div className={styles.footer}>
          <Button onClick={() => removeAll(cartItems)}>Удалить все</Button>
          <h3>
            Общая стоимость всех товаров:{' '}
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
        </div>
      ) : (
        <div className={styles.emptyState}>Корзина пустая, выберите товары для покупки</div>
      )}
    </>
  );
};

export default CartPage;
