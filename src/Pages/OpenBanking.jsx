import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSectionFive from '../Components/TotalAmountSectionFive'


const OpenBanking = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='dass'>
                <div className='dass1'>
                    <SideBar />
                    <TotalAmountSectionFive/>
                </div>
            </div>

        </>
    )
}

export default OpenBanking