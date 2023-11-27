import React from 'react';
import logo1 from '../Assets/adidas.png';
import logo2 from '../Assets/nike.png';
import logo3 from '../Assets/timberland.png';
import logo4 from '../Assets/puma.png';
import logo5 from '../Assets/polo.png';
import logo6 from '../Assets/Blue-Adidas.png';
import logo7 from '../Assets/asics.png';
import logo8 from '../Assets/newera.png';
const RightBottom = () => {
    return (
        <div className='right-bottom'>
            <div className="bottom-title">
                <h2>Supporter</h2>
                <a href="/">View More</a>
            </div>
            <div className="logo-section">
               <img src={logo1} alt="" />
               <img src={logo2} alt="" />
               <img src={logo3} alt="" />
               <img src={logo4} alt="" />
               <img src={logo5} alt="" />
               <img src={logo6} alt="" />
               <img src={logo7} alt="" />
               <img src={logo8} alt="" />

            </div>
        </div>
    )
}

export default RightBottom
