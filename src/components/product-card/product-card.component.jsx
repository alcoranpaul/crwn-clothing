/*
 * File: product-card.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 9:51:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 6:05:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Product Card with name, image, price and add to cart button
 */

import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartDropdownContext);
    const { name, imageUrl, price } = product;

    const addProductToCart = () => { addItemToCart(product) }


    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>

        </ProductCardContainer>
    );
}

export default ProductCard;