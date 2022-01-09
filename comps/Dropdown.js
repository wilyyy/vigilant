import styled from 'styled-components';
import { useState } from "react";
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';

const Container = styled.div`
    width: 217px;
    height: auto;
`;

const Button = styled.button`
    width: 217px;
    height: 50px;
    border: solid 1px rgba(255, 103, 0, 0.7);
    background: linear-gradient(360deg, #000000 23.69%, rgba(16, 16, 16, 0.7) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px 0 10px;
    border-radius: 5px;
    color: rgba(255, 103, 0, 0.7);
`;

const ArrowIcon = styled(ArrowDownShort)`
    width: 40px;
    height: 40px;
    color: rgba(255, 103, 0, 0.7);
`;

const DropCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 217px;
    height: 200px;
    background-color: #000;
    border: solid 1px rgba(255, 103, 0, 0.7);
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: #000;
    }

    ::-webkit-scrollbar-track {
        background-color: #000;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #FF6700;
        border-radius: 20px;
    }
`;

const DropButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 217px;
    background-color: #000;
    height: 40px;
    color: #FF6700;
    border-style: none;
    border-bottom: 1px solid #FF6700;

    :hover{
        background-color: #FF6700;
        color: #000;
        transition: 0.7s;
    }
`;

const Dropdown = ({
    text="All",
    onAllClick = () => {},
    onUBCClick = () => {},
    onKitsClick = () => {},
    onDowntownClick = () => {},
    onEastVanClick = () => {},
    onEastSideClick = () => {},
    onNorthVanClick = () => {}
}) => {
    const [select, setSelect] = useState(false);

    const ClickAll = () => {
        setSelect(false);
        onAllClick();
    }

    const ClickUBC = () => {
        setSelect(false);
        onUBCClick();
    }

    const ClickKits = () => {
        setSelect(false);
        onKitsClick();
    }

    const ClickDowntown = () => {
        setSelect(false);
        onDowntownClick();
    }

    const ClickEastVan = () => {
        setSelect(false);
        onEastVanClick();
    }

    const ClickDowntownEast = () => {
        setSelect(false);
        onEastSideClick();
    }

    const ClickNorthVan = () => {
        setSelect(false);
        onNorthVanClick();
    }

    return (
        <Container>
            <Button onClick={()=>{setSelect(!select)}}>
                <h3>{text}</h3>
                <ArrowIcon />
            </Button>

            {select === true &&
                <DropCont>
                    <DropButton onClick={ClickAll}>
                        <h3>All</h3>
                    </DropButton>
                    <DropButton onClick={ClickUBC}>
                        <h3>UBC</h3>
                    </DropButton>
                    <DropButton onClick={ClickKits}>
                        <h3>Kitsilano</h3>
                    </DropButton>
                    <DropButton onClick={ClickDowntown}>
                        <h3>Downtown Vancouver</h3>
                    </DropButton>
                    <DropButton onClick={ClickEastVan}>
                        <h3>East Vancouver</h3>
                    </DropButton>
                    <DropButton onClick={ClickDowntownEast}>
                        <h3>Downtown Eastside</h3>
                    </DropButton>
                    <DropButton onClick={ClickNorthVan}>
                        <h3>North Vancouver</h3>
                    </DropButton>
                    
                </DropCont>
            }
        </Container>
    )
}

export default Dropdown;