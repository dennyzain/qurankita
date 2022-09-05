import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import Layout from '@components/layout';
import ListSurah from '@components/organisms/ListSurah';
import { ListDataSurahTypes } from '@/types/index.types';

interface ListSurahProps{
  data:Array<ListDataSurahTypes>
}

const Home: NextPage<ListSurahProps> = ({ data }) => (
  <Layout>
    <ListSurah data={data} />
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://equran.id/api/surat');
  return {
    props: { data },
  };
};
