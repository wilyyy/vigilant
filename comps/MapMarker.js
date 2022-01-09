import styled from 'styled-components';
import { useState } from "react";

import { Skull } from '@styled-icons/ionicons-sharp/Skull';
import { WindowClose } from '@styled-icons/fa-solid/WindowClose';

const SkullIcon = styled(Skull)`
    width: 24px;
    height: 24px;
    background-color: #FF6700;
    border-radius: 50px;
    padding: 3px;
`;

const CloseIcon = styled(WindowClose)`
    width: 24px;
    height: 24px;
    color: red;
    border-radius: 50px;
    padding: 3px;
    position: absolute;
    right: 3px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10px;
    padding: 3px;
    margin: auto;
    width: 100px;
    height: auto;
    background-color: #FF6700;
    z-index: 100;
`;

const MapMarker = ({
    type="Murder",
    information="",
    date=""
}) => {
    const [info, setInfo] = useState(false);
    
    return (
        <>
            {info === true &&
                <Info onClick={()=>{setInfo(false)}}>
                    <CloseIcon onClick={()=>{setInfo(false)}}/>
                    <h4>{type}</h4>
                    <p>{information}</p>
                    <p>{date}</p>
                    <p>click to dismiss</p>
                </Info>
            }
            <SkullIcon onClick={()=>{setInfo(!info)}}/> 
        </>
    )
}

export default MapMarker;