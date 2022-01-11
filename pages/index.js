import Head from 'next/head'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../comps/Header';

const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: space-between; */
  flex-direction: row;
  background-color: #000;
  width: 100%;
  height: 800px;
  flex: 1;
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
`;

const Description = styled.h3`
  color: #fff;
`;

export default function Home() {
  const router = useRouter();

  return (
    <MainCont>
    {/* <Header/> */}
    <ImageCont>
      <Image src="/VigilantLogo.png"/>
    </ImageCont>

    <InfoCont>
      <Title>Vigilant</Title>
      <Description>Two week javascript refresher for web development 4. Created by William Alvarez, Josh Reyes, Aryan Heravi, and Maggie Su.</Description>
      <button onClick={()=>{router.push('/Map')}}>Go Map</button>

    </InfoCont>
    </MainCont>
  )
}
