import Header from "../comps/Header"
import DropdownFAQ from "../comps/DropDownFAQ"
import styled from "styled-components"


const Space = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
align-items: center;
padding: 50px;
justify-content: space-between;
`




export default function FAQ() {

  return (
    <>
      <Header/>
      <br></br><br></br>
      <Space>
      <DropdownFAQ BoxText="How do you find crime?"/>
      <DropdownFAQ BoxText="What is the emergency number?"/>
      <DropdownFAQ BoxText="I need help!!"/>
      </Space>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Space>
      <DropdownFAQ BoxText="Best places to contact?"/>
      <DropdownFAQ BoxText="Do you know where my mom is?"/>
      <DropdownFAQ BoxText="A person is following me"/>
      </Space>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Space>
      <DropdownFAQ BoxText="SlenderMan"/>
      <DropdownFAQ BoxText="Donald Trump"/>
      <DropdownFAQ BoxText="Testing 1.2.3"/>
      </Space>
     
      
    </>
  )
}
