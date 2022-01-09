import styled from 'styled-components';
import { useState } from "react";
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';

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

    return (
        <>
            <Button>
                <h3>{text}</h3>
                <ArrowIcon />
            </Button>

            {select === true &&
                <>asdasdasd</>
            }
        </>
    )
}

export default Dropdown;