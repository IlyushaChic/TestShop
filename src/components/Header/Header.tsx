import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import styles from './header.module.scss';

const Header = () => {
  const cartItems = useAppSelector((state) => state.shoppingСart.shoppingСart);
  const [cardsCount, setCardsCount] = useState(0);

  useEffect(() => {
    const count = cartItems.filter((item) => item.quantity > 0).length;
    setCardsCount(count);
  }, [cartItems]);

  return (
    <Layout.Header className={styles.header}>
      <Menu theme="light" mode="horizontal" className={styles.menuWrapper}>
        <Menu.Item key="1">
          <Link to="/">Список товаров</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart">
            Корзина
            <Badge color="blue" count={cardsCount} offset={[11, 7]}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
