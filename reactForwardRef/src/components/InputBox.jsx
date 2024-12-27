import React from 'react'

const InputBox = React.forwardRef((props, ref) =>{
    return (
        <input
     type='text'
     ref={ref}
    {...props}
    />
    )
})



export default InputBox