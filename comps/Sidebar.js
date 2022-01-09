import styled from 'styled-components';
import { useState } from "react";

import Dropdown from './Dropdown';
import SidebarInfo from './SidebarInfo';

const Container = styled.div`
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(360deg, rgba(16, 16, 16, 0.7) 8.43%, rgba(0, 0, 0, 0.9) 100%);
    box-shadow: inset -3px 0px 5px #2B3036;
    color: rgba(255, 103, 0, 0.7);
    padding: 30px 0;
`;

const DropdownCont = styled.div`
    position: absolute; 
    z-index: 500;
    top: 13%;
`;

const Sidebar = ({
    array=[],
    onAllClick = () => {},
    onUBCClick = () => {},
    onKitsClick = () => {},
    onDowntownClick = () => {},
    onEastVanClick = () => {},
    onEastSideClick = () => {},
    onNorthVanClick = () => {}
}) => {
    const [dropdownText, setDropdownText] = useState("All");

    const ClickAll = () => {
        setDropdownText("All");
        onAllClick();
    }

    const ClickUBC = () => {
        setDropdownText("UBC");
        onUBCClick();
    }

    const ClickKits = () => {
        setDropdownText("Kitsilano");
        onKitsClick();
    }

    const ClickDowntown = () => {
        setDropdownText("Downtown Vancouver");
        onDowntownClick();
    }

    const ClickEastVan = () => {
        setDropdownText("East Vancouver");
        onEastVanClick();
    }

    const ClickDowntownEast = () => {
        setDropdownText("Downtown East Side");
        onEastSideClick();
    }

    const ClickNorthVan = () => {
        setDropdownText("North Vancouver");
        onNorthVanClick();
    }

    return (
        <Container>
            <h3>Select Region:</h3>
            <DropdownCont>
                <Dropdown 
                    text={dropdownText}
                    onAllClick={ClickAll}
                    onUBCClick={ClickUBC}
                    onKitsClick={ClickKits}
                    onDowntownClick={ClickDowntown}
                    onEastVanClick={ClickEastVan}
                    onEastSideClick={ClickDowntownEast}
                    onNorthVanClick={ClickNorthVan}
                />
            </DropdownCont>
            <SidebarInfo array={array}/>
        </Container>
    )
}

export default Sidebar;