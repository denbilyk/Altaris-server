import BaseApi from "./BaseApi.jsx";
import Constants from '../constants/Constants.jsx';
import AppDispatcher from "../actions/AppDispatcher.jsx";

class BrochureApi extends BaseApi {
    constructor(props) {
        super(props);
    }

    getBrochureDetails(brochureId) {
        var url = this.makeUrl("/brochureDetails/" + brochureId);
        var key = Constants.ACTION_NAMES.GET_BROCHURE_DETAILS;
        this.abortPendingRequests(key);
        this.dispatch(key, Constants.REQUEST.PENDING);
        this._pendingRequests[key] = this.get(url).end(
            this.makeDigestFun(key)
        );
    }

    openBrochure(id, page) {
        var payload = {actionType: Constants.ACTION_NAMES.OPEN_BROCHURE_WITH_PAGE, id: id, page: page};
        AppDispatcher.handleRequestAction(payload);
    }
}

export default new BrochureApi();