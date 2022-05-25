import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DetailSurah, { DetailSurahProps } from '@components/organisms/DetailSurah';
import Layout from '@components/layout';

const DetailSurahPage: NextPage<{ data: DetailSurahProps }> = ({ data }) => (
  <Layout>
    <DetailSurah data={data} />
  </Layout>
);

export default DetailSurahPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah');
  const data = await res.json();
  return {
    paths: data.data.map((item: DetailSurahProps) => ({ params: { id: `${item.number}` } })),
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
