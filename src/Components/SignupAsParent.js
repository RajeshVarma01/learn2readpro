import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoPerson, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { IoEarth } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";

const SignupAsParent = () => {
    const [data, setData] = useState([]);
    const [getState, setState] = useState([]);
    const [userData, setUserData] = useState({
        FirstName: '',
        LastName: '',
        MobileNumber: localStorage.getItem('mobileno') || '',
        SecondaryMobileNo: '',
        EmailID: '',
        Password: '',
        Address: '',
        Pincode: '',
        State: '',
        Country: '',
        CountryCode: localStorage.getItem('countrycode') || '',
        SecondaryMobNo_CountryCode: localStorage.getItem('countrycode') || '',
    });

    const navigate = useNavigate('');

    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const countryOptions = [...new Set(data.map((item) => item.country))];

    const handleCountry = (event) => {
        const value = event.target.value;
        let states = data.filter((state) => state.country === value);
        states = [...new Set(states.map((item) => item.name))];
        states.sort();

        setState(states);
        setUserData((prev) => ({ ...prev, Country: value }));
    };

    const handleState = (event) => {
        const value = event.target.value;
        setUserData((prev) => ({ ...prev, State: value }));
    };

    const changeUserHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any additional form submission logic if needed
    };

    const createUser = () => {
        console.log(userData);
        fetch('https://xapi.learn2read.co/api/parent/signup', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('result', result);
        });
    };

    return (
        <div className='signup-page'>
            <div className='signup-page-left'>
                <div className='signup-top-image'>
                    <img src='https://x.learn2read.co/static/media/logo.49b6abccd0619643ecba3ed3e782bf9c.svg' alt=''></img>
                </div>
                <div className='inside-signup-left'>
                    <h1>Welcome To Learn2Read</h1>
                    <p>With our interactive teaching methodologies, we ensure the child learns the right words in the right way with the concepts of easy learning from letter sound with blending to improving their vocabulary and language skills.</p>
                    <img className='signup-girl' src='https://x.learn2read.co/static/media/signup.55686e1d222befa1311bb26dc8728751.svg' alt=''></img>
                </div>
            </div>
            <div className='signup-page-right'>
                <button className='back-to-acc-new' onClick={() => navigate('/')}>Back to Home</button>
                <form className='right-signup-twoo' onSubmit={handleSubmit}>
                    <h2 className='acc-create'>Create an Account</h2>
                    <div className='scroll-div'>
                        <div className='icon-data'>
                            <p><IoPerson color='#FFF4A3' /></p>
                            <input type='text' name='FirstName' className='mobile-input' placeholder='First Name' autoFocus onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><IoPerson color='#FFF4A3' /></p>
                            <input type='text' name='LastName' className='mobile-input' placeholder='Last Name' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p className='sel-para'>{localStorage.getItem('countrycode')}</p>
                            <input type='number' name='MobileNumber' className='mobile-input' placeholder='Mobile Number' disabled value={localStorage.getItem('mobileno')}></input>
                        </div>
                        <div className='icon-data'>
                            <p className='sel-para'>{localStorage.getItem('countrycode')}</p>
                            <input type='number' name='SecondaryMobileNo' className='mobile-input' placeholder='Alternative Mobile Number(optional)' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><MdOutlineEmail color='#FFF4A3' /></p>
                            <input type='email' name='EmailID' className='mobile-input' placeholder='Email' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><FaLock color='#FFF4A3' /></p>
                            <input type='password' name='Password' className='mobile-input' placeholder='Password' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><FaLock color='#FFF4A3' /></p>
                            <input type='password' name='Password' className='mobile-input' placeholder='Confirm Password' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><IoLocationOutline color='#FFF4A3' /></p>
                            <input type='text' name='Address' className='mobile-input' placeholder='Address' onChange={changeUserHandler}></input>
                        </div>
                        <div className='icon-data'>
                            <p><IoEarth color='#FFF4A3' /></p>
                            <select className='sel-drop'
                                value={userData.Country}
                                onChange={handleCountry}
                                style={{ border: 'none', outline: 'none' }}
                            >
                                <option value="" disabled>Select Country</option>
                                {countryOptions.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='icon-data'>
                            <p><FaBuildingColumns color='#FFF4A3' /></p>
                            <select className='sel-drop'
                                value={userData.State}
                                onChange={handleState}
                                style={{ border: 'none', outline: 'none' }}
                            >
                                <option value="" disabled>Select State</option>
                                {getState.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='icon-data'>
                            <p><BiTargetLock color='#FFF4A3' /></p>
                            <input type='number' name='Pincode' className='mobile-input' placeholder='Pincode' onChange={changeUserHandler}></input>
                        </div>
                        <button className='login-btn' onClick={createUser}>Create An Account</button>
                        <div className='sel-or'>
                            <p className='or-with'>OR</p>
                            <button className='otp-btn' onClick={() => navigate('/loginpage')}>Login with Password</button>
                        </div>
                        <div className='right-signup-three'>
                            <p>Already a member?</p>
                            <button onClick={() => navigate('/loginpage')}>Login</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default SignupAsParent
