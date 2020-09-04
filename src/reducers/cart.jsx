import {DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_ITEM, RESET_COUNTER} from "../actions/actionTypes";

const initialState = {
    counters: [
        {id: 1, val: 0, title: 'Велосипед горный'},
        {id: 2, val: 0, title: 'Трусики'},
        {id: 3, val: 0, title: 'Банки для сыпучих'},
        {id: 4, val: 0, title: 'Соляная лампа'},
    ]
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_ITEM:
        case RESET_COUNTER:
        case DECREMENT_COUNTER:
        case INCREMENT_COUNTER:
            return {
                ...state, counters: action.payload
            };
        default: return state;
    }
}
