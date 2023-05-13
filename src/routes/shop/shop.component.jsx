/*
 * File: shop.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 8:40:31 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 12th May 2023 7:51:40 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Shop page
 */
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categoriesMap.contexts";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {categoriesMap[title].map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                );
                            })};
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    );
};

export default Shop;
