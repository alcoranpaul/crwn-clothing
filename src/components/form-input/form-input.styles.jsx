/*
 * File: form-input.style.scss
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 12:23:36 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 7:43:03 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Styles for the form input component
 */

import styled, { css } from 'styled-components';

// Define variables
const subColor = 'grey';
const mainColor = 'black';

// Define a mixin
const shrinkLabelStyles = css`            // Mixin to set specific styles for shrinking labels
  top: -14px;                       // Position the label above the input
  font-size: 12px;                // Set font size to 12 pixels
  color: ${mainColor};             // Set text color to main-color value
`

export const FormInputLabel = styled.label`
  color: ${subColor};            // Set text color to sub-color value
  font-size: 16px;              // Set font size to 16 pixels
  font-weight: normal;          // Set font weight to normal
  position: absolute;           // Positioning absolute
  pointer-events: none;         // Disable pointer events on the label
  left: 5px;                    // Position 5 pixels from the left
  top: 10px;                    // Position 10 pixels from the top
  transition: 300ms ease all;   // Transition effect with 300ms duration
    
  ${({ shrink }) => shrink && shrinkLabelStyles} // If the 'shrink' prop is true, apply the shrinkLabel mixin
  
`

export const Input = styled.input`
  background: none;             // No background
  background-color: white;      // Set background color to white
  color: ${subColor};            // Set text color to sub-color value
  font-size: 18px;              // Set font size to 18 pixels
  padding: 10px 10px 10px 5px;  // Set padding values for the input
  display: block;               // Display as a block element
  width: 100%;                  // Set width to 100%
  border: none;                 // No borders
  border-radius: 0;             // No border radius
  border-bottom: 1px solid ${subColor};  // Bottom border with sub-color value
  margin: 25px 0;               // Margin of 25 pixels on top and bottom
    
  &:focus {                     // Styles when the input is in focus
    outline: none;              // Remove outline
  }
    
  &:focus ~ ${FormInputLabel} { // Styles for the label when the input is in focus
    ${shrinkLabelStyles};     // Include the shrinkLabel mixin to apply styles
  }
`
export const Group = styled.div`
  position: relative;             // Positioning relative to the parent
  margin: 45px 0;                 // Margin of 45 pixels on top and bottom
  input[type = 'password'] {        // Styles for input fields with type 'password'
    letter-spacing: 0.3em;        // Set letter spacing to 0.3em
  }
`