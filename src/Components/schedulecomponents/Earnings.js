import React, { useEffect, useState } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';
import { FaBars } from 'react-icons/fa';
import { FaRegAddressCard } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdFaceRetouchingOff } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";

const EarningsNavbar = () => {
  const [batchRequests, setBatchRequests] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate('')


  function FetchPending() {
    fetch("https://xapi.learn2read.co/api/tutors/get_tutor_earnings"
      , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${localStorage.getItem('token')}`
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('result of get pending', data);
        setBatchRequests(data.Tutors_Earnings);
      })
      .catch((error) => {
        console.log('error fetching pending data', error)
      });
    setActiveButton('Pending');
  }

  useEffect(() => {
    FetchPending()
  }, [])

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#061739">
        <CDBSidebarHeader prefix=<FaBars className='fa-times-new' onClick={toggleSidebar}/>>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src='https://x.learn2read.co/static/media/logo.49b6abccd0619643ecba3ed3e782bf9c.svg' alt='no-data'></img>
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <div className='p-a-design'>
            <p><BsCalendar3 /></p>
            <NavLink className='nav-item' to='/calender'>Calender</NavLink>
          </div>
          <div className='p-a-design'>
            <p><FaRegAddressCard /></p>
            <NavLink className='nav-item' to='/batches'>Batches</NavLink>
          </div>
          <div className='p-a-design'>
            <p><IoBookSharp /></p>
            <NavLink className='nav-item' to='/coursebatches'>Courses</NavLink>
          </div>
          <div className='p-a-design'>
            <p><FaMoneyBillAlt /></p>
            <NavLink className='nav-item' to='/earnings'>Earnings</NavLink>
          </div>
          <div className='p-a-design'>
            <p><MdFaceRetouchingOff /></p>
            <NavLink className='nav-item' to='/leave'>Leave</NavLink>
          </div>
          <div className='p-a-design'>
            <p><MdOutlineEventAvailable /></p>
            <NavLink className='nav-item' to='/tutoravailability'>TutorAvailability</NavLink>
          </div>
          <div className='p-a-design'>
            <p><HiOutlineLogout /></p>
            <NavLink className='nav-item' to='/loginpage'>Logout</NavLink>
          </div>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className={`right-side-s-nav-course ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='for-inside-right-side-s-nav'>
          <div className='inside-right-side-s-nav' style={{ overflowY: 'auto' }}>
            <h4>Earnings</h4>
            <table>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>BATCH NAME</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>COURSE NAME</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>TYPE</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>AMOUNT</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>PAYMENT</th>                </tr>
              </thead>
              <tbody>
                {
                  batchRequests.map((batch, index) => (
                    <tr key={index}>
                      <td>{batch.BatchName}</td>
                      <td>{batch.CourseName}</td>
                      <td>{batch.EarningType}</td>
                      <td className='rupee-td'><LiaRupeeSignSolid className='rupee-sign'/>{batch.Amount}</td>
                      <td>{''}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EarningsNavbar;


