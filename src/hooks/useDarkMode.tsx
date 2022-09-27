import { useEffect } from 'react';
import useGlobalStore from '@/stores/storeZustand';

const useDarkMode = () => {
  const { isDark } = useGlobalStore((state) => state);

  useEffect(() => {
    if (isDark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // checking theme key in local storage
    if (!localStorage.theme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);
};

export default useDarkMode;
