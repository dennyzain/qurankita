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
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { collapseAction, searchAction, themeAction } from '@/stores/reducer';
import useDarkMode from '@/hooks/useDarkMode';

const CollapseNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCollapseNav = () => dispatch(collapseAction());

  return (
    <div className="animate w-1/2 fixed top-0 left-1/2 h-screen z-50 flex flex-col px-3 pt-6 border-l-2 border-l-[#387c63e3] bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary dark:border-l-[#71ecbfd2] lg:hidden">
      <button type="button" className="self-end mb-5" onClick={handleCollapseNav}>
        <FontAwesomeIcon icon={faXmark} spin />
        <p className="font-inter font-semibold text-sm inline-block ml-1">tutup</p>
      </button>
      <Link href="/">
        <button type="button">
          <p className="text-left font-inter font-semibold text-lg">Daftar Surat</p>
        </button>
      </Link>
      <Link href="/azan">
        <button type="button">
          <p className="text-left font-inter font-semibold text-lg">Jadwal Adzan</p>
        </button>
      </Link>
      <Link href="/pray">
        <button type="button">
          <p className="text-left font-inter font-semibold text-lg">Doa</p>
        </button>
      </Link>
      <Link href="/about">
        <button type="button">
          <p className="text-left font-inter font-semibold text-lg">Tentang</p>
        </button>
      </Link>
    </div>
  );
};

const Header: React.FC = () => {
  useDarkMode();
  const isSearch = useAppSelector((state) => state.global.isSearch);
  const isCollapseNav = useAppSelector((state) => state.global.isCollapseNav);
  const isDark = useAppSelector((state) => state.global.isDark);

  const dispatch = useAppDispatch();

  const handleTheme = () => dispatch(themeAction());
  const handleCollapseNav = () => dispatch(collapseAction());
  const handleSearch = () => dispatch(searchAction(!isSearch));

  return (
    <header>
      <nav className="px-5 py-3 flex items-center justify-between">
        <div className="flex">
          <FontAwesomeIcon icon={faBookOpenReader} className="self-center text-[#387c63e3] dark:text-[#71ecbfd2]" />
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
              <p className="font-inter font-black">
                Daftar Surat
              </p>
            </button>
          </Link>
          <Link href="/azan">
            <button type="button" className="ml-6 hidden hover-item lg:inline-block">
              <p className="font-inter font-black">
                Jadwal Adzan
              </p>
            </button>
          </Link>
          <Link href="/pray">
            <button type="button" className="mx-6 hidden hover-item lg:inline-block">
              <p className="font-inter font-black">
                Doa
              </p>
            </button>
          </Link>
          {isCollapseNav && <CollapseNav />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
