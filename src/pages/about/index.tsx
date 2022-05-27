import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import Layout from '@components/layout';

const About:React.FC = () => {
  const text = 'Belum ada waktu luang (soon)';
  return (
    <Layout>
      <div className="h-screen animate flex items-center justify-center text-center bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <p className="font-inter font-black text-xl">
          {text}
          <FontAwesomeIcon icon={faSmileWink} bounce />
        </p>
      </div>
    </Layout>
  );
};

export default About;
