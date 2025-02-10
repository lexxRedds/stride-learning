'use client';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './api';
import { IAuthState } from '@components/interfaces/auth';
import authReducer from './features/authSlice';
import { loadPersistedAuth } from '../lib/statePersistence';

export const initializeStore = async (): Promise<EnhancedStore> => {
  let persistedAuth: IAuthState | null = {
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    picture: null,
  };

  if (typeof window !== 'undefined') {
    persistedAuth = await loadPersistedAuth() ?? persistedAuth;
  }

  const preloadedState = {
    auth: persistedAuth,
  };

  const store = configureStore({
    // Add RTK Query reducer
    reducer: {
      auth: authReducer,
      [api.reducerPath]: api.reducer,
    },

    // Add RTK Query middleware to the store
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
  //For refetchOnFocus/refetchOnReconnect behaviors
  //setupListeners(store.dispatch);A ver, el
  
  return store;
};

export type StoreType = EnhancedStore;
export type RootState = EnhancedStore['getState'];;
export type AppDispatch = EnhancedStore['dispatch'];