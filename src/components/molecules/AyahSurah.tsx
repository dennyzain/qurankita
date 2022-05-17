import React from 'react';

interface AyahSurahProps {
  ayah: number;
  audio: string;
  arabText: string;
  translation: string;
}

const AyahSurah: React.FC<AyahSurahProps> = ({ ayah, audio, arabText, translation }) => {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold text-lg font-inter mt-4">ayat {ayah}</h4>
        <div className="self-center my-2">
          <audio controls src={audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <h3 className="font-bold font-scheherazade text-3xl text-right mb-6 mt-4 leading-[65px]">
          {arabText}
        </h3>
        <p className="font-inter font-medium p-1 bg-blue-300">{translation}</p>
      </div>
    </section>
  );
};

export default AyahSurah;
