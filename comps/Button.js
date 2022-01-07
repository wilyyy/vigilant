import styled from 'styled-components';

const Container = styled.button`
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = () => {
    return (
        <Container>Button</Container>
    )
}

export default Button;