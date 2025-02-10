import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initializeStore, StoreType } from '../redux/store';

export function ReduxProvider({ children }: { children: ReactNode }) {
  const createStore = async (): Promise<ReactNode> => {
    const store: StoreType = await initializeStore();

    return <Provider store={store}>{children}</Provider>
  }

  return createStore();
}