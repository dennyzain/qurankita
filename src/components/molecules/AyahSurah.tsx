import React from 'react';

interface AyahSurahProps {
  ayah: number;

  arabText: string;
  translation: string;
}

const AyahSurah: React.FC<AyahSurahProps> = ({
  ayah, arabText, translation,
}) => (
  <section>
    <div className="flex flex-col justify-center">
      <h4 className="font-semibold text-lg font-inter mt-4">
        ayat
        {' '}
        {ayah}
      </h4>

      <h3 className="font-bold font-scheherazade text-3xl text-right mb-6 mt-4 leading-[65px]">
        {arabText}
      </h3>
      <p className="font-inter font-medium p-1 bg-[#71ecbfd2] text-black dark:bg-[#387c63e3] dark:text-white">{translation}</p>
    </div>
  </section>
);

export default AyahSurah;
