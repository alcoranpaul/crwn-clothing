/*
 * File: category-preview.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:03:18 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:57:39 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'
const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <Title>
                <Link className='nav-link' to={title}>
                    {title.toUpperCase()}
                </Link>
            </Title>
            <Preview>
                {products
                    .filter((product, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />))}
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;