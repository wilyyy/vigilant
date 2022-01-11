import styled from 'styled-components';
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';

const Dropdown = styled.div`
position: relative;
display: flex;

&:hover {
  display: block;
  >div {
      display: block;
  }
}
`;

const ArrowIcon = styled(ArrowDownShort)`
    width: 40px;
    height: 40px;
    color: rgba(255, 103, 0, 0.7);
`;

const DropdownContent = styled.div`
display: none;
position: absolute;
background-color: Grey;
border: solid 2px rgba(255, 103, 0, 0.7);
width: 500px;
height: 250px;
padding: 12px 16px;
z-index: 1;
`;

const DropdownBox = styled.div`
display: flex;
width:500px;
height:40px;
background-color: #101010;
border: solid 2px rgba(255, 103, 0, 0.7);
text-align:center;
color: White;
`

const DropDownFAQ = () => {
return (
<Dropdown>
    <DropdownBox>
        <ArrowIcon/>
    <span>What is Life?</span>
    </DropdownBox>
  <DropdownContent>
  </DropdownContent>
</Dropdown>
);
};

export default DropDownFAQ;