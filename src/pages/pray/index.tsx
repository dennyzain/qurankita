import React from 'react';
import Layout from '@components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Pray:React.FC = () => {
  const text = 'Belum ada waktu luang (soon)';
  return (
    <Layout>
      <div className="h-screen animate flex items-center justify-center text-center bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <p className="font-inter font-black text-xl whitespace-pre-wrap">
          {text}
          <FontAwesomeIcon icon={faSmileWink} bounce />
        </p>
      </div>
    </Layout>
  );
};

export default Pray;
