import styled from 'styled-components';
import { useState } from "react";

import Dropdown from './Dropdown';
import SidebarInfo from './SidebarInfo';

const Container = styled.div`
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(360deg, rgba(16, 16, 16, 0.7) 8.43%, rgba(0, 0, 0, 0.9) 100%);
    box-shadow: inset -3px 0px 5px #2B3036;
    color: rgba(255, 103, 0, 0.7);
`;

const Sidebar = ({
    array=[]
}) => {
    return (
        <Container>
            <h3>Select Region:</h3>
            <Dropdown />
            <SidebarInfo array={array}/>
        </Container>
    )
}

export default Sidebar;