/*
 * File: cart-item.styles.scss
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 9:19:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:52:58 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%; /* Set the width to 100% */
  display: flex; /* Use flexbox for layout */
  height: 80px; /* Set the height to 80px */
  margin-bottom: 15px; /* Add margin at the bottom */

  /* Styles for the image element */
  img {
    width: 30%; /* Set the width of the image to 30% of the container */
  }
`

export const ItemDetailes = styled.div`
  width: 70%; /* Set the width of the item details to 70% of the container */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Arrange elements in a column */
  align-items: flex-start; /* Align items to the start of the container horizontally */
  justify-content: center; /* Center items vertically */
  padding: 10px 20px; /* Add padding */
  
  /* Styles for the name element */
  .name {
    font-size: 16px; /* Set the font size to 16px */
  }
`
