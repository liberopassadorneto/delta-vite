import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Section } from '../../styles/globalStyles';
import {
  ContentButton,
  ContentColumn,
  ContentHeading,
  ContentImg,
  ContentImgWrapper,
  ContentRow,
  ContentSubtitle,
  ContentTextWrapper,
  ContentTopLine,
} from './ContentStyles';

interface ContentProps {
  reverse?: boolean;
  inverse?: boolean;
  topLine?: string;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: string;
  alt?: string;
  start?: string;
}

export function Content({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}: ContentProps) {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <ContentTextWrapper>
              <ContentTopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine}
              </ContentTopLine>
              <ContentHeading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </ContentHeading>
              <ContentSubtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </ContentSubtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {buttonLabel}
              </ContentButton>
            </ContentTextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ContentImgWrapper>
              <ContentImg
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ContentImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
}
