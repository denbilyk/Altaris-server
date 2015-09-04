import request from 'superagent';
import AppDispatcher from "../actions/AppDispatcher.jsx";
import Constants from '../constants/Constants.jsx';

var API_URL = 'http://localhost:4000/api/v1';
var TIMEOUT = 10000;

export default class BaseApi {
    constructor() {
        this._pendingRequests = {};
    }

    abortPendingRequests(key) {
        if (this._pendingRequests[key]) {
            this._pendingRequests[key]._callback = function () {
            };
            this._pendingRequests[key].abort();
            this._pendingRequests[key] = null;
        }
    }

    makeUrl(part) {
        return API_URL + part;
    }

    dispatch(key, response, params) {
        var payload = {actionType: key, response: response};
        if (params) {
            payload.queryParams = params;
        }
        AppDispatcher.handleRequestAction(payload);
    }

// return successful response, else return request Constants
    makeDigestFun(key, params) {
        var that = this;
        return function (err, res) {
            if (err && err.timeout === TIMEOUT) {
                that.dispatch(key, Constants.REQUEST.TIMEOUT, params);
            } else if (!res || !res.ok) {
                that.dispatch(key, Constants.REQUEST.ERROR, params);
            } else {
                that.dispatch(key, res, params);
            }
        };
    }

    get(url) {
        return request
            .get(url)
            .timeout(TIMEOUT);
    }
}