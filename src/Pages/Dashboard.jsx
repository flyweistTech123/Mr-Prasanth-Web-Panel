import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSection from '../Components/TotalAmountSection'
import LatestTransactions from '../Components/LatestTransactions'
const Dashboard = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='dass'>
                <div className='dass1'>
                    <SideBar />
                    <TotalAmountSection />
                </div>

                <div className='dass2'>
                    <LatestTransactions />
                </div>
            </div>

        </>
    )
}

export default Dashboard