/*
 * File: category-preview.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:03:18 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 16th May 2023 5:28:39 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import './category-preview.styles.scss'
const CategoryPreview = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className='nav-link' to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {products
                    .filter((product, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />))}
            </div>
        </div>
    );
}

export default CategoryPreview;