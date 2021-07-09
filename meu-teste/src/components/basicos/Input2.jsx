import React, { useState } from 'react'

export default props => {

    const [value, setValue] = useState('Inicial')

    function mudar(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>{value}</h2>

            <div>
                <input type="text" onChange={mudar} />
            </div>
        </div>
    )
}