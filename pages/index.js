import Head from 'next/head'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navigation from '../comps/Navigation';

const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #000;
  width: 100%;
  height: 800px;
`;

const InnerCont = styled.div`
  display: flex;
  width: 80%;
`;

const ImageCont = styled.div`
  display: flex;
  width: 50%;
  margin: 50px;
`;

const Image = styled.img`
  display: flex;
  width: 300px;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 36px;
`;

const Description = styled.h3`
  color: #fff;
`;

const StartBut = styled.div`
`;

export default function Home() {
  const router = useRouter();

  return (
    <MainCont>
      <InnerCont>
        <ImageCont>
          <Image src="/VigilantLogo.png" />
        </ImageCont>
        <InfoCont>
          <Title>Vigilant</Title>
          <Description>Two week javascript refresher for web development 4. Created by William Alvarez, Josh Reyes, Aryan Heravi, and Maggie Su.</Description>
          <StartBut>
            <button style={{width:"110px", height:"40px", fontSize:"16px", marginTop:"30px"}} onClick={() => { router.push('/Map') }}>Go to Map</button>
          </StartBut>
        </InfoCont>

      </InnerCont>
    </MainCont>
  )
}
