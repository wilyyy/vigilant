// import Header from "../comps/Header"
import DropdownFAQ from "../comps/DropDownFAQ"
import styled from "styled-components"
import { FaqObjects } from "../public/Objects"
import DropDownFAQ from "../comps/DropDownFAQ";

// const Cont = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-wrap: wrap;
// `;
const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: #181818;
`;




export default function FAQ() {

  return (
    <Page>
      
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
