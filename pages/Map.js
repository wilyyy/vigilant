import styled from 'styled-components';
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { motion } from 'framer-motion';

import { MapStyleDark } from '../public/MapStyles';
import { Regions, MarkerObjects } from '../public/Objects';
import MapMarker from '../comps/MapMarker';
import Sidebar from '../comps/Sidebar';

// https://github.com/google-map-react/google-map-react 

const Page = styled(motion.div)`
    width: 100vw;
    height: 100vh;
`;

const SidebarCont = styled.div`
    position: absolute;
    left: 0;
    z-index: 200;
`;

const Map = () => {
    const [allMarkers, setAllMarkers] = useState(MarkerObjects);

    /*⚙️⚙️⚙️⚙️⚙️ HIGHER ORDER METHODS ⚙️⚙️⚙️⚙️⚙️ */
    const UBCMarkers = MarkerObjects.filter(marker => marker.id === 0);
    const KitsMarkers = MarkerObjects.filter(marker => marker.id === 1);
    const DowntownMarkers = MarkerObjects.filter(marker => marker.id === 2);
    const EastVanMarkers = MarkerObjects.filter(marker => marker.id === 3);
    const EastSideMarkers = MarkerObjects.filter(marker => marker.id === 4);
    const NorthVanMarkers = MarkerObjects.filter(marker => marker.id === 5);

    /*🌎🌎🌎🌎🌎 GOOGLE MAPS CONFIG 🌎🌎🌎🌎🌎*/
    const MapProps = {
        center: {
            lat: 49.2827,
            lng: -123.116226
        },
        zoom: 13
    };

    const MapOptions = {
        styles: MapStyleDark
    }

    return (
        <Page
            initial="pageInitial" 
            animate="pageAnimate" 
            variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
            }}
        >
            {/* <button onClick={()=>{setAllMarkers(MarkerObjects)}}>
                All Markers
            </button>
            <button onClick={()=>{setAllMarkers(DowntownMarkers)}}>
                Downtown Markers
            </button> */}
            <SidebarCont>
                <Sidebar array={allMarkers}/>
            </SidebarCont>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAMCXtVRuWoHNsdh45NjCyRtbHdLCJzfdI" }}
                defaultCenter={MapProps.center}
                defaultZoom={MapProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                options={MapOptions}
            >
                {
                    allMarkers.map((o, i) => (
                        <MapMarker
                            key={i}
                            lat={o.lat}
                            lng={o.lng}
                            type={o.type}
                            information={o.info}
                            date={o.date}
                        />
                    ))
                }
            </GoogleMapReact>
        </Page>
    )
}

export default Map;