/*
 * File: directory.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 6:09:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 26th May 2023 4:02:12 pm
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
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    rotue: 'shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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