import styled from 'styled-components';
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { MapStyleDark } from '../public/MapStyles';
import { Regions, MarkerObjects } from '../public/Objects';
import MapMarker from '../comps/MapMarker';
import Sidebar from '../comps/Sidebar';
import ReportButton from '../comps/ReportButton';
import Navigation from "../comps/Navigation";

const Page = styled(motion.div)`
    width: 100vw;
    height: 100vh;
`;

const SidebarCont = styled.div`
    position: absolute;
    left: 0;
    z-index: 200;
`;

const NavCont = styled.div`
    position: absolute;
    top: 2%;
    right: 4%;
    z-index: 200;
`;

const Map = () => {
    const router = useRouter();
    const [allMarkers, setAllMarkers] = useState(MarkerObjects);

    const UBCMarkers = MarkerObjects.filter(marker => marker.id === 0);
    const KitsMarkers = MarkerObjects.filter(marker => marker.id === 1);
    const DowntownMarkers = MarkerObjects.filter(marker => marker.id === 2);
    const EastVanMarkers = MarkerObjects.filter(marker => marker.id === 3);
    const EastSideMarkers = MarkerObjects.filter(marker => marker.id === 4);
    const NorthVanMarkers = MarkerObjects.filter(marker => marker.id === 5);

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
            <NavCont>
                <Navigation />
            </NavCont>
            <SidebarCont>
                <Sidebar 
                    array={allMarkers}
                    onAllClick={()=>{setAllMarkers(MarkerObjects)}}
                    onUBCClick={()=>{setAllMarkers(UBCMarkers)}}
                    onKitsClick={()=>{setAllMarkers(KitsMarkers)}}
                    onDowntownClick={()=>{setAllMarkers(DowntownMarkers)}}
                    onEastVanClick={()=>{setAllMarkers(EastVanMarkers)}}
                    onEastSideClick={()=>{setAllMarkers(EastSideMarkers)}}
                    onNorthVanClick={()=>{setAllMarkers(NorthVanMarkers)}}
                />
            </SidebarCont>
            {/* <ReportCont>
                <ReportButton onClick={()=>{router.push('/faq')}}/>
            </ReportCont> */}
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