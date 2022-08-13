import React from 'react';
import styled from 'styled-components';
import blackArrowRight from '../../images/blackArrowRight.png';
import whiteArrowRight from '../../images/whiteArrowWhite.png';
import Image from 'next/image';

const black = '#25273d';
const light = '#787a9b';

export default function HeroSection() {
  return (
    <Container>
      <TopHeroButton>
        <InnerLeftCircle>D 5%</InnerLeftCircle>
        <InnerText>Refer a Feiend. Earn DAI today</InnerText>
        <InnerIconContainer>
          <Image
            height={15}
            width={15}
            alt="Click to follow link"
            src={blackArrowRight}
          />
        </InnerIconContainer>
      </TopHeroButton>
      <H1>Deploy your crypto into DeFi</H1>
      <HeroSubText>
        Earn a yield, Multiple your Exposure or Borrow against your crypto. ETH,
        BTC and 30 more cryptos available to put to work.
      </HeroSubText>
      <CallToActionButton>
        <CtaButtonText>Connect a Wallet </CtaButtonText>
        <ImageContainer>
          <Image
            src={whiteArrowRight}
            width={15}
            height={16}
            alt="Click to Connect a wallet"
          />
        </ImageContainer>
      </CallToActionButton>
      <HeroUl>
        <HeroLi>ETH</HeroLi>
        <HeroLi>BTC</HeroLi>
        <HeroLi>DAI</HeroLi>
        <HeroLi>UNI LP</HeroLi>
        <HeroLi>YFI</HeroLi>
      </HeroUl>
      <ThreeDivContainer>
        <Div>
          <H3>30 day volume</H3>
          <Span>$4.63B</Span>
        </Div>
        <Div>
          <H3>Managed on Oasis</H3>
          <Span>$3.42B</Span>
        </Div>
        <Div>
          <H3>Median Vault</H3>
          <Span>$98.52k</Span>
        </Div>
      </ThreeDivContainer>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const InnerIconContainer = styled.div`
  transform: translateX(0px);
  transition: transform 200ms ease;
  min-width: 15px ;
  min-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopHeroButton = styled.button`
  cursor: pointer;
  border-radius: 99rem;
  color: ${black};
  font-size: 14px;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  margin-bottom: 40px;
  border: none;
  background-color: white;
  padding: 4px;
  padding-right: 25px;
  transition: background-color 200ms;
  &:hover {
    background-color: rgb(0 0 0 / 3%);
    ${InnerIconContainer} {
      transform: translateX(8px);
    }
  }
`;

const InnerLeftCircle = styled.div`
  display: flex;
  align-items: center;
  background: #fee9bf;
  padding: 8px;
  color: ${black};
  font-size: 14px;
  margin-right: 12px;
  font-weight: 600px;
  border-radius: 50px;
  padding: 10px 5px;
  width: 75px;
  justify-content: center;
`;

const InnerText = styled.span`
  color: ${black};
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
`;

const H1 = styled.h1`
  color: ${black};
  font-size: 52px;
  font-weight: 500;
  line-height: 52px;
  margin-bottom: 16px;
  text-align: center;
`;

const HeroSubText = styled.p`
  color: #787a9b;
  line-height: 28px;
  margin-bottom: 32px;
  max-width: 740px;
  text-align: center;
  line-height: 28px;
  opacity: 0.8;
  font-weight: 400;
  font-size: 18px;
`;

const ImageContainer = styled.div`
  position: relative;
  transition: transform 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0px);
`;

const CallToActionButton = styled.button`
  background-color: ${black};
  padding: 15px 40px;
  border: none;
  cursor: pointer;
  border-radius: 99rem;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  &:hover {
    background-color: #626472;

    ${ImageContainer} {
      transform: translateX(8px);
    }
  }
`;

const HeroUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 75px;
  flex-wrap: wrap;
`;

const HeroLi = styled.li`
  border-radius: 99rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #787a9b;
  background-color: rgb(255, 255, 255 0.8);
  border: 1px solid #EAEAEA;
  padding: 10px 32px;
  transition: background-color 200ms;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;

const ThreeDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1010px;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 125px;
  flex-wrap: wrap;
  @media (max-width: 625px) {
    justify-content: center;
    gap: 30px;
  }
`;

const CtaButtonText = styled.span`
  color: white;
  font-size: 18px;
  margin-right: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  color: ${light};
  font-size: 16px;
  margin-bottom: 15px;
`;

const Span = styled.span`
  color: ${black};
  font-size: 40px;
`;
