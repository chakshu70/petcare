// store.ts
import { createStore } from "redux";

// Initial state
const initialState = {
    sessionid: null,
    username: null,
    isAuthenticated: false,
};

// Action types
export enum ActionInterface {
    SIGN_IN = "SIGN_IN",
    LOG_OUT = "LOG_OUT",
}

// Action interface
interface Action {
    type: ActionInterface;
    payload: any;
}

// Reducer function
const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionInterface.SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
                sessionid: action.payload.sessionid,
            };

        case ActionInterface.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                username: null,
                sessionid: null,
            };

        default:
            return state; // Return the current state if no action matches
    }
};

// Create the Redux store
const store = createStore(authReducer);

// Export the store
export default store;