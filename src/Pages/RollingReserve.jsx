import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSectionone from '../Components/TotalAmountSectionone'


const RollingReserve = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='dass'>
                <div className='dass1'>
                    <SideBar />
                    <TotalAmountSectionone/>
                </div>
            </div>

        </>
    )
}

export default RollingReserve