import {ADD_TO_CART, RESET_COUNTER} from "../actions/actionTypes";

const initialState = {
    products: [
        {id: 1234, title: 'Чайник', price: 595, thumbnailUrl: 'https://full-house.by/pictures/product/big/34934_big.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'},
        {id: 1425, title: 'Электровеник', price: 124, thumbnailUrl: 'https://i2.rozetka.ua/goods/12815168/101342761_images_12815168713.jpg', description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {id: 3643, title: 'Платье', price: 554, thumbnailUrl: 'https://rentabrand.ua/wp-content/uploads/2019/08/47-440x660.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'},
        {id: 1263, title: 'Чехол для телефона', price: 355, thumbnailUrl: 'https://cs8.pikabu.ru/post_img/big/2016/03/23/9/1458745625237189400.jpg', description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {id: 3489, title: 'Набор фломастеров', price: 525, thumbnailUrl: 'https://images.ua.prom.st/2105610339_flomastery-marco-169010.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
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
