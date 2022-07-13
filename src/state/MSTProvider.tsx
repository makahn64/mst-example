import React, { createContext, FC, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { appState } from './appState';
import { RootState } from './RootState';

export type MSTRootInstance = Instance<typeof RootState>;
export const ApplicationStoreContext = createContext<MSTRootInstance | null>(null);
const { Provider } = ApplicationStoreContext;

type Props = { children?: React.ReactNode }

export const MSTProvider = ({ children }: Props) => (
    <Provider value={appState}>
      {children}
    </Provider>
  );

export const useApplicationState = () => {
  const store = useContext(ApplicationStoreContext);
  if (store===null){
    // this means the MSTProvider is not a parent of the component using this hook and that is very bad
    throw new Error('Store is null in MSTProvider, is it instantiated near the top of the app component hierarchy?')
  }
  return store;
};