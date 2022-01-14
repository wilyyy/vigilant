import Head from 'next/head'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navigation from '../comps/Navigation';
import { motion } from 'framer-motion';

const MainCont = styled(motion.div)`
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
  color: #fff;
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
    <MainCont
      initial="pageInitial" 
      animate="pageAnimate" 
      variants={{
          pageInitial: {
              opacity: 0
          },
          pageAnimate: {
              opacity: 1
          },
      }}
    >
      <InnerCont>
        <ImageCont>
          <Image src="/VigilantLogo.png" />
        </ImageCont>
        <InfoCont>
          <Title>Vigilant</Title>
          <Description>Two week javascript refresher for web development 4. Created by William Alvarez, Josh Reyes, Aryan Heravi, and Maggie Su.</Description>
          <a href="https://github.com/wilyyy/vigilant" target="_blank">Click here to view the source code</a>
          <StartBut>
            <button style={{width:"110px", height:"40px", fontSize:"16px", marginTop:"30px"}} onClick={() => { router.push('/Map') }}>Go to Map</button>
          </StartBut>
        </InfoCont>

      </InnerCont>
    </MainCont>
  )
}
