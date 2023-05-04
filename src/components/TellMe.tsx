import React, {} from 'react'

export function TellMe(
    {
        value, 
        setValue
    }:{
        value:string, 
        setValue : (value:string)=>void
    }
) : JSX.Element{

    return <textarea 
        style={{
            height:'100%',
            width:'100%',
            fontFamily:'Courier New',
            fontSize:'24px'
        }}
        value={value} 
        onChange={(e) => setValue(e.target.value)}
    />
}