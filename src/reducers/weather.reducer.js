import { FETCH_WEATHER } from "../actions";

export default function(state = [], { type, payload }) {
    switch (type) {
        case FETCH_WEATHER:
            return [payload.data, ...state];
    }

    return state;
}
