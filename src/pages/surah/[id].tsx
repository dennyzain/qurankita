import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DetailSurah from '@components/organisms/DetailSurah';
import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';

const DetailSurahPage: NextPage = ({ data }) => {
  return (
    <>
      <Header />
      <DetailSurah data={data} />
      <Footer />
    </>
  );
};

export default DetailSurahPage;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetch('https://api.quran.sutanlab.id/surah/1');
  const data = await res.json();
  console.log(context);
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah/1');
  const data = await res.json();
  return {
    props: { data: data.data },
  };
};
