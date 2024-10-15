// pages/about.tsx
import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import styles from '../page.module.css';


const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>About Let'er Buck Car Wash</h1>
          <p>Welcome To Let'er buck country!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;