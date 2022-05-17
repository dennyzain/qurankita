import { GetStaticProps, NextPage } from 'next';
import Layout from '@components/layout';
import ListSurah from '@components/organisms/ListSurah';
import { DetailSurahProps } from '@components/organisms/DetailSurah';

const Home: NextPage<{ data:Array<DetailSurahProps> }> = ({ data }) => (
  <Layout>
    <ListSurah data={data} />
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah');
  const data = await res.json();
  return {
    props: { data: data.data },
  };
};
