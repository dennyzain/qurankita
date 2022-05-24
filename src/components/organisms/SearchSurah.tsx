import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { DetailSurahProps } from '@components/organisms/DetailSurah';

const SearchSurah: React.FC = () => {
  const [input, setInput] = useState('');
  const [resultFilter, setResultFilter] = useState([]);

  const searchFetching = useCallback(async () => {
    const res = await fetch('https://api.quran.sutanlab.id/surah');
    const resParse = await res.json();
    const { data } = resParse;
    const filter = data.filter((surah: DetailSurahProps) => {
      const surahName = surah.name.transliteration.id.toLowerCase().replace('-', '');
      if (surahName.includes(input.toLowerCase())) return surahName;
    });
    setResultFilter(filter);
  }, [input]);

  const handleInput = async ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setInput(currentTarget.value);
    searchFetching();
  };

  const handleCloseSuggest = () => {
    console.log('clg');
  };

  return (
    <div className="relative flex flex-col mx-5">
      <input
        type="text"
        placeholder="Nama Surat"
        className="border border-black p-1 font-inter font-semibold"
        onChange={handleInput}
      />
      <div className="absolute top-full z-50 flex flex-col left-0 right-0">
        {resultFilter && resultFilter.map((item:DetailSurahProps) => (
          <Link href={`/surah/${item.number}`}>
            <button key={item.number} type="button" className="border border-slate-800 p-2 hover:bg-blue-300" onClick={handleCloseSuggest}>
              <p>
                {item.name.transliteration.id}
              </p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchSurah;
