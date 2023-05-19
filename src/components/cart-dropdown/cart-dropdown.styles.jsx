/*
 * File: cart-dropdown.styles.scss
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:52:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 12:19:43 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const CartdropdownContainer = styled.div`
  position: absolute; // Positions the cart dropdown container absolutely
  width: 240px; // Sets the width of the cart dropdown container
  height: 340px; // Sets the height of the cart dropdown container
  display: flex; // Displays the child elements in a flex container
  flex-direction: column; // Sets the flex direction to column
  padding: 20px; // Sets the padding around the content
  border: 1px solid black; // Sets a 1px solid black border
  background-color: white; // Sets the background color to white
  top: 90px; // Positions the top edge of the container at 90px from the top of the viewport
  right: 40px; // Positions the right edge of the container at 40px from the right of the viewport
  z-index: 5; // Sets the stacking order of the element relative to other elements

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto; // Sets the margin above the button to push it to the bottom of the container
  }
 `

export const EmptyMessage = styled.span`
  font-size: 18px; // Sets the font size of the empty message text
  margin: 50px auto; // Sets the margin around the empty message text, with automatic horizontal centering

 `

export const CartItems = styled.div`
  height: 240px; // Sets the height of the cart items container
  display: flex; // Displays the child elements in a flex container
  flex-direction: column; // Sets the flex direction to column
  overflow-y: scroll; // Enables scroll behavior for overflowing content
  overflow-x: hidden; // Disables scroll behavior for overflowing content
 `



