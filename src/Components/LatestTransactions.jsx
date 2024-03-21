import React, { useState } from 'react'
import { TbFilterDown } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { TfiImport } from "react-icons/tfi";
import { TfiExport } from "react-icons/tfi";
import { IoEye } from "react-icons/io5";
import { PaymentPendingModal } from './PaymentPendingModal';
import { DeclineModal } from './DeclineModal';


const transactionsData = [
    {
        id: 1,
        merchantName: 'Loren Ipsum 1',
        date: '01/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Cheque',
        amount: '+ ₹ 5000',
        status: 'Complete'
    },
    {
        id: 2,
        merchantName: 'Loren Ipsum 2',
        date: '02/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'UPI',
        amount: '+ ₹ 7000',
        status: 'Pending'
    },
    {
        id: 3,
        merchantName: 'Loren Ipsum 3',
        date: '03/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Credit Card',
        amount: '- ₹ 2000',
        status: 'Cancel'
    },
    {
        id: 4,
        merchantName: 'Loren Ipsum 4',
        date: '04/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Cheque',
        amount: '+ ₹ 3000',
        status: 'Complete'
    },
    {
        id: 5,
        merchantName: 'Loren Ipsum 5',
        date: '05/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'UPI',
        amount: '+ ₹ 6000',
        status: 'Pending'
    },
    {
        id: 6,
        merchantName: 'Loren Ipsum 6',
        date: '06/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Credit Card',
        amount: '- ₹ 4000',
        status: 'Cancel'
    },
    {
        id: 7,
        merchantName: 'Loren Ipsum 7',
        date: '07/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Cheque',
        amount: '+ ₹ 2000',
        status: 'Complete'
    },
    {
        id: 8,
        merchantName: 'Loren Ipsum 8',
        date: '08/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'UPI',
        amount: '+ ₹ 9000',
        status: 'Pending'
    },
    {
        id: 9,
        merchantName: 'Loren Ipsum 9',
        date: '09/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Credit Card',
        amount: '- ₹ 1000',
        status: 'Cancel'
    },
    {
        id: 10,
        merchantName: 'Loren Ipsum 10',
        date: '10/01/YYYY',
        time: '10:30 AM',
        transactionMode: 'Cheque',
        amount: '+ ₹ 8000',
        status: 'Complete'
    },
    // Add more transaction objects as needed
];


const getAmountColor = (amount) => {
    if (amount.startsWith('+')) {
        return '#007C35'; // Positive amount, color green
    } else if (amount.startsWith('-')) {
        return '#DD0606'; // Negative amount, color red
    } else {
        return '#F6B100'; // Other cases, color yellow
    }
};

const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
        case 'complete':
            return '#007C35';
        case 'pending':
            return '#F6B100';
        case 'cancel':
            return '#DD0606';
        default:
            return 'inherit';
    }
};




const LatestTransactions = () => {
    const [pendingModal, setPendingModal] = useState(false);


    const HandlePending = () => {
        setPendingModal(!pendingModal);
    };
    return (
        <>  
        <DeclineModal
            OpenModal={pendingModal}
            HandleModal={HandlePending}
        />
            <div className='latesttransactions1'>
                <div className='latesttransactions1'>
                    <div className='latesttransactions2'>
                        <h6>Latest Transactions</h6>

                        <div className='latesttransactions3'>
                            <TbFilterDown color='#000000' size="25" />
                            <BsFilterLeft color='#000000' size="25" />
                            <button><TfiImport />Import</button>
                            <button><TfiExport />Export</button>
                        </div>
                    </div>

                    <div className='latesttransactions4'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Merchant Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Transaction Mode</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Payment Track</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionsData.map(transaction => (
                                    <tr key={transaction.id}>
                                        <td>{transaction.merchantName}</td>
                                        <td>{transaction.date}</td>
                                        <td>{transaction.time}</td>
                                        <td>{transaction.transactionMode}</td>
                                        <td style={{ color: getAmountColor(transaction.amount) }}>{transaction.amount}</td>
                                        <td style={{ color: getStatusColor(transaction.status) }}>{transaction.status}</td>
                                        <td onClick={HandlePending}><IoEye color='#003466' size={25} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='latesttransactions5'>
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestTransactions