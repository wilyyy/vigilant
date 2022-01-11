import styled from 'styled-components';

const Container = styled.button`
    background-color: #C4C4C4;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    border-style: none;
    width: 180px;
`;
const ButtonText = styled.text`
    font-size: 28px;
    font-weight: bold;
`;

const Button = () => {
    return (
        <Container>
            <ButtonText>
                Start
            </ButtonText>
        </Container>
    )
}

export default Button;