import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useGlobalStore from '@/stores/storeZustand';

const CollapseNav: React.FC = () => {
  const {
    isCollapse, setIsCollapse,
  } = useGlobalStore((state) => state);

  const handleCollapseNav = () => setIsCollapse(!isCollapse);

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

export default CollapseNav;
