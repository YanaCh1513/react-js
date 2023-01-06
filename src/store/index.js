import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { addBotMessageMiddleware } from "./middlewares/middlewares";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(
        addBotMessageMiddleware,
        thunk
    ))
)

export const persistor = persistStore(store)

// WITHOUT REDUCE-PERSIST
// export const store = createStore(
//     combineReducers({
//         profile: profileReducer,
//         chats: chatsReducer,
//         messages: messagesReducer
//     }),
//     composeEnhancers(applyMiddleware(
//         addBotMessageMiddleware,
//         thunk
//     ))
//     // window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     // window.__REDUX_DEVTOOLS_EXTENSION__() // need for redux devtools
// )

export const profileStore = createStore(profileReducer); // leave as legacy for test part of the code

