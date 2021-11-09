import { Link as LinkR } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../styles/globalStyles';
import {
  ButtonWrapper,
  HeroButton,
  HeroSection,
  HeroText,
  HeroVideo,
} from './HeroStyles';

export function Hero() {
  return (
    <HeroSection>
      <HeroVideo
        src='./assets/videos/hero.mp4'
        autoPlay
        playsInline
        loop
        muted
      ></HeroVideo>
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <LinkR to='/'>
            <Button>Get Started</Button>
          </LinkR>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}
