import {REMOVE_ITEM} from "./actionTypes";

export function removeItem(id) {
    return (dispatch, getState) => {
        const updCounters = getState().cartReducer.counters.filter(val => val.id !== id);
        dispatch({type: REMOVE_ITEM, payload: updCounters});
    }
}
