import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
//import twitterReducer from "../reducers/twitterReducer";
//
// const initialState = {
//     user: {
//         avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
//         name: 'Monster',
//     },
//     stats: {
//         followers: 0,
//         following: 0
//     }
// };

export const store = createStore(rootReducer);