/* eslint-disable no-unused-vars */
import create from 'zustand';

interface typesOfStore {
  isDark:boolean;
  isSearch: boolean;
  isCollapse: boolean;
  setIsSearch: (val: boolean) => void;
  setIsCollapse: (val: boolean) => void;
  setIsDark: (val: boolean) => void;
}

const useGlobalStore = create<typesOfStore>()((set) => ({
  isSearch: false,
  isDark: false,
  isCollapse: false,
  setIsSearch: (bool) => set(() => ({ isSearch: bool })),
  setIsCollapse: (bool) => set(() => ({ isCollapse: bool })),
  setIsDark: (bool) => set(() => ({ isDark: bool })),
}));

export default useGlobalStore;
