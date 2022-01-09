import styled from 'styled-components';

const Container = styled.div`
    width: 200px;
    height: auto;
    color: rgba(255, 103, 0, 0.7);
`;

const Spacer = styled.div`
    margin-bottom: 5px;
`;

const Para = styled.p`
    font-size: 12px;
`;

const Italic = styled.p`
    font-style: italic;
    font-size: 12px;
`

const Divider = styled.div`
    width: 190px;
    height: 2px;
    background-color: rgba(255, 103, 0, 0.7);
`;

const SidebarInfoText = ({
    heading="",
    info="",
    date=""
}) => {
    return (
        <Container>
            <h4>{heading}</h4>
            <Para>{info}</Para>
            <Italic>{date}</Italic>
            <Divider />
        </Container>
    )
}

export default SidebarInfoText;