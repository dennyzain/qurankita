import {
  faBarsStaggered,
  faBookOpenReader,
  faMagnifyingGlass,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { searchAction } from '@/stores/reducer';

const Header: React.FC = () => {
  const isSearch = useAppSelector((state) => state.global.isSearch);
  const dispatch = useAppDispatch();
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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button type="button" className="pl-6">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button type="button" className="pl-6">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
