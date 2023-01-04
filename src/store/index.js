import { createStore } from "redux";
import { profileReducer } from "./profile/reducer";

export const profileStore = createStore(profileReducer);
