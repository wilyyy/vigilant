import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// https://github.com/google-map-react/google-map-react 

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Map = () => {
    const MapProps = {
        center: {
            lat: 49.2827,
            lng: -123.116226
          },
          zoom: 11
    };

    const MapOptions = {
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
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
            </GoogleMapReact>
        </Page>
    )
}

export default Map;