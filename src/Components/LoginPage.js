import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Common'
import { Country } from 'country-state-city'
import OTPInput from 'react-otp-input'

const LoginPage = () => {
    const [show, setShow] = useState('')
    const [selected, setSelected] = useState('')
    const [parent, setParent] = useState({})
    const [teacher, setTeacher] = useState('')
    // const [forgotPass, setForgotPass] = useState('')
    const [loginData, setLoginData] = useState('')
    const [country, setCountry] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    const [mobile, setMobile] = useState('')
    const [otp, setOtp] = useState('')
    const [showOtp, setShowOtp] = useState('')
    const [createAccount, setCreateAccount] = useState('')
    const [countryError, setCountryError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [showGenerateOTP, setShowGenerateOTP] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [showRedDiv, setShowRedDiv] = useState(true);
    const [showGreenDiv, setShowGreenDiv] = useState(false);
    const [showBlueDiv, setShowBlueDiv] = useState(false);
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [showVerifyOTPButton, setShowVerifyOTPButton] = useState(false);
    const [isBlueDivVisible, setBlueDivVisible] = useState(true);
    const [isForgotDivVisible, setForgotDivVisible] = useState(false);


    const navigate = useNavigate('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
        if (e.target.value === "Login As Parent" || e.target.value === "Login As Teacher") {
            setForgotDivVisible(false);
        }
    }

    const changeAccountHandler = (e) => {
        setCreateAccount({ ...createAccount, [e.target.name]: e.target.value })
    }

    const changeHandler = (e) => {
        setParent({ ...parent, [e.target.name]: e.target.value })
    }

    const data = Country.getAllCountries().map(country => ({
        value: country.phonecode,
        displayValue: `${country.flag} - ${country.phonecode}`
    }))

    const teacherChangeHandler = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!country) {
            setCountryError('Please select a country code');
            return;
        }
        setCountryError('');
        // function fetchLoginData(body){
        //     axios.post('https://xapi.learn2read.co/api/parent/login/verifyparent', body)
        //     .then((res) => {
        //         setLoginData(res.ParentDetails.Password)
        //     })
        // }
        if (!validateMobileNumber(mobile)) {
            setMobileError('Please enter a valid mobile number');
            return;
        }
        setMobileError('');
        console.log(parent, "this is parent data")
        console.log(teacher, "this is teacher data")
        console.log(createAccount, 'data of login as parent')

        if (selected === "Login As Teacher") {
            ParentGenerateOtp();
        } else if (selected === "Login As Parent") {
            // Add logic for parent login
            ParentGenerateOtp();
        } else {
            LoginWithPassword();
        }
    }

    const validateMobileNumber = (mobile) => {
        const regex = /^(\d{10})$/;
        return regex.test(mobile);
    }

    const updateCountryCode = (code) => {
        const updatedCode = code.startsWith('+') ? code : `+${code}`;
        setCountry(updatedCode);
    };

    function LoginWithPassword() {
        console.log(parent)
        fetch(" https://xapi.learn2read.co/api/parent/login/verifyparent", {
            method: 'POST',
            body: JSON.stringify({
                MobileNumber: createAccount.mobile,
                Password: teacher.Password,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('verified parent password', result)
        })
    }

    function ParentGenerateOtp() {
        setShowGreenDiv(false);
        setShowBlueDiv(true);
        setShowOTPInput(true);
        setShowVerifyOTPButton(true);
        // console.log(createAccount)
        fetch('https://xapi.learn2read.co/api/parent/login', {
            method: 'POST',
            body: JSON.stringify({
                MobileNumber: createAccount.mobile,
                CountryCode: country,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('Generated otp using mobile number', result)
            localStorage.setItem('newcountrycode', country)
            localStorage.setItem('types', 1)
            localStorage.setItem('forgotmobile', createAccount.mobile)
        })
        setShowGenerateOTP(false)
    }

    function ParentverifyOtp() {
        console.log(otp)
        fetch("https://xapi.learn2read.co/api/parent/login/verifyparent", {
            method: 'POST',
            body: JSON.stringify({
                Type: 1,
                CountryCode: country,
                MobileNumber: createAccount.mobile,
                OTP: otp,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log("verified otp", response)
            localStorage.setItem('mobileno', createAccount.mobile)
            if (response.status === 200) {
                setBlueDivVisible(false);
                setForgotDivVisible(true);
            }
        })
        // navigate('/signupasparent')
    }

    function TutorGenerateOtp() {
        fetch('https://xapi.learn2read.co/api/tutors/login', {
            method: 'POST',
            body: JSON.stringify({
                MobileNumber: createAccount.mobile,
                CountryCode: country,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('Generated tutorotp using mobile number', result)
            localStorage.setItem('newcountrycode', country)
            localStorage.setItem('types', 1)
        })
        setShowGenerateOTP(false);
    }

    function TutorVerifyOtp() {
        console.log(otp)
        fetch("https://xapi.learn2read.co/api/tutors/login/verifyTutor", {
            method: 'POST',
            body: JSON.stringify({
                CountryCode: country,
                MobileNumber: createAccount.mobile,
                OTP: otp,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => result.json())
            .then((data) => {
                console.log("verified otp", data);
                localStorage.setItem('mobileno', createAccount.mobile);
                localStorage.setItem('token', data.Token);
                localStorage.setItem('status', data.Status);
                localStorage.setItem('TutorDetails', JSON.stringify(data.TutorDetails));

                if (data.Token && data.Status && data.TutorDetails) {
                    navigate('/batches'); // Navigate to the batches component
                }
            })
            .catch((error) => {
                console.error("Error verifying OTP:", error);
            });
    }

    function ForgotPassword() {
        setShowRedDiv(!showRedDiv);
        setShowGreenDiv(!showGreenDiv);
        setShowBlueDiv(false);
        setShowOTPInput(false);
        // setShowVerifyOTPButton(false);
        fetch("https://xapi.learn2read.co/api/parent/forgotpassword_update", {
            method: 'POST',
            body: JSON.stringify({
                MobileNumber: localStorage.getItem('forgotmobile'),
                Password: teacher.Password,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('verified parent password', result)
        })
    }

    return (
        <div className='signup-page'>
            <div className='signup-page-left'>
                <div className='signup-top-image'>
                    <img src='https://x.learn2read.co/static/media/logo.49b6abccd0619643ecba3ed3e782bf9c.svg' alt=''></img>
                </div>
                <div className='inside-signup-left'>
                    <h1>Welcome To Learn2Read</h1>
                    <p>With our interactive teaching methodologies, we ensure the child learns the right words in the right way with the concepts of easy learning from letter sound with blending to improving their vocabulary and language skills.</p>
                    <img className='signup-girl' src='https://x.learn2read.co/static/media/Kid_login.ac7d8bf68c1220ef3edd373030adc3a4.svg' alt=''></img>
                </div>
            </div>
            <div className='signup-page-right'>
                <div className='right-signup-one'>
                    <button className='back-to-acc' onClick={() => navigate('/')}>Back to Home</button>
                    <select value={selected} className='login-select' onChange={(e) => handleChange(e)}>
                        <option className='option-design'>Login As Parent</option>
                        <option className='option-design'>Login As Teacher</option>
                    </select>
                </div>

                {selected === "Login As Teacher" ?
                    <form className='right-signup-two' onSubmit={handleSubmit}>
                        <h2>Login To Your Account</h2>
                        <div className='country-city'>
                            <div className='ct-drop'>
                                <p><Dropdown options={data} country={country} setCountry={updateCountryCode}></Dropdown></p>
                                <input type='number' name='mobile' className='mobile-input' autoFocus placeholder='Mobile Number' onChange={changeAccountHandler}></input>
                            </div>
                        </div>
                        {showGenerateOTP ? (
                            <button className='login-btn' onClick={TutorGenerateOtp}>Generate OTP</button>
                        ) : (
                            <div className='otp-main-box'>
                                <div className='otp-container'>
                                    <OTPInput containerStyle='input-for-otp'
                                        value={otp}
                                        inputStyle={"otp"}
                                        onChange={setOtp}
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                    // inputStyle={true}
                                    />
                                </div>
                                <button className='login-btn' onClick={TutorVerifyOtp}>Verify OTP</button>
                            </div>
                        )}
                        <p className='or-with'>OR</p>
                    </form> :
                    selected === "Login As Parent" ?
                        <form className='right-signup-two' onSubmit={handleSubmit}>
                            <h2>Login To Your Account</h2>
                            <div className='country-city'>
                                <div className='ct-drop'>
                                    <p><Dropdown options={data} country={country} setCountry={updateCountryCode}></Dropdown></p>
                                    {countryError && <p className="login-error-message">{countryError}</p>}
                                    <input type='number' name='mobile' className='mobile-input' autoFocus placeholder='Mobile Number' onChange={changeAccountHandler}></input>
                                    {mobileError && <p className="login-error-message">{mobileError}</p>}
                                </div>
                            </div>
                            {showGenerateOTP ? (
                                <button className='login-btn' onClick={ParentGenerateOtp}>Generate OTP</button>
                            ) : (
                                <div className='otp-main-box'>
                                    <div className='otp-container'>
                                        <OTPInput containerStyle='input-for-otp'
                                            value={otp}
                                            inputStyle={"otp"}
                                            onChange={setOtp}
                                            numInputs={4}
                                            renderSeparator={<span>-</span>}
                                            renderInput={(props) => <input {...props} />}
                                        // inputStyle={true}
                                        />
                                    </div>
                                    <button className='login-btn' onClick={ParentverifyOtp}>Verify OTP</button>
                                </div>
                            )}
                            <p className='or-with'>OR</p>
                            <button className='otp-btn'>Login with Password</button>
                        </form> :
                        <form className='right-signup-two' onSubmit={handleSubmit}>
                            <h2>Login To Your Account</h2>
                            <div className='country-city'>
                                <div className='ct-drop'>
                                    <p><Dropdown options={data} country={country} setCountry={updateCountryCode}></Dropdown></p>
                                    <input type='number' name='mobile' className='mobile-input' autoFocus placeholder='Mobile Number' onChange={changeAccountHandler}></input>
                                </div>
                            </div>
                            {showRedDiv && (
                                <div className='red'>
                                    <input type='password' name='Password' placeholder='🔒Password' className='mobile-input-pass' onChange={teacherChangeHandler}></input>
                                    <br />
                                    {!showVerifyOTPButton &&<button className='forgot' onClick={ForgotPassword}>Forgot Password</button>}
                                    <br />
                                    {showPassword && !showVerifyOTPButton &&<button className='login-btn' type="submit" onClick={LoginWithPassword}>Login</button>}
                                </div>
                            )}
                            {showGreenDiv && (
                                <div className='green'>
                                    {!showVerifyOTPButton &&<button className='login-btn' onClick={ParentGenerateOtp}>Generate OTP</button>}
                                </div>
                            )}
                            {isBlueDivVisible && showBlueDiv && (
                                <div className='blue'>
                                    <div className='otp-main-box'>
                                        <div className='otp-container'>
                                            <OTPInput
                                                containerStyle='input-for-otp'
                                                value={otp}
                                                inputStyle={"otp"}
                                                onChange={setOtp}
                                                numInputs={4}
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => <input {...props} />}
                                            />
                                        </div>
                                        {showVerifyOTPButton && <button className='login-btn' onClick={ParentverifyOtp}>Verify OTP</button>}
                                    </div>
                                </div>
                            )}
                            {!showVerifyOTPButton && <p className='or-with'>OR</p>}
                            {!showVerifyOTPButton && isBlueDivVisible && <button className='otp-btn' onClick={() => setShow(!show)}>{show === true ? 'Login with Password' : 'Login with OTP'}</button>}
                        </form>}
                <form className='right-signup-two-forgot' style={{ display: isForgotDivVisible ? 'block' : 'none' }} onSubmit={handleSubmit}>
                    <input type='password' name='Password' placeholder='🔒Password' className='mobile-input' onChange={teacherChangeHandler}></input>
                    <input type='password' name='Password' placeholder='🔒Reenter Password' className='mobile-input' onChange={teacherChangeHandler}></input>
                    <button className='forgot'>Forgot Password</button>
                    <button className='login-btn' onClick={ForgotPassword}>Update Password</button>
                </form>
                <div className='right-signup-three-next'>
                    <p>Dont Have an Account?signup as a:</p>
                    <button onClick={() => navigate('/signuppage')}>Signup As Parent</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

