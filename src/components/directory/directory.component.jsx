/*
 * File: directory.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:09:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 11:40:40 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the directory of categories
 */

import { DirectoryMenuContainer } from './directory.styles'
import DirectoryItem from '../directory-item/directory-item.component';


const categories = [
  // Temporary data
  {
    id: 1,
    title: 'hats',
    imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'womens',
    imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
    rotue: 'shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens'
  },
];

/**
 * 
 * @param {*} categories - an array of objects containing the category data
 * @returns 
 */
function Directory() {



  return (
    <DirectoryMenuContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      )
      )}
    </DirectoryMenuContainer>
  )
}

export default Directory;