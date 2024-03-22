import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSectionFour from '../Components/TotalAmountSectionFour'


const MatureFund = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='dass'>
                <div className='dass1'>
                    <SideBar />
                    <TotalAmountSectionFour/>
                </div>
            </div>

        </>
    )
}

export default MatureFund