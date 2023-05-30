/*
 * File: category-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:03:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 11:40:37 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the category item that has the background image and button title
 */


import { DirectoryItemContainer, Body, BackgroundImage } from "./directory-item.styles.jsx"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @param {*} category - an object containing the category data 
 * @returns 
 */
function DirectoryItem({ category }) {
  const { imageurl, title, route } = category
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;