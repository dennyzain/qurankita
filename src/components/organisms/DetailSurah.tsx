import React from 'react';
import AboutSurah from '@components/molecules/AboutSurah';
import AyahSurah from '@components/molecules/AyahSurah';
import { DetailDataSurahTypes } from '@/types/index.types';

interface DetailSurahProps {
  data: DetailDataSurahTypes;
}

const DetailSurah: React.FC<DetailSurahProps> = ({ data }) => {
  const {
    ayat, deskripsi, nama_latin: namaLatin,
  } = data;

  return (
    <div className="p-5">
      <AboutSurah title={namaLatin} tafsir={deskripsi} />
      {ayat.map((item) => (
        <AyahSurah key={item.id} arabText={item.ar} ayah={item.nomor} translation={item.idn} />
      ))}
    </div>
  );
};

export default DetailSurah;
