import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { addBotMessageMiddleware } from "./middlewares/middlewares";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer
    }),
    composeEnhancers(applyMiddleware(
        addBotMessageMiddleware,
        thunk
    ))
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__() // need for redux devtools
)

export const profileStore = createStore(profileReducer); // leave as legacy for test part of the code

