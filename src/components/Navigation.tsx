import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage, ProductsPage } from '../pages';

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Подождите, товары подгружаются</h1>}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h1>Подождите, товары подгружаются</h1>}>
              <CartPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Navigation;
