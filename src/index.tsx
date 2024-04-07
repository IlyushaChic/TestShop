import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = document.getElementById('app-root');

if (!root) {
  throw new Error('app-root not found');
}

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <App dealers={[]} />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
