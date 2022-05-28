import React from 'react';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import SearchSurah from '@components/organisms/SearchSurah';
import { useAppSelector } from '@/stores/hooks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isSearch = useAppSelector((state) => state.global.isSearch);
  return (
    <div className="layout">
      <Header />
      { isSearch && <SearchSurah />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
