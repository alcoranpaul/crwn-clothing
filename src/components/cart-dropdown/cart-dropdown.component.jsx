/*
 * File: cart-dropdown.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:52:05 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 7:54:38 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import Button from '../button/Button.component';
import './cart-dropdown.styles.scss'


const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>Checkout</Button>
        </div>
    );
}

export default CartDropdown;