import AboutMe from './about-me/AboutMe';
import Banner from './banner/Banner';
import Hero from './hero/Hero';
import Portfolio from './portfolio/Portfolio';
import Technologies from './technologies/Technologies';

export default function Main() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Technologies />
      <Banner />
    </main>
  );
}
