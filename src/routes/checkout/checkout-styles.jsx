/*
 * File: checkout-styles.scss
 * Project: crwn-clothing
 * File Created: Thursday, 11th May 2023 3:56:31 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:47:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%; /* Set the width of the container */
  min-height: 90vh; /* Set the minimum height of the container */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Set the flex direction to column */
  align-items: center; /* Align items to the center */
  margin: 50px auto 0; /* Set margins */
`

export const CheckoutHeader = styled.div`
  width: 100%; /* Set the width of the header */
  padding: 10px 0; /* Set padding for the header */
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Justify content to space between */
  border-bottom: 1px solid darkgrey; /* Add a bottom border */
`

export const HeaderBlock = styled.div`
  text-transform: capitalize; /* Capitalize the text */
  width: 23%; /* Set the width of each header block */

  &:last-child {
    width: 8%; /* Set the width of the last header block */
  }
`

export const Total = styled.div`
  margin-top: 30px; /* Set top margin */
  margin-left: auto; /* Align to the right */
  font-size: 36px; /* Set font size */
`
