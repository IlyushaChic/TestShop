import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useGetAllGoodsByDealerIdQuery, useGetAllGoodsQuery } from './services/productsService';
import Navigation from './components/Navigation';
import Header from './components/Header/Header';
import styles from './App.module.scss';

type InitialAppProps = {
  dealers: ('0c4aab30' | '1efa7e46' | '86e64a33')[];
};

export const App = ({ dealers }: InitialAppProps) => {
  dealers.length === 0 ? useGetAllGoodsQuery({}) : useGetAllGoodsByDealerIdQuery(dealers.join(','));
  window.onload = function () {
    window.location.href = "/";
  }
  return (
    <Layout>
      <Header />
      <Layout.Content className={styles.content}>
        <Navigation />
      </Layout.Content>
    </Layout>
  );
};
