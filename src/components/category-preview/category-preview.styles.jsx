/*
 * File: category-preview.sty;es.scss
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:03:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:57:15 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex; /* Displays the container as a flex container */
  flex-direction: column; /* Sets the flex direction to column */
  margin-bottom: 30px; /* Adds a margin at the bottom of the container */
  padding: 10px;
 `

export const Title = styled.h2`
  font-size: 28px; /* Sets the font size to 28 pixels */
  margin-bottom: 25px; /* Adds a margin at the bottom of the title */
  cursor: pointer; /* Changes the cursor to a pointer when hovering over the title */
 `

export const Preview = styled.div`
  display: grid; /* Displays the element as a grid container */
  grid-template-columns: repeat(4, 1fr); /* Defines a grid with 4 equal-width columns */
  column-gap: 20px; /* Sets the gap between columns to 20 pixels */
  margin: 0px 10px;
 `

