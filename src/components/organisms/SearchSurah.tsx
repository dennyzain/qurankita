import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { DetailDataSurahTypes } from '@/types/index.types';
import useGlobalStore from '@/stores/storeZustand';

const SearchSurah: React.FC = () => {
  const [input, setInput] = useState('');
  const [resultFilter, setResultFilter] = useState<undefined|DetailDataSurahTypes[]>();
  const store = useGlobalStore((state) => state);
  const { isSearch, setIsSearch } = store;

  const searchFetching = useCallback(async () => {
    const { data = null } = await axios.get('https://equran.id/api/surat');
    if (data === null) {
      setResultFilter(undefined);
      return;
    }
    const filter = data.filter((surah: DetailDataSurahTypes) => {
      const surahName = surah.nama_latin.toLowerCase().replace('-', '');
      if (surahName.includes(input.toLowerCase())) return surahName;
    });
    setResultFilter(filter);
  }, [input]);

  const handleInput = async ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setInput(currentTarget.value);
    searchFetching();
  };

  const handleCloseSuggest = () => setIsSearch(!isSearch);

  return (
    <div className="animate relative flex flex-col pt-5 mx-5 lg:mx-32">
      <input
        type="text"
        placeholder="Nama Surat"
        className="border border-black p-1 font-inter font-semibold bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary dark:border-dark-secondary"
        onChange={handleInput}
      />
      <div className="absolute top-full z-50 flex flex-col left-0 right-0 ">
        {resultFilter
          ? resultFilter.map((item: DetailDataSurahTypes) => (
            <Link key={item.nomor} href={`/surah/${item.nomor}`}>
              <button
                type="button"
                className="border font-inter font-medium border-slate-800 p-2 bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary dark:border-dark-secondary"
                onClick={handleCloseSuggest}
              >
                <p className="text-left px-0 lg:px-3">{item.nama_latin}</p>
              </button>
            </Link>
          )) : (
            <div className="h-screen flex items-center justify-center text-center">
              <p className="font-inter font-black text-xl">
                Data sedang error
                <FontAwesomeIcon icon={faSmileWink} bounce />
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default SearchSurah;
