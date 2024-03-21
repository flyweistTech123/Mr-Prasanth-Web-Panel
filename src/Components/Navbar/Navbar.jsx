
import React from 'react'
import './Navbar.css'
import { FaBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <>
            <div className='navbar1'>
                <div className='navbar2'>
                    <div className='navbar3'>
                        <h1>Logo</h1>
                    </div>

                    <div className='navbar4'>
                        <div className='navbar5'>
                            <FaBell  color= '#003466' size= '25'/>
                            <FaRegUserCircle   color= '#003466' size= '25' />
                            <IoSettingsOutline  color= '#003466' size= '25' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar