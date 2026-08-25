import { MotionConfig } from 'motion/react';
import Loader from './_components/loader/Loader';
import { LoaderProvider } from './_providers/LoaderProvider';
import Header from './_view/home/01_header/Header';
import Main from './_view/home/02_main/Main';
import Footer from './_view/home/03_footer/Footer';

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <LoaderProvider>
        <Header />
        <Main />
        <Footer />
        <Loader />
      </LoaderProvider>
    </MotionConfig>
  );
}
