import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <div className="px-5 py-3 text-sm text-left">
      <h1 className="font-inter font-extrabold">Tentang</h1>
      <p className="font-inter font-medium">
        Website ini dibuat untuk mempermudah mendapatkan informasi mengenai surat-surat Al-quran,
        Jadwal Adzan dan Doa-doa.
        <br />
        Terimakasih untuk penyedia data :
      </p>
      <p className="font-inter font-semibold block">
        <a href="https://github.com/gadingnst" target="_blank" rel="noreferrer" className="underline text-[#387c63e3] dark:text-[#71ecbfd5]">Sutan Gading</a>
        {' '}
        : Quran data
      </p>
      <p className="font-inter font-semibold block">
        <a href="https://github.com/lakuapik" target="_blank" rel="noreferrer" className="underline text-[#387c63e3] dark:text-[#71ecbfd5]">David Adi Nugroho</a>
        {' '}
        : Jadwal Adzan
      </p>
      <p className="text-center font-inter font-semibold pt-4 lg:text-xs">
        made with &hearts; by Denny Abbas Zain
      </p>
    </div>
  </footer>
);

export default Footer;
