import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../styles/globalStyles';
import { DynamicReactIcon } from '../ReactIcon/index';
import {
  FooterAddress,
  FooterColumn,
  FooterGrid,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  SocialIcon,
} from './FooterStyles';

export function Footer() {
  return (
    <Section padding='4rem 0 2rem 0'>
      <FooterWrapper>
        <FooterGrid justify='space-between'>
          <FooterColumn id='footerLogo'>
            <FooterLogo to='/'>
              <SocialIcon src='./assets/images/logo.png' />
              Delta
            </FooterLogo>
            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>

            <Row align='center' margin='auto  0 0 0' gap='1rem'>
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href='/'
                  target='_blank'
                  aria-label={social.name}
                >
                  <DynamicReactIcon size={social.size} color={social.color}>
                    {social.icon}
                  </DynamicReactIcon>
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to='/'>
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>Delta © 2021</FooterRights>
      </FooterWrapper>
    </Section>
  );
}
