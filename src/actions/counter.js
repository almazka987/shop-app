import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "./actionTypes";

export function resetCounter() {
    return (dispatch, getState) => {
        const updCounters = getState().cartReducer.counters.map((obj) => {
            const counter = {...obj};
            counter.val = 0;
            return counter;
        });
        dispatch({type: RESET_COUNTER, payload: updCounters});
    }
}

export function uploadCounters(operation, obj) {
    return (dispatch, getState) => {
        const countersArr = [...getState().cartReducer.counters];
        const index = countersArr.indexOf(obj);
        countersArr[index] = {...obj};
        if (operation === 'increment') {
            countersArr[index].val++;
            dispatch({type: INCREMENT_COUNTER, payload: countersArr});
        }
        if (operation === 'decrement') {
            countersArr[index].val--;
            dispatch({type: DECREMENT_COUNTER, payload: countersArr});
        }
    }
}

