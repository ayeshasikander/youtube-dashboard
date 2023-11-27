import React from 'react'

const RightTop = () => {
    return (
        <div className='top-right'>
            <div className="card-title">
                <h2>Statistics</h2>
                <a href="/">View More</a>
            </div>
            <div className="rating">
                <p>Sport Name<span> Amount of Fans</span></p>
                <p>Football (Soccer)<span>3.5 Billion</span></p>
                <p>Cricket<span>2.5 Billion</span></p>
                <p>Hockey<span>2 Billion</span></p>
                <p>Tennis<span>1 Billion</span></p>
                <p>Volleyball<span>900 Million</span></p>
                {/* <p>Table Tennis<span>850 Million</span></p> */}
            </div>
        </div>
    )
}

export default RightTop
