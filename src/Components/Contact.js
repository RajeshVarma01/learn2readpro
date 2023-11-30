import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className='about-box-one'>
                <h1 className='courses-h1'>Get in Touch with Learn2Read</h1>
            </div>
            <div className='contact-box-two'>
                <h6>WE'D LOVE TO HEAR FROM YOU</h6>
                <div className='hello-box'>
                    <h5 className='contact-box-2-hello'>Share your queries, suggestions, or just say hello!</h5>
                </div>
            </div>
            <form className='form-data'>
                <div className='form-table-1'>
                    <div className='div-div'>
                        <input className='form-text-box' type='textbox' placeholder='Your Name'></input>
                        <input className='form-text-box' type='textbox' placeholder='Your Email'></input>
                        <input className='form-text-box' type='number' placeholder='Phone'></input>
                        <input className='form-text-box' type='textbox' placeholder='Subject'></input>
                        <textarea className='form-text-area' rows={10}></textarea>
                    </div>
                </div>
                <div className='form-table-1'>
                    <button className='form-btn'>Send Message</button>
                </div>
            </form>
            <div className='about-box-six'>
                <div className='about-box-six-box-1'>
                    <h4>DROP IN OR REACH OUT</h4>
                    <h2>Visit us physically or virtually. We would love to have you</h2>
                </div>
                <div className='about-box-six-box-2'>
                    <div className='about-box-six-card-one'>
                        <iframe className='i-frame-new' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7115.265693062363!2d75.749371!3d26.915145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37d48c1fb7f%3A0xd3367bee7185c706!2s150%2C%20Nemi%20Sagar%20Colony%2C%20D%20-%20Block%2C%20Hanuman%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1697779655243!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='about-box-six-card-two'>
                        <div className='about-box-six-card-two-last'>
                            <h4>Address</h4>
                            <p><EnvironmentOutlined />150, Nemi Sagar Colony, D - Block,</p>
                            <p className='last-p'>Hanuman Nagar, Jaipur, Rajasthan 302021</p>
                        </div>
                        <div className='about-box-six-card-two-last-last'>
                            <p><BsFacebook className='bs' /><AiFillYoutube className='ai' /><FaInstagram className='fa' /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='connected'>
                    <div className='connected-sub-1'>
                        <div className='connected-inside'>
                            <div>
                                <img src='https://x.learn2read.co/static/media/footer-top.249971e2fff47dc6ed92192f12fb4eed.svg' alt=''></img>
                            </div>
                            <div className='h2-div'>
                                <h2>Stay Connected with Learn2Read!</h2>
                                <h2>Subscribe for Updates on Phonics</h2>
                                <h2>Education and Exclusive Deals</h2>
                            </div>
                        </div>
                        <div className='text-box-one'>
                            <input type='textbox' placeholder='🚀enter your email'></input>
                        </div>
                    </div>
                    <div className='connected-sub-2'>
                        <div className='conn-para-img'>
                            <img src='https://x.learn2read.co/static/media/logo.49b6abccd0619643ecba3ed3e782bf9c.svg' alt=''></img>
                        </div>
                        <div className='conn-para'>
                            <h4 className='conn-para-one'>Navigation Links</h4>
                            <p>Courses</p>
                            <p>Teachers</p>
                            <p>Resources</p>
                            <p>FAQ</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='conn-para'>
                            <h4 className='conn-para-one'>Links</h4>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Student Registration</p>
                        </div>
                        <div className='conn-para'>
                            <h4 className='conn-para-one'>Social Media Links</h4>
                            <div className='all-icons'>
                                <p><FaFacebookF className='small-icons' /></p>
                                <p>Facebook</p>
                            </div>
                            <div className='all-icons'>
                                <p><SlSocialInstagram className='small-icons' /></p>
                                <p>Instagram</p>
                            </div>
                            <div className='all-icons'>
                                <p><TbBrandYoutubeFilled className='small-icons' /></p>
                                <p>Youtube</p>
                            </div>
                        </div>
                        <div className='conn-para'>
                            <h4 className='conn-para-one'>Contact Information</h4>
                            <div className='all-icons'>
                                <p><AiOutlineMail className='small-icons' /></p>
                                <p>info@learntoread.co</p>
                            </div>
                            <div className='all-icons'>
                                <p><BsTelephone className='small-icons' /></p>
                                <p>+91 978-238-1907</p>
                            </div>
                        </div>
                    </div>
                    <div className='conn-para-img-last'>
                        <img src='https://x.learn2read.co/static/media/footer-bottom.88e416dd34f06f4ddb58647f96cc6cc0.svg' alt=''></img>
                    </div>
                </div>
        </div>
    )
}

export default Contact
