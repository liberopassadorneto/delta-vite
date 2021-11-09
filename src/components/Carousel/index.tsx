import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { carouselData, sliderSettings } from '../../data/CarouselData';
import { Heading, Row, Section, TextWrapper } from '../../styles/globalStyles';
import {
  ButtonContainer,
  CardButton,
  CarouselImage,
  ImageWrapper,
  ReviewSlider,
} from './CarouselStyles';

export function Carousel() {
  const [sliderRef, setSliderRef] = useState<typeof Slider | null>(null);

  return (
    <Section margin='auto' maxWidth='1280px' padding='50px 70px' inverse>
      <Row justify='space-between' margin='1rem' wrap='wrap'>
        <Heading width='auto' inverse>
          Find more about us
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {carouselData.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size='1.1rem' margin='0.4rem 0 0' weight='bold'>
              {el.title}
            </TextWrapper>
            <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
}
