/*
 * File: user.contexts.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 4:48:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 26th May 2023 7:22:47 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the user context
 */

import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

// Create a context object - actual values you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state, action) => {
    const { type, payload } = action;  // Destructure action object
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, //Spread the previous state 
                currentUser: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            throw new Error(`Unhandled action type: ${type} in userReducer`);

    }
}

const INITIAL_STATE = {
    currentUser: null
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser } = state; // Destructure currentUser from state
    const setCurrentUser = (user) => { // Create a function that will update the currentUser
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = { currentUser, setCurrentUser };

    // Unsuscribe from the listener when the component unmounts
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) { // If user is not null
                createUserDocumentFromAuth(user); // Create user document
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    // Provider - component that allows consuming components to subscribe to context changes
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}