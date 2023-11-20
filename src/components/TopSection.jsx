import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import aana from '../Assets/aana.jpg';
const TopSection = () => {
    return (
        <div className='top-section'>
            <div className="inputbox">
                <input type="text" placeholder='Search Items & Collections' />
                <BsSearch className='i' />
            </div>
            <div className="profile-container">
                <div className="notify-icon">
                    <IoMdNotificationsOutline />
                </div>
                <div className="profile-section">
                    <img src={aana} alt="" />
                </div>
               
            </div>
        </div>
    )
}

export default TopSection
