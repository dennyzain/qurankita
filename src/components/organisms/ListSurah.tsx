import React from 'react';
import Link from 'next/link';
import { DetailSurahProps } from '@components/organisms/DetailSurah';

const ListSurah: React.FC<{data:Array<DetailSurahProps>}> = ({ data }) => (
  <section>
    <div className="p-5">
      <h3 className="font-bold font-inter text-lg">Daftar Surat Qur’an</h3>
      <ul>
        {data.map((surah) => (
          <Link key={surah.number} href={`surah/${surah.number}`}>
            <li className="p-1 my-2 border border-black bg-[#71ecbfd2] text-black font-inter font-medium cursor-pointer dark:bg-[#387c63e3] dark:text-white">
              {`${surah.number}.`}
              {' '}
              {surah.name.transliteration.id}
              {' '}
              {`(${surah.name.translation.id})`}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </section>
);

export default ListSurah;
