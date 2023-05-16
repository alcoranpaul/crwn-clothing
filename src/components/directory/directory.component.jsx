/*
 * File: directory.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:09:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 16th May 2023 5:26:15 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the directory of categories
 */

import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component';

/**
 * 
 * @param {*} categories - an array of objects containing the category data
 * @returns 
 */
function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      )
      )}
    </div>
  )
}

export default Directory;