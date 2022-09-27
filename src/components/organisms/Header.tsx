import React from 'react';
import {
  faBarsStaggered,
  faBookOpenReader,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useDarkMode from '@/hooks/useDarkMode';
import useGlobalStore from '@/stores/storeZustand';
import CollapseNav from '../atoms/NavbarCollapse';

const Header: React.FC = () => {
  useDarkMode();
  const {
    isSearch, setIsSearch, isCollapse, setIsCollapse, isDark, setIsDark,
  } = useGlobalStore((state) => state);

  const handleTheme = () => setIsDark(!isDark);
  const handleCollapseNav = () => setIsCollapse(!isCollapse);
  const handleSearch = () => setIsSearch(!isSearch);

  return (
    <header>
      <nav className="px-5 py-3 flex items-center justify-between">
        <div className="flex">
          <FontAwesomeIcon
            icon={faBookOpenReader}
            className="self-center text-[#71ecbfd2] dark:text-[#387c63e3]"
          />
          <h1 className="font-black font-inter text-lg pl-2">Qur’an Kita</h1>
        </div>
        <div className="flex">
          <button type="button" className="hover-item" onClick={handleSearch}>
            <FontAwesomeIcon icon={isSearch ? faXmark : faMagnifyingGlass} />
          </button>
          <button type="button" className="ml-6 hover-item" onClick={handleTheme}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
          <button type="button" className="ml-6 lg:hidden" onClick={handleCollapseNav}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          <Link href="/">
            <button type="button" className="ml-6 hidden hover-item lg:inline-block">
              <p className="font-inter font-black">Daftar Surat</p>
            </button>
          </Link>
          <Link href="/azan">
            <button type="button" className="ml-6 hidden hover-item lg:inline-block">
              <p className="font-inter font-black">Jadwal Adzan</p>
            </button>
          </Link>
          <Link href="/pray">
            <button type="button" className="mx-6 hidden hover-item lg:inline-block">
              <p className="font-inter font-black">Doa</p>
            </button>
          </Link>
          {isCollapse && <CollapseNav />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
