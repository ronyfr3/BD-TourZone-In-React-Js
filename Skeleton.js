import React from 'react'
import './Skeleton.css'

const Skeleton = () => {
    return (
        <div className='wrap'>
        <div className='skeleton'>
            <div className='lines'>
                <div className='line line-1'></div>
                <div className='line line-2'></div>
                <div className='line line-3'></div>
                <div className='line line-4'></div>
                <div className='line line-5'></div>
                <div className='line line-6'></div>
                <div className='line line-7'></div>
            </div>
        </div>
     </div>
    )
}

export default Skeleton
