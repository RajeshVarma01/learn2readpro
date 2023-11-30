import React, { useState } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';
import { FaBars } from 'react-icons/fa';
import { FaRegAddressCard } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdFaceRetouchingOff } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const CalenderNavbar = () => {
  const [batchRequests, setBatchRequests] = useState([]);

  function FetchPending() {
    fetch("https://xapi.learn2read.co/api/tutors/get_batch_requests?IsTutorAccepted=2&Status=1"
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
        setBatchRequests(data.ScheduleClasess);
      })
      .catch((error) => {
        console.log('error fetching pending data', error)
      });
  }

  function FetchOngoing() {
    fetch('https://xapi.learn2read.co/api/tutors/get_batch_requests?IsTutorAccepted=1&Status=1'
      , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${localStorage.getItem('token')}`
        },
      },
    ).then((response) => response.json())
      .then((data) => {
        console.log('result of get ongoing', data);
        setBatchRequests(data.ScheduleClasess);
      })
      .catch((error) => {
        console.log('error fetching ongoing data', error)
      });
  }

  function FetchRejected() {
    fetch('https://xapi.learn2read.co/api/tutors/get_batch_requests?IsTutorAccepted=2&Status=1'
      , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${localStorage.getItem('token')}`
        },
      },
    ).then((response) => response.json())
      .then((data) => {
        console.log('result of get rejected', data);
        setBatchRequests(data.ScheduleClasess);
      })
      .catch((error) => {
        console.log('error fetching rejected data', error)
      });
  }

  function FetchAccepted() {
    fetch('https://xapi.learn2read.co/api/tutors/get_batch_requests?IsTutorAccepted=1&Status=3'
      , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${localStorage.getItem('token')}`
        },
      },
    ).then((response) => response.json())
      .then((data) => {
        console.log('result of get accepted', data);
        setBatchRequests(data.ScheduleClasess);
      })
      .catch((error) => {
        console.log('error fetching accepted data', error)
      });
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#061739">
        <CDBSidebarHeader prefix=<FaBars className='fa-times-new' />>
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
      <div className='right-side-s-nav'>
        <div className='for-inside-right-side-s-nav'>
          <div className='inside-right-side-s-nav'>
            <h4>Batches</h4>
            <div className='batches-table'>
              <button onClick={FetchPending}>Pending</button>
              <button onClick={FetchOngoing}>Ongoing</button>
              <button onClick={FetchRejected}>Rejected</button>
              <button onClick={FetchAccepted}>Finished</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>BATCH NAME</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>BATCH SIZE</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>COURSE NAME</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>CREATED AT</th>
                  <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                  batchRequests.map((batch, index) => (
                      <tr key={index}>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>{ }</td>
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
};

export default CalenderNavbar;

