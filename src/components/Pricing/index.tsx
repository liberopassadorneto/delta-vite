import React from 'react';
import { IconContext } from 'react-icons/lib';
import { pricingData } from '../../data/PricingData';
import { Button, Heading, TextWrapper } from '../../styles/globalStyles';
import {
  PricingCard,
  PricingCardCost,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardText,
  PricingContainer,
  PricingSection,
  PricingWrapper,
} from './PricingStyles';

export function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <PricingSection id='pricing'>
        <PricingWrapper>
          <Heading>Pick Your Best Option</Heading>

          <TextWrapper
            mb='1.4rem'
            weight='600'
            size='1.1rem'
            color='white'
            textAlign='center'
          >
            Create, maintain and store your data with Delta.
          </TextWrapper>
          <PricingContainer>
            {pricingData.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.numAcc}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
