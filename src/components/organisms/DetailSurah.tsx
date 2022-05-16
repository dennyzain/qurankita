import React from 'react';
import AboutSurah from '@components/molecules/AboutSurah';
import AyahSurah from '@components/molecules/AyahSurah';

interface DetailSurahProps {
  number: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      id: string;
      en: string;
    };
    translation: {
      id: string;
      en: string;
    };
  };
  revelation: { arab: string; en: string; id: string };
  tafsir: { id: string };
  verses: [
    {
      number: {
        inQuran: number;
        inSurah: number;
      };
      meta: {
        juz: number;
        page: number;
        manzil: number;
        ruku: number;
        hizbQuarter: number;
        sajda: {
          recommended: boolean;
          obligatory: boolean;
        };
      };
      text: {
        arab: string;
        transliteration: {
          en: string;
        };
      };
      translation: {
        en: string;
        id: string;
      };
      audio: {
        primary: string;
        secondary: [string, string];
      };
      tafsir: {
        id: {
          short: string;
          long: string;
        };
      };
    }
  ];
}

const DetailSurah: React.FC<{ data: DetailSurahProps }> = ({ data }) => {
  console.log(data);
  return (
    <div className="p-5">
      <AboutSurah title={data.name.transliteration.id} tafsir={data.tafsir.id} />
      {data.verses.map((item) => (
        <AyahSurah
          key={item.number.inSurah}
          arabText={item.text.arab}
          audio={item.audio.primary}
          ayah={item.number.inSurah}
          translation={item.translation.id}
        />
      ))}
    </div>
  );
};

export default DetailSurah;
