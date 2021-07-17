import React from 'react'

export default function PageFlip({gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            <button onClick={gotoNextPage}>Next</button>
        </div>
    )
}
