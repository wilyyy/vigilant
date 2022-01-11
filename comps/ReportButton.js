import styled from 'styled-components';

const Container = styled.button`
    background-color: #FF0909;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border-radius: 50%;
`;
const Img = styled.img`
    width: 115px;
    height: 115px;
    src: ${(props) => props.src};
`;

const ReportButton = ({
    imgsrc = "reportbutton.png"
}) => {
    return (
        <Container>
            <Img src={imgsrc} />
        </Container>
    )
}

export default ReportButton;