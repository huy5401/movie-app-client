import React from 'react'
import { useEffect } from 'react'
import loadFB from '../../utils/facebook'

export default function Comment({dataHref}) {
    useEffect(() => {
        loadFB();
    },[])
    return (
        <>
            <div
                className='fb-comments'
                data-href={dataHref}
                data-width='500'
                data-numposts='5'
                data-colorschema = 'light'
            ></div>
        </>
    )
}
