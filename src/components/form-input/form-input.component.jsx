/*
 * File: form-input.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 12:23:25 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 12:36:08 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the form input component
 */

import './form-input.styles.scss'

export default function FormInput({ label, ...otherProps }) {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} /> {/* the spread operator passes all the props to the input element */}
            {label && <label className={`${otherProps.value.length ? `shrink` : ''} form-input-label`}>{label}</label>}
        </div>
    );
};