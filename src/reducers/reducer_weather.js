import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // this create new array containing new data and all data from old state
            return [action.payload.data, ...state];
    }
    return state;
}