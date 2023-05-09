/*
 * File: shop.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 8:40:31 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 10:04:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Shop page
 */
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.contexts";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                );
            })};
        </div>
    );
};

export default Shop;
