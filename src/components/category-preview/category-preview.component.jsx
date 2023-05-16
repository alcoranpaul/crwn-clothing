/*
 * File: category-preview.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:03:18 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 16th May 2023 4:13:37 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import ProductCard from "../product-card/product-card.component";
import './category-preview.styles.scss'
const CategoryPreview = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <span className="title">{title.toUpperCase()}</span>
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