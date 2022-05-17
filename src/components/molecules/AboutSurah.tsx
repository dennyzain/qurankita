import React from 'react';

interface AboutSurahProps {
  title: string;
  tafsir: string;
}

const AboutSurah: React.FC<AboutSurahProps> = ({ title, tafsir }) => (
  <section>
    <div>
      <h1 className="font-extrabold text-2xl mb-2 font-inter">{title}</h1>
      <p className="font-inter">{tafsir}</p>
    </div>
  </section>
);

export default AboutSurah;
