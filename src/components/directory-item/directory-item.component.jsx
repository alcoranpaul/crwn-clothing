/*
 * File: category-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:03:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 16th May 2023 5:24:28 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the category item that has the background image and button title
 */


import "./directory-item.styles.scss"

/**
 * 
 * @param {*} category - an object containing the category data 
 * @returns 
 */
function DirectoryItem({ category }) {
  const { imageUrl, title } = category
  return (
    <div className="directory-item-container">
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;