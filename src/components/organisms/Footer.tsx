import React from 'react';

const Footer: React.FC = () => {
  const providerApi = [
    { name: 'EQuran.id', link: 'https://equran.id/apidev', context: 'Quran Data' },
    { name: 'David Adi Nugroho', link: 'https://github.com/lakuapik', context: 'Adzan Data' },
  ];
  return (
    <footer>
      <div className="px-5 py-3 text-sm text-left">
        <h1 className="font-inter font-extrabold">Tentang</h1>
        <p className="font-inter font-medium">
          Website ini dibuat untuk mempermudah mendapatkan informasi mengenai surat-surat Al-quran,
          Jadwal Adzan dan Doa-doa.
          <br />
          Terimakasih untuk penyedia data :
        </p>
        {providerApi.map((item) => (
          <p key={item.name} className="font-inter font-semibold block underline text-third m-1 p-1 rounded-lg">
            <a href={item.link} target="_blank" rel="noreferrer" className="underline text-third">{item.name}</a>
            {' '}
            :
            {' '}
            {item.context}
          </p>
        ))}
        <p className="text-center font-inter font-semibold pt-4 lg:text-xs">
          made with &hearts; by Denny Abbas Zain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
