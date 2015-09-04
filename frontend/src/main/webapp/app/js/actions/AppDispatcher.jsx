import {Dispatcher} from "flux";
import assign from 'react/lib/Object.assign';

var AppDispatcher = assign(new Dispatcher(), {
    handleLocationAction: function (locationData) {
        this.dispatch({
            payload: locationData
        })
    },
    handleRequestAction: function (payload) {
        this.dispatch({
            payload: payload
        })
    }
});

export default AppDispatcher;
