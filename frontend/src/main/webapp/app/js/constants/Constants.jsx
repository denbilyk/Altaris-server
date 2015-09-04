export default {
    ACTION_NAMES: {
        GET_BROCHURE_DETAILS : "brochureDetails",
        OPEN_BROCHURE_WITH_PAGE : "openBrochureWithPage",
        GET_SEARCH_RESULT: "getSearchResult"
    },
    EVENTS : {
        CHANGE_BROCHURE: "CHANGE_BROCHURE",
        CHANGE_SEARCH: "CHANGE_SEARCH"
    },
    REQUEST : {
        PENDING : "PENDING",
        TIMEOUT: "TIMEOUT",
        ERROR: "ERROR"
    },
    ROOT_APP_ID : "content",
    GOOGLE_LOCATION_API : "https://maps.googleapis.com/maps/api/geocode/json",

    LOCATION: {
        CHANGE_EVENT: "CHANGE_EVENT",

        EVENT_NAME: {
            onGetLocation: "onGetLocation",
            onGetLocationError: "onGetLocationError",
            onReverseLookupSuccess: "onReverseLookupSuccess",
            onReverseLookup: "onReverseLookup"
        }
    }
};