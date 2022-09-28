import React from 'react';
import Link from 'next/link';
import { ListDataSurahTypes } from '@/types/index.types';

interface ListSurahProps {
  data: Array<ListDataSurahTypes>;
}

const ListSurah: React.FC<ListSurahProps> = ({ data }) => (
  <section>
    <div className="p-5">
      <h3 className="font-extrabold font-inter text-lg">Daftar Surat Qur’an</h3>
      <ul>
        {data.map((surah) => (
          <Link key={surah.nomor} href={`surah/${surah.nomor}`}>
            <li className="px-3 py-1 my-2 border-2 border-fourth rounded-xl bg-third text-black font-inter font-bold cursor-pointer dark:text-secondary hover:scale-105 transition-all duration-200">
              {`${surah.nomor}.`}
              {' '}
              {surah.nama_latin}
              {' '}
              <span className="font-scheherazade">
                (
                {surah.nama}
                )
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </section>
);

export default ListSurah;
