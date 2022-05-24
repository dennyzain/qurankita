import {
  faBarsStaggered,
  faBookOpenReader,
  faMagnifyingGlass,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header: React.FC = () => (
  <header>
    <nav className="p-5 flex items-center justify-between">
      <div className="flex">
        <FontAwesomeIcon icon={faBookOpenReader} className="self-center" />
        <h1 className="font-black font-inter text-lg pl-2">Qur’an Kita</h1>
      </div>
      <div className="flex">
        <button type="button">
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

export default Header;
