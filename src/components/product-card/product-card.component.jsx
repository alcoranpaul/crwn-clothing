/*
 * File: product-card.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 9:51:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 9:57:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Product Card with name, image, price and add to cart button
 */

import './product-card.styles.scss'
import Button from '../button/Button.component';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>

        </div>
    );
}

export default ProductCard;