import styled from 'styled-components';
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';

const Dropdown = styled.div`
position: relative;

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
border-radius: 20px;
`;

const DropdownBox = styled.div`
width:500px;
height:40px;
background-color: #101010;
border: solid 2px rgba(255, 103, 0, 0.7);
text-align:center;
color: White;
border-radius: 20px;
`

export default function DropDownFAQ({
 BoxText = "What is life?"
})
{
  return (
    <Dropdown>
        <DropdownBox>
            <ArrowIcon/>
        {BoxText}
        </DropdownBox>
      <DropdownContent>
      </DropdownContent>
    </Dropdown>
    );
};


