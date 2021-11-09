import { Content } from '../components/Content';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { heroOne, heroThree, heroTwo } from '../data/HeroData';

interface ContentProps {}

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
}
