import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (options: StoreProviderProps) => {
  const { children, initialState } = options;

  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
