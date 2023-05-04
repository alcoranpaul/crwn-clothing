/*
 * File: directory.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:09:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 4th May 2023 12:09:50 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the directory of categories
 */

import './directory.styles.scss'
import CategoryItem from '../category-item/category-item.component';

/**
 * 
 * @param {*} categories - an array of objects containing the category data
 * @returns 
 */
function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      )
      )}
    </div>
  )
}

export default Directory;