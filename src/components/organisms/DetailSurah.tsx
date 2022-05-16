import React from 'react';
import AboutSurah from '@components/molecules/AboutSurah';
import AyahSurah from '@components/molecules/AyahSurah';

const DetailSurah = () => {
  return (
    <main className="p-5">
      <AboutSurah />
      <AyahSurah />
    </main>
  );
};

export default DetailSurah;
