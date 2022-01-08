import styled from 'styled-components';
import { useState } from "react";
import GoogleMapReact from 'google-map-react';

import { MapStyleDark } from '../public/MapStyles';
import { Regions, MarkerObjects } from '../public/Objects';
import MapMarker from '../comps/MapMarker';

// https://github.com/google-map-react/google-map-react 

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

const MarkerCont = styled.div``;

const Map = () => {

    const [currentRegions, setCurrentRegions] = useState(Regions);
    const [allMarkers, setAllMarkers] = useState(MarkerObjects);
    console.log(currentRegions);

    /*⚙️⚙️⚙️⚙️⚙️ higher order functions for our objects ⚙️⚙️⚙️⚙️⚙️ */
    const UBCMarkers = MarkerObjects.filter(marker => marker.id === 0);
    const KitsMarkers = MarkerObjects.filter(marker => marker.id === 1);
    const DowntownMarkers = MarkerObjects.filter(marker => marker.id === 2);
    
    console.log("UBC Objects");
    console.log(UBCMarkers);
    console.log("Kitsilano Objects");
    console.log(KitsMarkers);
    console.log("Downtown Objects");
    console.log(DowntownMarkers);

    /*🌎🌎🌎🌎🌎 google maps config tings 🌎🌎🌎🌎🌎*/
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
        <Page>
            <button onClick={()=>{setAllMarkers(DowntownMarkers)}}>
                Downtown Markers
            </button>
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
                            text={o.type}
                        />
                    ))
                }
            </GoogleMapReact>
        </Page>
    )
}

export default Map;