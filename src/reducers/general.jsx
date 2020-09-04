import {UPDATE_GENERAL_DATA} from "../actions/actionTypes";

const initialState = {
    currentPageTitle: 'Страница не найдена',
    pages: [
        {id: 8906, pathname: '/', title: 'Магазин'},
        {id: 8096, pathname: '/cart', title: 'Корзина'},
        {id: 8068, pathname: '', title: 'Страница не найдена'},
    ]
};

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_GENERAL_DATA:
            return {
                ...state, currentPageTitle: action.payload
            };
        default: return state;
    }
}
