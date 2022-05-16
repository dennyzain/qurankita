import { GetStaticProps, NextPage } from 'next';
import DetailSurah from '@components/organisms/DetailSurah';
import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';

const Home: NextPage = ({ data }) => {
  return (
    <>
      <Header />
      <DetailSurah data={data} />
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.quran.sutanlab.id/surah/1');
  const data = await res.json();
  return {
    props: { data: data.data },
  };
};
