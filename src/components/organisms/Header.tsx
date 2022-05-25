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

const Header: React.FC = () => {
  useDarkMode();
  const isSearch = useAppSelector((state) => state.global.isSearch);
  const isCollapseNav = useAppSelector((state) => state.global.isCollapseNav);
  const isDark = useAppSelector((state) => state.global.isDark);

  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(themeAction());
  };

  const handleCollapseNav = () => {
    dispatch(collapseAction());
  };

  const handleSearch = () => {
    dispatch(searchAction(!isSearch));
  };
  return (
    <header>
      <nav className="animate px-5 py-3 flex items-center justify-between bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <div className="flex">
          <FontAwesomeIcon icon={faBookOpenReader} className="self-center" />
          <h1 className="font-black font-inter text-lg pl-2">Qur’an Kita</h1>
        </div>
        <div className="flex">
          <button type="button" onClick={handleSearch}>
            <FontAwesomeIcon icon={isSearch ? faXmark : faMagnifyingGlass} />
          </button>
          <button type="button" className="pl-6" onClick={handleTheme}>
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
          </button>
          <button type="button" className="pl-6" onClick={handleCollapseNav}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          {
            isCollapseNav && (
              <div className="w-1/2 fixed top-0 left-1/2 h-screen z-50 flex flex-col px-3 pt-6 border-2 border-l-blue-400 bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary">
                <button type="button" className="self-end mb-5" onClick={handleCollapseNav}>
                  <FontAwesomeIcon icon={faXmark} spin />
                  <p className="font-inter font-semibold text-sm inline-block ml-1">tutup</p>
                </button>
                <button type="button">
                  <p className="text-left font-inter font-semibold text-lg">Daftar Surat</p>
                </button>
                <button type="button">
                  <p className="text-left font-inter font-semibold text-lg">Jadwal Adzan</p>
                </button>
                <button type="button">
                  <p className="text-left font-inter font-semibold text-lg">Doa</p>
                </button>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
