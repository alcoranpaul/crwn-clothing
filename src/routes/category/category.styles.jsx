/*
 * File: category.styles.scss
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:21:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:45:23 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr); // 4 columns with equal width 
  column-gap: 20px;
  row-gap: 50px;
`

export const CategoryTitle = styled.h2`
  font-size: 38px; /* Sets the font size to 28 pixels */
  margin-bottom: 25px; /* Adds a margin at the bottom of the title */
  text-align: center;
`

