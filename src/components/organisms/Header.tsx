import React from 'react';
import {
  faBarsStaggered,
  faBookOpenReader,
  faMagnifyingGlass,
  faMoon,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { collapseAction, searchAction } from '@/stores/reducer';

const Header: React.FC = () => {
  const isSearch = useAppSelector((state) => state.global.isSearch);
  const isCollapseNav = useAppSelector((state) => state.global.isCollapseNav);
  const dispatch = useAppDispatch();

  const handleCollapseNav = () => {
    dispatch(collapseAction());
  };

  const handleSearch = () => {
    dispatch(searchAction(!isSearch));
  };
  return (
    <header>
      <nav className="p-5 flex items-center justify-between">
        <div className="flex">
          <FontAwesomeIcon icon={faBookOpenReader} className="self-center" />
          <h1 className="font-black font-inter text-lg pl-2">Qur’an Kita</h1>
        </div>
        <div className="flex">
          <button type="button" onClick={handleSearch}>
            <FontAwesomeIcon icon={isSearch ? faXmark : faMagnifyingGlass} />
          </button>
          <button type="button" className="pl-6">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button type="button" className="pl-6" onClick={handleCollapseNav}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          {
            isCollapseNav && (
              <div className="w-1/2 fixed top-0 left-1/2 h-screen z-50 flex flex-col px-3 pt-6 border-2 border-l-blue-400">
                <button type="button" className="self-end mb-5" onClick={handleCollapseNav}>
                  <FontAwesomeIcon icon={faXmark} spin />
                  <p className="font-inter font-semibold text-sm inline-block ml-1">Tutup</p>
                </button>
                <button type="button">
                  <p className="text-left font-inter font-semibold text-lg">List Surah</p>
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
