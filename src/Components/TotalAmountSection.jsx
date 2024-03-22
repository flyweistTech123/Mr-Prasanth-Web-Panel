import React, { useState } from 'react'
import '../Styles/TotalAmountSection.module.css'
import { TiArrowSortedDown } from "react-icons/ti";
import user from '../Assets/Vector.png'
import user1 from '../Assets/vector1.png'
import ReactApexChart from 'react-apexcharts';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const TotalAmountSection = () => {


  const [modalShow, setModalShow] = React.useState(false);

  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    setModalShow(false); // Close the modal after selection
  };
  // function PaymentModal(props) {


  //   return (
  //     <>
  //       <Modal
  //         {...props}
  //         size="md"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //         style={{ top: '70%', left: '80%', transform: 'translate(-50%, -50%)', width: '435px', height: '221px', borderRadius: '6px', overflow: 'hidden' }}
  //       >
  //         <Modal.Body>
  //           <div className='paymentModal1'>
  //             <Link to={'/dashboard'} className='paymentModal3'>
  //               <div className='paymentModal2' onClick={() => handleServiceSelection('Credit Card Processing')}>
  //                 <h6>Credit Card Processing</h6>
  //               </div>
  //             </Link>
  //             <Link to={'/open-banking-service'} className='paymentModal3'>
  //               <div className='paymentModal2' onClick={() => handleServiceSelection('Open Banking Service')}>
  //                 <h6>Open Banking Service</h6>
  //               </div>
  //             </Link>
  //             <Link to={'/crypto-payment-proccessing'} className='paymentModal3'>
  //               <div className='paymentModal22' onClick={() => handleServiceSelection('Crypto payment processing')}>
  //                 <h6>Crypto payment processing</h6>
  //               </div>
  //             </Link>
  //           </div>
  //         </Modal.Body>
  //       </Modal>
  //     </>
  //   );
  // }

  const popover = (
    <Popover id="popover-basic" style={{ width: '500px' }}>
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body style={{ width: '290px', backgroundColor: "#D9D9D9" }}>
        <div className='paymentModal1'>
          <Link to={'/dashboard'} className='paymentModal3'>
            <div className='paymentModal2' onClick={() => handleServiceSelection('Credit Card Processing')}>
              <h6>Credit Card Processing</h6>
            </div>
          </Link>
          <Link to={'/open-banking-service'} className='paymentModal3'>
            <div className='paymentModal2' onClick={() => handleServiceSelection('Open Banking Service')}>
              <h6>Open Banking Service</h6>
            </div>
          </Link>
          <Link to={'/crypto-payment-proccessing'} className='paymentModal3'>
            <div className='paymentModal2' onClick={() => handleServiceSelection('Crypto payment processing')}>
              <h6>Crypto payment processing</h6>
            </div>
          </Link>
        </div>
      </Popover.Body>
    </Popover>
  );

  const [chartData, setChartData] = useState({
    series: [{
      name: 'Net Profit',
      data: [20, 35, 47, 56, 61, 78, 63, 60, 66, 60, 60, 60]
    },],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Total Transaction',
        align: 'left'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1,
        colors: ['#7B61FF'] // Set the color of the bars here
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " "
          }
        }
      }
    }
  });


  const seriesData = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69]
  }];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3 // Change the width of the line here
    },
    title: {
      text: 'MERCHANT ACTIVITY',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }
  };




  return (
    <>
      <div className='totalamountsection1'>
        <div className='totalamountsection2'>
          <div className='totalamountsection3' >
            <div className='totalamountsection4'>
              <h6>Total Processed Amount</h6>
              <h5>₹ 110,000</h5>
            </div>
            <div className='totalamountsection4'>
              <h6>Last Settlement Date & Amount</h6>
              <div className='totalamountsection5'>
                <h4>DD/MM/YYYY</h4>
                <h5>₹ 110,000</h5>
              </div>
            </div>
          </div>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className='totalamountsection6'>
              <h6>Current Service:</h6>
              <h3>{selectedService || 'Select a Service'}<TiArrowSortedDown /></h3>
            </div>
          </OverlayTrigger>
        </div>
        <div className='totalamountsection7'>
          <div className='totalamountsection8'>
            <div className='totalamountsection9'>
              <div className='totalamountsection10'>
                <img src={user} alt="" />
                <h6>Total Customers</h6>
              </div>

              <div className='totalamountsection11'>
                <h6>100</h6>
                <div className='totalamountsection12'>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection14'></div>
                    <h6>Merchant type 1</h6>
                  </div>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection15'></div>
                    <h6>Merchant type 1</h6>
                  </div>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection16'></div>
                    <h6>Merchant type 1</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='totalamountsection8'>
            <div className='totalamountsection9'>
              <div className='totalamountsection10'>
                <img src={user1} alt="" />
                <h6>Total Transaction</h6>
              </div>

              <div className='totalamountsection11'>
                <h6>100</h6>
                <div className='totalamountsection12' style={{ marginRight: "50px" }}>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection14'></div>
                    <h6>Receivable</h6>
                  </div>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection16'></div>
                    <h6>Payable</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='totalamountsection8'>
            <div className='totalamountsection9'>
              <div className='totalamountsection10'>
                <img src={user1} alt="" />
                <h6>Pending Transaction</h6>
              </div>

              <div className='totalamountsection11'>
                <h6>50</h6>
                <div className='totalamountsection12' style={{ marginRight: "70px" }}>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection14'></div>
                    <h6>Receivable</h6>
                  </div>
                  <div className='totalamountsection13'>
                    <div className='totalamountsection16'></div>
                    <h6>Payable</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='totalamountsection17'>
          <h3>Statistics</h3>
          {/* <h3>Rolling Reserve</h3> */}

          <div className='totalamountsection18'>
            <div className='totalamountsection19'>
              <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
              </div>
              <div id="html-dist"></div>
            </div>
            <div className='totalamountsection19'>
              <div id="chart">
                <ReactApexChart options={options} series={seriesData} type="line" height={350} />
              </div>
              <div id="html-dist"></div>
            </div>
          </div>

          {/* <LatestTransactions/> */}
        </div>
      </div>
    </>
  )
}

export default TotalAmountSection