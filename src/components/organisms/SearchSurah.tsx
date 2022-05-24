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

  return (
    <div className="flex justify-center relative">
      <input
        type="text"
        placeholder="Nama Surat"
        className="border border-black p-1 font-inter font-semibold"
        onChange={handleInput}
      />
      <div className="absolute">
        {resultFilter && resultFilter.map((item:DetailSurahProps) => (
          <Link href={`surah/${item.number}`}>
            <button type="button" className="p-2 block w-full">
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
