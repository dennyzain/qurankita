import { GetStaticProps, NextPage } from 'next';
import Layout from '@components/layout';
import ListSurah from '@components/organisms/ListSurah';
import { DetailSurahProps } from '@components/organisms/DetailSurah';

const Home: NextPage<{ data: DetailSurahProps }> = ({ data }) => (
  <Layout>
    <ListSurah />
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah/1');
  const data = await res.json();
  return {
    props: { data: data.data },
  };
};
