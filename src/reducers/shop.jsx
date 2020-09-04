import {ADD_TO_CART, RESET_COUNTER} from "../actions/actionTypes";

const initialState = {
    products: [
        {id: 1234, title: 'Чайник', price: 595, thumbnailUrl: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'},
        {id: 1425, title: 'Электровеник', price: 124, thumbnailUrl: '', description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {id: 3643, title: 'Платье', price: 554, thumbnailUrl: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'},
        {id: 1263, title: 'Чехол для телефона', price: 355, thumbnailUrl: '', description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {id: 3489, title: 'Набор фломастеров', price: 525, thumbnailUrl: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    ]
};

export default function shopReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return state;
            /*return {
                ...state, quiz: [...state.quiz, action.item]
            };*/
        case RESET_COUNTER:
            return state;
            /*return {
                ...state, quiz: []
            };*/
        default: return state;
    }
}
