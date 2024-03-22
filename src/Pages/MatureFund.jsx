import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSectionTwo from '../Components/TotalAmountSectionTwo'


const MatureFund = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='dass'>
                <div className='dass1'>
                    <SideBar />
                    <TotalAmountSectionTwo/>
                </div>
            </div>

        </>
    )
}

export default MatureFund