import React from 'react';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import SearchSurah from '@components/organisms/SearchSurah';
import useGlobalStore from '@/stores/storeZustand';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isSearch = useGlobalStore((state) => state.isSearch);
  return (
    <div className="layout">
      <Header />
      {isSearch && <SearchSurah />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
