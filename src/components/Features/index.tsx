import React from 'react';
import { featuresData } from '../../data/FeaturesData';
import { Container, Section } from '../../styles/globalStyles';
import { DynamicReactIcon } from '../ReactIcon';
import {
  FeatureColumn,
  FeatureImgWrapper,
  FeatureName,
  FeatureText,
  FeatureTextWrapper,
  FeatureTitle,
  FeatureWrapper,
} from './FeaturesStyles';

export function Features() {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding='50px 10px' position='relative' inverse id='about'>
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What We Offer</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImgWrapper className={el.imgClass}>
                <DynamicReactIcon>{el.icon}</DynamicReactIcon>
              </FeatureImgWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
}
