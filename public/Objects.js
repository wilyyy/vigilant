/* big brain algorithm 

Map regions.name into filter flatlist comp, with each option having
an onPress prop.

Every region will be filtered into different arrays.

change region state depending on region id.

*/

//Look at a map and add more regions (Vancouver only)
export const Regions = [
    {
        id: 0,
        name: "UBC"
    },
    {
        id: 1,
        name: "Kitsilano"
    },
    {
        id: 2,
        name: "Downtown Vancouver"
    },
    {
        id: 3,
        name: "East Vancouver"
    }
];


//make hella crime objects
export const MarkerObjects = [
    {
        id: 2,
        type: "Shooting",
        info: "watch out there was a shooting near Cardero's restaurant",
        lat: 49.2827,
        lng: -123.116226
    },
    {
        id: 2,
        type: "Robbery",
        info: "watch out there was a shooting near Cardero's restaurant",
        lat: 49.3827,
        lng: -123.126226
    }
];