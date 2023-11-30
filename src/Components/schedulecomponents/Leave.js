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
import { useEffect } from 'react';
import { MdFlightTakeoff } from "react-icons/md";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';


const LeaveNavbar = () => {
  const [batchRequests, setBatchRequests] = useState([]);
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(3); // Adjust the number of requests per page as needed
  const [totalPages, setTotalPages] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tutorDetails, setTutorDetails] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  function PendingLeaveRequests() {
    const startIndex = (currentPage - 1) * requestsPerPage;
    fetch("https://xapi.learn2read.co/api/tutors/pending_leaverequests"
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
        const totalItems = data.PendingLeaves.length;
        setTotalPages(Math.ceil(totalItems / requestsPerPage));

        const startIndex = (currentPage - 1) * requestsPerPage;
        const endIndex = Math.min(startIndex + requestsPerPage, totalItems);

        setBatchRequests(data.PendingLeaves.slice(startIndex, endIndex));
      })
      .catch((error) => {
        console.log('error fetching pending leave requests', error)
      });
  }

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(batchRequests.length / requestsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    PendingLeaveRequests()
    FetchLeaveBalances()
    FetchLeaveHistory()
  }, [currentPage])

  function FetchLeaveBalances() {
    fetch("https://xapi.learn2read.co/api/tutors/leave_balances"
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
        console.log('result of leave balances', data);
        setLeaveBalances(data.LeaveBalances);
      })
      .catch((error) => {
        console.log('error fetching leave balances data', error)
      });
  }

  function FetchLeaveHistory() {
    fetch("https://xapi.learn2read.co/api/tutors/leave_history"
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
        console.log('result of leave history', data);
        setLeaveHistory(data.LeaveRequests);
      })
      .catch((error) => {
        console.log('error fetching leave history data', error)
      });
  }

  useEffect(() => {
    // Fetch and set the tutor details from local storage or API
    const storedTutorDetailsString = localStorage.getItem('TutorDetails');
    const storedTutorDetailsArray = JSON.parse(storedTutorDetailsString) || [];
    setTutorDetails(storedTutorDetailsArray);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#061739">
        <CDBSidebarHeader prefix=<FaBars className='fa-times-new' onClick={toggleSidebar} />>
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
      <div className={`right-side-s-nav ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='navbar-for-user'>
          {tutorDetails.length > 0 ? (
            <ul>
              {tutorDetails.map((tutor, index) => (
                <li key={index}>{tutor.FirstName}</li>
              ))}
            </ul>
          ) : (
            <p>No tutor details available</p>
          )}
        </div>
        <div className='for-inside-right-side-s-nav'>
          <div className='inside-right-side-s-nav-leave'>
            <h4>Pending Leave Requests</h4>
            {batchRequests.map((batch, index) => (
              <div key={index} className='leave-card'>
                <div>
                  <p className='flight-leave'><MdFlightTakeoff /></p>
                </div>
                <div>
                  <p className='leave-card-para'>LEAVE:</p>
                  <p>{batch.FromDate}-{batch.ToDate}</p>
                </div>
                <div>
                  <p className='leave-card-para'>LEAVE TYPE:</p>
                  <p>{batch.LeaveType}</p>
                </div>
                <div>
                  <p className='leave-card-para'>Requested On:</p>
                  <p>{batch.CreatedAt}</p>
                </div>
                <div>
                  <p className='leave-card-para'>Status:</p>
                  <p>{batch.ApproveStatus}</p>
                </div>
                <button>...</button>
              </div>
            ))}
            <div className="pagination-container">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                <span>&larr;</span>
              </button>
              <span className="pagination-text">{currentPage} of {totalPages}</span>
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <h4 className='heading-leave-para'>Leave Balances</h4>
        <div className='second-balance-card'>
          {leaveBalances.map((leave, index) => (
            <div key={index} className={`main-balance-card ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <p className='casual-text'>Casual Leave</p>
              <div>
                <h6 className='para-balance-card'>{leave.RemainingCasualLeaves}days available</h6>
              </div>
              <div className='balance-card'>
                <div className='data-for-leave'>
                  <p className='para-leave'>AVAILABLE</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>CONSUMED</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ACCURED SO FAR</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ANNUAL QUOTA</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
              </div>
            </div>
          ))}
          {leaveBalances.map((leave, index) => (
            <div key={index} className={`main-balance-card ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <p className='casual-text'>Marriage Leave</p>
              <div>
                <h6 className='para-balance-card-two'>{leave.RemainingCasualLeaves}days available</h6>
              </div>
              <div className='balance-card'>
                <div className='data-for-leave'>
                  <p className='para-leave'>AVAILABLE</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>CONSUMED</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ACCURED SO FAR</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ANNUAL QUOTA</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
              </div>
            </div>
          ))}
          {leaveBalances.map((leave, index) => (
            <div key={index} className={`main-balance-card ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <p className='casual-text'>Sick Leave</p>
              <div>
                <h6 className='para-balance-card-three'>{leave.RemainingCasualLeaves}days available</h6>
              </div>
              <div className='balance-card'>
                <div className='data-for-leave'>
                  <p className='para-leave'>AVAILABLE</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>CONSUMED</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ACCURED SO FAR</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
                <div className='data-for-leave'>
                  <p className='para-leave'>ANNUAL QUOTA</p>
                  <p>{leave.RemainingCasualLeaves}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className='heading-leave-para'>Leave History</h4>
        {leaveHistory.map((leave, index) => (
          <div key={index} className='leave-history-card' style={{ overflowY: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th className='history-head-para'>LEAVE DATE</th>
                  <th className='history-head-para'>LEAVE TYPE</th>
                  <th className='history-head-para'>STATUS</th>
                  <th className='history-head-para'>REQUESTED BY</th>
                  <th className='history-head-para'>ACTION TAKEN ON</th>
                  <th className='history-head-para'>LEAVE NOTE</th>
                  <th className='history-head-para'>REJECT/CANCELLATION REASON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='history-inside-para'>{leave.FromDate}-{leave.ToDate}</td>
                  <td className='history-inside-para'>{leave.LeaveType}</td>
                  <td className='history-inside-para'>{leave.ApproveStatus}</td>
                  <td className='history-inside-para'>{leave.TutorName}</td>
                  <td className='history-inside-para'>{leave.CreatedAt}</td>
                  <td className='history-inside-para'>{leave.LeaveNote}</td>
                  <td className='history-inside-para'>{ }</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveNavbar;


