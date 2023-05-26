/*
 * File: shop.styles.scss
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 10:03:53 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:50:22 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // Repeat 4 times with 1fr
    column-gap: 10px;
    row-gap: 50px;
`