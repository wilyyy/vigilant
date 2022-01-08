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

    // filter test
    // const numbers = [98, 76, 23, 432, 22, 12, 203, 100, 1000, 982, 1029, 100, 1092];
    // const filterNumbers = numbers.filter(numbers => (
    //     (numbers >= 100 && numbers <=1000)
    // ));

    // console.log(filterNumbers);

    /*⚙️⚙️⚙️⚙️⚙️ higher order functions for our objects ⚙️⚙️⚙️⚙️⚙️ */
    const KitsilanoMarkers = [];
    const UBCMarkers = [];
    const DowntownMarkers = [];

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