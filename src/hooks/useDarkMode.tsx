import { useEffect } from 'react';
import { useAppSelector } from '@/stores/hooks';

const useDarkMode = () => {
  const isDark = useAppSelector((state) => state.global.isDark);

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
      console.log('masuk sini');
    }
  }, []);
};

export default useDarkMode;
