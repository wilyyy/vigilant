/* big brain algorithm 

Map regions.name into filter flatlist comp, with each option having
an onPress prop.

Every region will be filtered into different arrays.

change region state depending on region id.

*/

//Look at an actual map and add more regions (Vancouver only)
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
    },
    {
        id: 4,
        name: "Downtown Eastside"
    },
    {
        id: 5,
        name: "North Vancouver"
    }
];


//make hella crime objects
export const MarkerObjects = [
    {
        id: 1,
        type: "Shooting",
        info: "shooting in this area",
        date: "posted on April 4th, 5:00pm",
        lat: 49.2599,
        lng: -123.1843
    },
    {
        id: 1,
        type: "Shooting",
        info: "shooting in this area",
        date: "posted on April 4th, 5:00pm",
        lat: 49.2599,
        lng: -123.1843
    },
    {
        id: 1,
        type: "Shooting",
        info: "shooting in this area",
        date: "posted on April 4th, 5:00pm",
        lat: 49.2684,
        lng: -123.1683
    },
    {
        id: 2,
        type: "Assault",
        info: "someone got attacked here",
        date: "posted on March 3rd, 3:00am",
        lat: 49.2827,
        lng: -123.116226
    },
    {
        id: 2,
        type: "Assault",
        info: "3 cases of people being attacked here",
        date: "posted on December 1st, 4:21pm",
        lat: 49.2827,
        lng: -123.136226
    },
    {
        id: 2,
        type: "Shooting",
        info: "watch out there was a shooting near Cardero's restaurant",
        date: "posted on December 1st, 3:21pm",
        lat: 49.2905,
        lng: -123.116226
    },
    {
        id: 2,
        type: "Coyote Attack",
        info: "numerous counts of attacks by wild coyotes around this area",
        date: "posted on June 23rd, 7:21pm",
        lat: 49.299999,
        lng: -123.139999
    },
    {
        id: 5,
        type: "Bear Attack",
        info: "very aggressive grizzly bears spotted here",
        date: "posted on August 21st, 9:21am",
        lat: 49.3827,
        lng: -123.126226
    },
    {
        id: 5,
        type: "Assault",
        info: "someone got stabbed here",
        date: "posted on November 3rd, 10:21pm",
        lat: 49.3297,
        lng: -123.082226
    },
    {
        id: 5,
        type: "Robbery",
        info: "bank robbery",
        date: "posted on October 1st, 8:30am",
        lat: 49.3297,
        lng: -123.095226
    }
];