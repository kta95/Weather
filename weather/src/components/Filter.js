import React from 'react'

const Filter = (props) => {
    return (
        <>
            <p>find countries <input type="text" value={props.name} onChange={props.handler} /></p>
        </>
    )
}

export default Filter