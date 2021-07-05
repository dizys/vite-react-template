import {createContext, useContext} from 'react';
import {Entrances} from '../entrances';

export const EntrancesContext = createContext<Entrances>(undefined!);

export function useEntrances(): Entrances {
  return useContext(EntrancesContext);
}
