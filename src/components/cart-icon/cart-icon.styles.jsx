/*
 * File: cart.styles.scss
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:42:35 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:45:21 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px; // Sets the width of the cart icon container
  height: 45px; // Sets the height of the cart icon container
  position: relative; // Sets the positioning context for child elements
  display: flex; // Displays the child elements in a flex container
  align-items: center; // Aligns the child elements vertically
  justify-content: center; // Aligns the child elements horizontally
  cursor: pointer; // Sets the cursor style to a pointer when hovering
`

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 24px; // Sets the width of the shopping icon
  height: 24px; // Sets the height of the shopping icon
`

export const ItemCount = styled.span`
  position: absolute; // Positions the item count element absolutely within the container
  font-size: 10px; // Sets the font size of the item count text
  font-weight: bold; // Sets the font weight of the item count text
  bottom: 12px; // Sets the distance from the bottom of the container
`
