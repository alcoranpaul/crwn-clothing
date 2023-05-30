/*
 * File: category.reducer.js
 * Project: crwn-clothing
 * File Created: Saturday, 27th May 2023 2:49:36 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 3:03:16 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { CATEGORIES_ACTION_TYPES } from "./category.types"
export const INITIAL_STATE = {
    categoriesMap: {}
}

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;  // Destructure action object
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state, //Spread the previous state 
                categoriesMap: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            return state

    }
}