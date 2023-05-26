/*
 * File: directory.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:09:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 5:44:34 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the directory of categories
 */

import { DirectoryMenuContainer } from './directory.styles'
import DirectoryItem from '../directory-item/directory-item.component';

/**
 * 
 * @param {*} categories - an array of objects containing the category data
 * @returns 
 */
function Directory({ categories }) {
  return (
    <DirectoryMenuContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      )
      )}
    </DirectoryMenuContainer>
  )
}

export default Directory;