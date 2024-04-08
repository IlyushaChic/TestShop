import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from './store';
import { useDispatch } from 'react-redux';
import { ShoppingCartItem } from './slices/sliceInterfaces';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useUpdateLocalStorageState = (data: ShoppingCartItem[]) => {
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('storeState', JSON.stringify(data));
        navigate('/')
    });
}
