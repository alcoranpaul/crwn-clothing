/*
 * File: user.reducer.js
 * Project: crwn-clothing
 * File Created: Saturday, 27th May 2023 10:59:13 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 2:55:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;  // Destructure action object
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, //Spread the previous state 
                currentUser: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            return state

    }
}