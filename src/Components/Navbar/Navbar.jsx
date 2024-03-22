
import React, { useState } from 'react'
import './Navbar.css'
import { FaBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../Styles/Notification.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { NotificationModal } from '../Notification/NotificationModal';

const data = [
    {
        img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
        title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Morem ipsum dolor sit amet, consectetur .",
        day: "yesterday",
        time: "10:30 AM",
    },
    {
        img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
        title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Morem ipsum dolor sit amet, consectetur .",
        day: "yesterday",
        time: "10:30 AM",
    },
    {
        img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
        title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
        desc: "Morem ipsum dolor sit amet, consectetur .",
        day: "yesterday",
        time: "10:30 AM",
    },
];

const Navbar = () => {
    const [modalShow, setModalShow] = React.useState(false);



    function PaymentModal(props) {


        return (
            <>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    style={{ top: '60%', left: '80%', transform: 'translate(-50%, -50%)', width: '519px', height: '811px', }}
                >
                    <Modal.Body>
                        <div className={styles.ModalMainDiv}>
                            <AiOutlineClose
                                onClick={() => setModalShow(false)}
                                size={25}
                                className={styles.CloseIcon}

                            />
                            <div className={styles.titleDiv}>
                                <h1>Notification</h1>
                                <BsThreeDotsVertical size={25} />
                            </div>
                            <hr style={{ height: "3px", background: "#003466" }} />
                            <p>Today's</p>
                            {data.map((ele) => (
                                <>
                                    <div className={styles.NotificationDiv}>
                                        <div>
                                            <img src={ele.img} alt="img" />
                                        </div>
                                        <div>
                                            <h1>{ele.title}</h1>
                                            <p>{ele.desc}</p>
                                            <div>
                                                <p>{ele.day}</p>
                                                <span className={styles.Time}>{ele.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ height: "2px", background: "grey" }} />
                                </>
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }


    return (
        <>
            <PaymentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='navbar1'>
                <div className='navbar2'>
                    <Link to={'/dashboard'} className='paymentModal3'>
                        <div className='navbar3'>
                            <h1>Logo</h1>
                        </div>
                    </Link>


                    <div className='navbar4'>
                        <div className='navbar5'>
                            <FaBell color='#003466' size='25' onClick={() => setModalShow(true)} />
                            <Link to={'/Profile'}>
                                <FaRegUserCircle color='#003466' size='25' />
                            </Link>
                            <IoSettingsOutline color='#003466' size='25' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar