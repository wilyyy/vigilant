import styled from 'styled-components';
// import {useRouter} from 'next/router';

const MainCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${(props) => props.bg};
    border-radius: 10px;
    margin: 10px;
`;

const Img = styled.img`
    width: 35px;
    src: ${(props) => props.src};
`;

const HeaderButton = ({
    bgcolor = "#E9F4FF",
    imgsrc = "call.png",
    onClick=()=>{}
}) => {
    return (
        <MainCont>
            <ImgCont onClick={onClick} bg={bgcolor}>
                <Img src={imgsrc} />
            </ImgCont>
        </MainCont>
    )
}

export default HeaderButton;