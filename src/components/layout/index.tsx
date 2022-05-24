import React from 'react';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import SearchSurah from '@components/organisms/SearchSurah';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <SearchSurah />
    {children}
    <Footer />
  </>
);

export default Layout;
