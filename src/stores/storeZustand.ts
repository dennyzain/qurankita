/* eslint-disable no-unused-vars */
import create from 'zustand';

interface typesOfStore {
  isSearch: boolean;
  setIsSearch: (val: boolean) => void;
}

const useGlobalStore = create<typesOfStore>()((set) => ({
  isSearch: false,
  setIsSearch: (bool) => set(() => ({ isSearch: bool })),
}));

export default useGlobalStore;
