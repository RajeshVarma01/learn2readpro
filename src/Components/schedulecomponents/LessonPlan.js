import React, { useState } from 'react'
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
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LessonPlan = () => {
    const { courseID } = useParams();
    const [batchRequests, setBatchRequests] = useState([]);

    const navigate = useNavigate('')

    const apiUrl = `https://xapi.learn2read.co/api/tutors/get_lessonplan_by_course/${courseID}`;

    function FetchPending() {
        fetch(apiUrl, {
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
            setBatchRequests(data.LessonPlans);
          })
          .catch((error) => {
            console.log('error fetching pending data', error)
          });
      }
    
      useEffect(() => {
        FetchPending()
      }, [])
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
            <div className='right-side-s-nav' style={{ maxHeight: '550px', overflowY: 'auto' }}>
                <div className='for-inside-right-side-s-nav'>
                    <div className='inside-right-side-s-nav'>
                    <button className='lesson-plan-back-btn' onClick={() => navigate('/coursebatches')}>Back</button>
                        <h4>Lesson Plan</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>PLAN NUMBER</th>
                                    <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>TOPIC</th>
                                    <th style={{ border: '1px solid #ddd', backgroundColor: '#1E87DB', padding: '8px', color: 'white', fontWeight: '400', textAlign: 'center' }}>LESSON PPT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    batchRequests.map((batch, index) => (
                                        <tr key={index}>
                                            <td>{batch.PlanNumber}</td>
                                            <td>{batch.Topic}</td>
                                            <td><img className='batch-req-img' src='https://x.learn2read.co/static/media/ppt.e35aa10a1f6f416437fa881d044b7b03.svg' alt='no-img'></img></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonPlan
