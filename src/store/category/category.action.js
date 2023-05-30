/*
 * File: category.action.js
 * Project: crwn-clothing
 * File Created: Saturday, 27th May 2023 2:49:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 6:11:20 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const setCategoriesMap = (categoriesMap) => { // Create a function that will update the currentUser
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
}