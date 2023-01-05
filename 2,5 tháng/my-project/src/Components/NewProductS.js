import React, { useState } from 'react'

const NewProductS = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false)
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div class="col-md-5">
            <div>
                <label>{label}</label>
                <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
                <span>{errorMessage}</span>
            </div>
        </div >
    )
}

export default NewProductS