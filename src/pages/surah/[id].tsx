import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import Layout from '@components/layout';
import { DetailDataSurahTypes } from '@/types/index.types';
import DetailSurah from '@/components/organisms/DetailSurah';

interface DetailSurahProps{
  data:Array<DetailDataSurahTypes>
}
const DetailSurahPage: NextPage<DetailSurahProps> = ({ data }) => (
  <Layout>
    <DetailSurah data={data} />
  </Layout>
);

export default DetailSurahPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get('https://equran.id/api/surat');
  return {
    paths: data.map((item: DetailDataSurahTypes) => ({ params: { id: `${item.nomor}` } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idSurah = params ? params.id : null;
  const { data } = await axios.get(`https://equran.id/api/surat/${idSurah}`);
  return {
    props: { data },
  };
};
