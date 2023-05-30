/*
 * File: user.action.js
 * Project: crwn-clothing
 * File Created: Saturday, 27th May 2023 11:27:54 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 3:03:16 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"

export const setCurrentUser = (user) => { // Create a function that will update the currentUser
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}