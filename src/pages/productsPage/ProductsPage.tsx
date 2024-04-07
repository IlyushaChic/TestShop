import React, { FC } from 'react';
import { useAppSelector, useUpdateLocalStorageState } from '../../redux/hooks';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './productsPage.module.scss';

const ProductsPage: FC = () => {
  const { shoppingСart } = useAppSelector((state) => state.shoppingСart);

  useUpdateLocalStorageState(shoppingСart)

  return (
    <div className={styles.wrapper}>
      {shoppingСart.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductsPage;
