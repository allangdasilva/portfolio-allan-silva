import React from 'react';
import Header from './_view/home/01_header/Header';
import Main from './_view/home/02_main/Main';
import Footer from './_view/home/03_footer/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
