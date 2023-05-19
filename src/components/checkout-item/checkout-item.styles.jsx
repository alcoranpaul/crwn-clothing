/*
 * File: checkout-item.styles.scss
 * Project: crwn-clothing
 * File Created: Friday, 12th May 2023 3:27:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 12:11:49 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';



export const CheckoutItemContainer = styled.div`
  width: 100%; /* Set the width of the checkout item container to 100% */
  display: flex; /* Use flexbox for layout */
  min-height: 100px; /* Set a minimum height of 100px */
  border-bottom: 1px solid darkgrey; /* Add a bottom border with a dark grey color */
  padding: 15px 0; /* Add padding of 15px on the top and bottom, and 0 on the left and right */
  font-size: 20px; /* Set the font size to 20px */
  align-items: center; /* Center the items vertically */
`
export const ImageContainer = styled.div`
  width: 23%; /* Set the width of the image container to 23% */
  padding-right: 15px; /* Add right padding of 15px */

  img {
    width: 100%; /* Set the width of the image to 100% */
    height: 100%; /* Set the height of the image to 100% */
  }
`

export const RemoveButton = styled.div`
  padding - left: 12px; /* Add left padding of 12px */
  cursor: pointer; /* Change the cursor to a pointer on hover */
`

export const BaseSpan = styled.span`
  width: 23%; /* Set the width of the name, quantity, and price sections to 23% */
`

export const Quantity = styled(BaseSpan)`
  display: flex; /* Use flexbox for layout */
`

export const Value = styled.span`
  margin: 0 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;