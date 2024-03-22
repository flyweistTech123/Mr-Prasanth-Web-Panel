import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SideBar } from '../Components/SideBar'
import TotalAmountSectionThree from '../Components/TotalAmountSectionThree'
import LatestTransactions from '../Components/LatestTransactions'


const RefundRequest = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='dass'>
        <div className='dass1'>
          <SideBar />
          <TotalAmountSectionThree />
        </div>

        <div className='dass2'>
          <LatestTransactions />
        </div>
      </div>

    </>
  )
}

export default RefundRequest