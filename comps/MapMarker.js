import styled from 'styled-components';

const Container = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: orange;
`;

const MapMarker = ({
    text="Murder",
    width="1rem",
    height="1rem"
}) => {
    return (
        <Container width={width} height={height}>
            {text}
        </Container>
    )
}

export default MapMarker;