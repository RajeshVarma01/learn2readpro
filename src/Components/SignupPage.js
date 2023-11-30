import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Country } from 'country-state-city';
import Dropdown from './Common';
import OTPInput from 'react-otp-input';


const SignupPage = () => {
    const [createAccount, setCreateAccount] = useState('')
    const [country, setCountry] = useState('')
    const [mobile, setMobile] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOtp] = useState('')
    const [apiError, setApiError] = useState('')
    const [countryError, setCountryError] = useState('');


    const navigate = useNavigate('')

    const handleAccountSubmit = (e) => {
        e.preventDefault()
        console.log(createAccount, "create account data")
    }

    const changeAccountHandler = (e) => {
        setCreateAccount({ ...createAccount, [e.target.name]: e.target.value })
    }


    const data = Country.getAllCountries().map(country => ({
        value: country.phonecode,
        displayValue: `${country.flag} - ${country.phonecode}`
    }))

    console.log(localStorage)

    // ------------------------------------send otp function---------------------------------


    const updateCountryCode = (code) => {
        const updatedCode = code.startsWith('+') ? code : `+${code}`;
        setCountry(updatedCode);
    };

    function sendOtp() {
        console.log(createAccount)
        if (!country) {
            // If the country code is not selected, set an error message
            setCountryError('Please select a country code');
            return;
        }
        fetch("https://xapi.learn2read.co/api/parent/signup/sendotp", {
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
            console.log('result', result)
            if (result.status === 200) {
                setShowOtp(true)
                localStorage.setItem('countrycode', country)
            }else {
                setApiError('Please Enter Valid Mobile Number!!')
                console.error('Failed to send otp');
            }
        })
    }

    // ---------------------------------verify otp function-------------------------------

    function verifyOtp() {
        console.log(otp)
        fetch("https://xapi.learn2read.co/api/parent/signup/verifyotp", {
            method: 'POST',
            body: JSON.stringify({
                MobileNumber: createAccount.mobile,
                OTP: otp,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log("verified otp", result)
            if (result.status === 200) {
                localStorage.setItem('mobileno', createAccount.mobile);
                // Navigate to /signupasparent only if the OTP is verified successfully
                navigate('/signupasparent');
            } else {
                // If OTP verification fails, set the error message
                setApiError('Invalid OTP. Please enter the correct OTP.');
                console.error('Invalid OTP');
            }        })
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
                    <img className='signup-girl' src='https://x.learn2read.co/static/media/signup.55686e1d222befa1311bb26dc8728751.svg' alt=''></img>
                </div>
            </div>
            <div className='signup-page-right'>
                <div className='right-signup-one'>
                    <button className='back-to-acc' onClick={() => navigate('/')}>Back to Home</button>
                </div>
                <form className='right-signup-two' onSubmit={handleAccountSubmit}>
                    <h2>Create an Account</h2>
                    <div className='country-city'>
                        <div className='ct-drop'>
                            <p><Dropdown options={data} country={country} setCountry={updateCountryCode}></Dropdown></p>
                            <input type='number' name='mobile' className='mobile-input' autoFocus placeholder='Mobile Number' onChange={changeAccountHandler}></input>
                        </div>
                        <div>
                            {errormsg && <p>{errormsg}</p>}
                            {countryError && <p className='error-message'>{countryError}</p>}
                            {apiError && <p className="error-message">{apiError}</p>}
                            {!showOtp && <button className='login-btn' onClick={sendOtp}>send OTP</button>}
                        </div>
                    </div>
                    {showOtp && <div className='otp-main-box'>
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
                        <button className='login-btn' onClick={verifyOtp}>Verify OTP</button>
                    </div>
                    }
                    <div className='sign-sel-or'>
                        <p className='or-with'>OR</p>
                        <button className='otp-btn' onClick={() => navigate('/loginpage')}>Login with Password</button>
                    </div>
                </form>
                <div className='right-signup-three'>
                    <p>Already a member?</p>
                    <button onClick={() => navigate('/loginpage')}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
