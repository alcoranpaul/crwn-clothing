/*
 * File: category-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:03:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 5:52:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the category item that has the background image and button title
 */


import { DirectoryItemContainer, Body, BackgroundImage } from "./directory-item.styles.jsx"

/**
 * 
 * @param {*} category - an object containing the category data 
 * @returns 
 */
function DirectoryItem({ category }) {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;