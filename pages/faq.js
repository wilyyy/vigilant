// import Header from "../comps/Header"
import DropdownFAQ from "../comps/DropDownFAQ"
import styled from "styled-components"
import { FaqObjects } from "../public/Objects"
import DropDownFAQ from "../comps/DropDownFAQ";
import { ReturnUpBack } from '@styled-icons/ionicons-outline/ReturnUpBack';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Page = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: #181818;
  border: outset 5px rgba(255, 103, 0, 0.7);
`;

const BackIcon = styled(ReturnUpBack)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 2;
  left: 1.5%;
  top: 1.5%;
  background-color: #FF6700;
  border-radius: 25px;
  padding: 5px;

  :hover{
    background-color: #FFA161;
  }
`;

export default function FAQ() {
  const router = useRouter();

  return (
    <Page
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
      <BackIcon onClick={() => router.push("/Map")}/>
        {
          FaqObjects.map((o, i) => (
            <DropDownFAQ
              key={i}
              Question={o.ques}
              Ans={o.ans}
            />
          ))
        }
    </Page>
  )
}
