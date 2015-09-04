import AppDispatcher from "./AppDispatcher.jsx";
import Constants from '../constants/Constants.jsx';
import * as $ from 'jquery';

export default {

    getLocation() {
        // Try HTML5 geolocation
        if (navigator.geolocation) {
            dispatch("onGetLocation");
            navigator.geolocation.getCurrentPosition(reverseLookup, function (error) {
                handleLocationError(true, error);
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false);
        }
    }
}

function dispatch(eventName, coords, location) {
    AppDispatcher.handleLocationAction({
        actionType: eventName,
        location: location,
        coords: coords
    });
}

function reverseLookup(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    dispatch("onReverseLookup", position.coords);
    $.ajax({
        url: Constants.GOOGLE_LOCATION_API,
        data: {
            latlng: latlon
        },
        error: function() {
            //TODO we can ommit as we have coordinates
            console.error("reverseLookup error");
        },
        dataType: 'json',
        success: function(data) {
            dispatch("onReverseLookupSuccess", position.coords, data);
        },
        type: 'GET'
    });
}

function handleLocationError(browserHasGeolocation, error) {
    var msg = "";
    if (browserHasGeolocation) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                msg = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                msg = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                msg = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                msg = "An unknown error occurred.";
                break;
        }
    } else {
        msg = "Browser doesn't support Geolocation";
    }

    dispatch("onGetLocationError", msg);
}
