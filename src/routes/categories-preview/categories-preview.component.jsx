/*
 * File: categories-preview.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 16th May 2023 4:16:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 16th May 2023 4:18:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categoriesMap.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </Fragment>
    );
};

export default CategoriesPreview;
