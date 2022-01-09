import styled from 'styled-components';

import { MarkerObjects } from '../public/Objects';
import SidebarInfoText from './SidebarInfoText';

const Container = styled.div`
    width: 217px;
    height: 70vh;
    background: rgba(0, 0, 0, 0.8);
    border: solid 1px #FF6700;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 3px;
`;

const SidebarInfo = ({
    array = []
}) => {
    return (
        <Container>
            {
                array.map((o, i) => (
                    <SidebarInfoText 
                        key={i}
                        heading={o.type}
                        info={o.info}
                        date={o.date}
                    />
                ))
            }
        </Container>
    )
}

export default SidebarInfo;