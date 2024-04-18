import { combineReducers, createStore } from 'redux';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';

import persistedAllUsersData from './reducers/persistedAllUsersData';
import persistedUserData from './reducers/persistedUserData';

const root_reducer = combineReducers({
	persistedUserData,
	persistedAllUsersData,
});

const persistConfig = {
	key: 'root_chess',
	version: 1,
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
};

export type RootReducer = ReturnType<typeof root_reducer>;

const persisted_reducer = persistReducer<RootReducer, any>(persistConfig, root_reducer);

export const store = createStore(persisted_reducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
