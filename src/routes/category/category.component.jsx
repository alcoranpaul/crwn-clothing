/*
 * File: category.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:45:46 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categoriesMap.contexts';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]); // Re-render when category or categoriesMap changes

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />))
                }
            </CategoryContainer>

        </Fragment>
    );
}

export default Category;