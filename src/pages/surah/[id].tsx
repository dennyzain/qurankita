import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '@/components/layout';
import DetailSurah, { DetailSurahProps } from '@components/organisms/DetailSurah';

const DetailSurahPage: NextPage<{ data: DetailSurahProps }> = ({ data }) => {
  return (
    <Layout>
      <DetailSurah data={data} />
    </Layout>
  );
};

export default DetailSurahPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah');
  const data = await res.json();
  return {
    paths: data.data.map((item: DetailSurahProps) => {
      return { params: { id: `${item.number}` } };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idSurah = params ? params.id : null;
  const res = await fetch(`https://api.quran.sutanlab.id/surah/${idSurah}`);
  const data = await res.json();
  return {
    props: { data: data.data },
  };
};
