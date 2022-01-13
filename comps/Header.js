import styled from 'styled-components';
import HeaderButton from './HeaderButton';

const MainCont = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #000;
    border: none;
    width: 100%;
    height: 100px;
`;

const LogoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    margin: 10px;
    width: 100px;
`;

const Title = styled.h1`
    color: #fff;
    margin-left: 10px;
    font-size: 28px;;
`;

const ButtonCont = styled.div`
    display: flex;
    margin: 10px;
`;

const Header = () => {
    return (
        <MainCont>
            <LogoCont>
                <LogoImg src={"/VigilantLogo.png"} />
                <Title>Vigilant</Title>
            </LogoCont>

            <ButtonCont>
                <HeaderButton bgcolor='#FCF0E8'imgsrc='question.png'></HeaderButton>
                <HeaderButton bgcolor='#E9F4FF'></HeaderButton>
            </ButtonCont>
        </MainCont>
    )
}

export default Header;