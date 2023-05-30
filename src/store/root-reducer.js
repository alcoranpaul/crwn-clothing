/*
 * File: root-reducer.js
 * Project: crwn-clothing
 * File Created: Saturday, 27th May 2023 10:58:46 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 2:55:54 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoryReducer } from './category/category.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer
})