import React from 'react';

const AyahSurah: React.FC = ({ ayahNum, audio, arabText, translation }) => {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold text-lg font-inter mt-4">ayat 1</h4>
        <div className="self-center my-2">
          <audio controls src="https://cdn.islamic.network/quran/audio/64/ar.alafasy/1.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <h3 className="font-bold font-scheherazade text-3xl text-right mb-6 mt-4 leading-[65px]">
          سْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h3>
        <p className="font-inter">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
      </div>
    </section>
  );
};

export default AyahSurah;
