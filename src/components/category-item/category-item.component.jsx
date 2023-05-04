/*
 * File: category-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:03:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 4th May 2023 12:11:13 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the category item that has the background image and button title
 */


import "./category-item.styles.scss"

/**
 * 
 * @param {*} category - an object containing the category data 
 * @returns 
 */
function CategoryItem({ category }) {
  const { imageUrl, title } = category
  return (
    <div className="category-container">
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;