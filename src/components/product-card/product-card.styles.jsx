/*
 * File: product-card.styles.scss
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 9:51:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 6:05:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Product Card Styles
 */

import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;                      /* Set width to 100% */
  height: 5%;                       /* Set height to 5% */
  display: flex;                    /* Display as a flex container */
  justify-content: space-between;   /* Space items evenly along the container */
  font-size: 18px;                  /* Set font size to 18px */ 
`

export const Name = styled.span`
  width: 90%;                      /* Set width to 90% */
  margin-bottom: 15px;             /* Set margin bottom to 15px */
`

export const Price = styled.span`
  width: 10%;                      /* Set width to 10% */
`

export const ProductCardContainer = styled.div`
  width: 100%;                        /* Set width to 100% */
  display: flex;                      /* Display as a flex container */
  flex-direction: column;             /* Set flex-direction to column */
  height: 350px;                      /* Set height to 350px */
  align-items: center;                /* Center align items horizontally */
  position: relative;                 /* Set position to relative */
  
  img {
    width: 100%;                      /* Set width to 100% */
    height: 95%;                      /* Set height to 95% */
    object-fit: cover;                /* Scale and crop image to cover the container */
    margin-bottom: 5px;               /* Set margin bottom to 5px */
  }
  
  button {
    width: 80%;                       /* Set width to 80% */
    opacity: 0.7;                     /* Set opacity to 0.7 */
    position: absolute;               /* Set position to absolute */
    top: 255px;                       /* Set top position to 255px */
    display: none;                    /* Hide the button */
  }
  
  &:hover {
    img {
      opacity: 0.8;                   /* Set opacity to 0.8 on hover */
    }
    button {
      opacity: 0.85;                  /* Set opacity to 0.85 on hover */
      display: flex;                  /* Show the button */
    }
  }
`
