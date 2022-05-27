import React from 'react';
import Layout from '@/components/layout';

const Pray:React.FC = () => {
  const text = 'Nanti kalo ada waktu luang (Soon) :)';
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center text-center bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <p className="font-inter font-black text-xl">{text}</p>
      </div>
    </Layout>
  );
};

export default Pray;
