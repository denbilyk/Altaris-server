import BaseApi from "./BaseApi.jsx";
import Constants from '../constants/Constants.jsx';

class FullSearchApi extends BaseApi {

    constructor(props) {
        super(props);
    }

    performSearch(query, lat, lng) {
        /*let url = "http://api.iphone.kaufda.com/iphone/api/v2/productSearch/listView?query={query}&limit=100&maxDistance=25.0&lat={lat}&lng={lng}&device=iphone";
        url = url.replace("{query}", query);
        url = url.replace("{lat}", lat);
        url = url.replace("{lng}", lng);*/
        var url = this.makeUrl("/productSearch/" + query);
        var key = Constants.ACTION_NAMES.GET_SEARCH_RESULT;
        this.abortPendingRequests(key);
        this.dispatch(key, Constants.REQUEST.PENDING);
        this._pendingRequests[key] = this.get(url).end(
            this.makeDigestFun(key)
        );
    }
}

export default new FullSearchApi();