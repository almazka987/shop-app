import {UPDATE_GENERAL_DATA} from "./actionTypes";

export function updateSettingsByUrl(url) {
    return (dispatch, getState) => {
        const data = getState().generalReducer.pages;
        data.forEach(function(obj) {
            if (obj.pathname === url) {
                dispatch({type: UPDATE_GENERAL_DATA, payload: obj.title});
            }
        });
    }
}
