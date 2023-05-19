/*
 * File: product-card.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 9:51:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 18th May 2023 6:47:42 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Product Card with name, image, price and add to cart button
 */

import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartDropdownContext);
    const { name, imageUrl, price } = product;

    const addProductToCart = () => { addItemToCart(product) }


    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>

        </div>
    );
}

export default ProductCard;