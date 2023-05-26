/*
 * File: form-input.component.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 12:23:25 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 7:38:10 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the form input component
 */

import { FormInputLabel, Input, Group } from './form-input.styles.jsx'

export default function FormInput({ label, ...otherProps }) {
    return (
        <Group>
            <Input {...otherProps} /> {/* the spread operator passes all the props to the input element */}
            {label &&
                <FormInputLabel
                    shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>}
        </Group>
    );
};