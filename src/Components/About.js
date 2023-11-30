import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { SelectOutlined } from '@ant-design/icons'
import { ScheduleOutlined } from '@ant-design/icons'
import { EnvironmentOutlined } from '@ant-design/icons'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { ArrowRightOutlined } from '@ant-design/icons'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import Navbar from './Navbar'

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar/>
            <div className='about-box-one'>
                <h1>Discover the Learn2Read Journey</h1>
            </div>
            <div className='about-box-two'>
                <div className='about-box-two-card-1'>
                    <img src='https://x.learn2read.co/static/media/aboutlearn2read.8601135ea94f8331fff2.png' alt=''></img>
                </div>
                <div>
                    <div className='about-box-two-card-2'>
                        <h4>ABOUT LEARN2READ</h4>
                        <h1>Cultivating the Joy of Learning: Our Road to Triumph</h1>
                        <p>Incepted in 2020, our founder, Varshika Jain, envisioned Learn2Read as a haven for young learners beginning their linguistic journey. Now, our vibrant community extends across 35+ countries, including India, UAE, USA, Canada, Australia, Qatar, Belgium, among others, touching the lives of thousands of children. With an outstanding satisfaction rate of 98%, we take pride in our pioneering educational approaches. At Learn2Read, we replace repetitive learning with interactive, stimulating sessions, aiding students in understanding language intricacies, from elementary phonics to advanced vocabulary. With us, your child embarks on a captivating exploration of reading and language acquisition, unveiling potential and bolstering self-confidence with each accurately spoken and understood word.</p>
                        <div className='about-box-two-card-2-inner-div'>
                            <div className='box-two-last-div'>
                                <div>
                                    <img src='https://x.learn2read.co/static/media/interativeDesign.2d8d8c656c0596b1f4dcb66b06a58f89.svg' alt=''></img>
                                </div>
                                <div>
                                    <h5>Interactive Phonics</h5>
                                    <h5>Education</h5>
                                </div>
                            </div>
                            <div className='box-two-last-div'>
                                <div>
                                    <img src='https://x.learn2read.co/static/media/progressiveCurriculum.a8e4b989c8ad485673086e0b8db22fa6.svg' alt=''></img>
                                </div>
                                <div>
                                    <h5>Progressive Language</h5>
                                    <h5>Curriculum</h5>
                                </div>
                            </div>
                            <div className='box-two-last-div'>
                                <div>
                                    <img src='https://x.learn2read.co/static/media/globalCommunity.113d051a9174ae89395ae328454804ad.svg' alt=''></img>
                                </div>
                                <div>
                                    <h5>Global Learning</h5>
                                    <h5>Community</h5>
                                </div>
                            </div>
                            <div className='box-two-last-div'>
                                <div>
                                    <img src='https://x.learn2read.co/static/media/satifactionAssured.b79daabf06ac75e63d485ac4adbe15df.svg' alt=''></img>
                                </div>
                                <div>
                                    <h5>Exceptional Satisfaction</h5>
                                    <h5>Assured</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-box-three'>
                <div className='box-three-card-one'>
                    <div className='box-three-card-one-one'>
                        <h3>WHAT TO EXPECT</h3>
                        <h2>Uncover the Learn2Read Distinction:</h2>
                        <h4>What Our Courses Promise</h4>
                        <p>When you step into the Learn2Read family, you sign up your child for a journey of self-development and exploration. Here's what our diverse range of courses offer:</p>
                    </div>
                    <div className='box-three-card-one-two'>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon1.54cc80e67922352384ae7b214fca3a12.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Interactive Learning</h2>
                                <p>Our course curriculum incorporates fun educational phonics games and interactive activities that make learning a delightful experience.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon2.1e17d3a65e1319ddcdaa7e3402e3e8f1.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Comprehensive Curriculum</h2>
                                <p>From learning alphabet phonics to understanding advanced spelling rules, our programs are designed to equip learners with complete language proficiency.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon3.e2b8d186c5eb14e6efb2617c654f2510.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Personalised Attention</h2>
                                <p>Our small batch sizes ensure that every student receives the individual attention they need to thrive.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon4.c37e4d3ca2bde17ba73f408f014097fe.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Experienced Educators</h2>
                                <p>Our dedicated team of educators is passionate about nurturing a love for learning in each student.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon5.499e0e4c81b28c95256857103e20833d.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Multilingual Mastery:</h2>
                                <p>With English and Hindi language courses, we promote bilingual proficiency from an early age.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon6.12effd088552b850951841ba50f04b06.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Numerical Proficiency:</h2>
                                <p>Our math learning programs help children develop strong mathematical skills.</p>
                            </div>
                        </div>
                        <div className='about-wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon7.1145049bec2d830fd34def3cff70efd3.svg' alt=''></img>
                            <div className='about-text-box'>
                                <h2>Convenient and Accessible Learning:</h2>
                                <p>Our online courses offer flexible schedules and can be accessed from the comfort of your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box-three-card-two'>
                    <img src='https://x.learn2read.co/static/media/rightbg.49f777daacfeb14e0785.png' alt=''></img>
                </div>
            </div>
            <div className='testimonials'>
                <div className='voice-testimonials'>
                    <h2>VOICES OF LEARN2READ PARENTS</h2>
                    <h3>Echoes of Joy from Parents of our Proud Readers</h3>
                </div>
                <div className='testimonial-cards'>
                    <div className='testimonial-card-one'>
                        <img src='https://x.learn2read.co/static/media/student.80ddb49e9a15a3c02ea2e2b03ce50542.svg' alt=''></img>
                    </div>
                    <div className='testimonial-card-two'>
                        <div className='testimonial-card-two-card-1'>
                            <div className='inside-testimonials-img'>
                                <div className='img-para-one'>
                                    <img src='https://x.learn2read.co/static/media/person1.6da051aa8276465d6ce31cf0aa82cebc.svg' alt=''></img>
                                    <p className='shruthi'>Mrs. Shruthi</p>
                                </div>
                                <div className='star-para'>
                                    <p className='star-5'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>
                            <div className='inside-testimonials-para'>
                                <p className='impressed'>We are incredibly impressed with our child's course experience. They have shown remarkable growth in their knowledge and skills, and their enthusiasm for learning has skyrocketed. It's truly been a transformative journey for them</p>
                            </div>
                        </div>
                        <div className='testimonial-card-two-card-1'>
                            <div className='inside-testimonials-img'>
                                <div className='img-para-one'>
                                    <img src='https://x.learn2read.co/static/media/person2.d5a4d9d2c896ad0d2774a67483822f96.svg' alt=''></img>
                                    <p className='shruthi'>Mr. Bharath Kumar</p>
                                </div>
                                <div className='star-para'>
                                    <p className='star-5'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>
                            <div className='inside-testimonials-para'>
                                <p className='impressed'>Our child's course has exceeded our expectations. The curriculum is engaging, and the instructors are highly knowledgeable and supportive. We've noticed a significant boost in our child's confidence and problem-solving abilities</p>
                            </div>
                        </div>
                        <div className='testimonial-card-two-card-3'>
                            <button>Read More Testimonials<ArrowRightOutlined /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='insights-all-cards'>
                <div className='insights-new-design'>
                    <h2>INSIGHTS FROM OUR PHONICS AND READING BLOG</h2>
                    <h3>Dive Into Our Treasure Trove of Phonics Education</h3>
                    <h3>Knowledge</h3>
                </div>
                <div className='insights-cards'>
                    <div className='insights-card-one'>
                        <img src='https://x.learn2read.co/static/media/post1.b956a844eea144d5b8d2.png' alt='no-data'></img>
                        <h4>Teaching your kids how to read with Digraphs and Diphthongs</h4>
                        <div className='inside-insights-card-one'>
                            <p className='name'><UserOutlined />Rohit Joshi</p>
                            <p className='date'><ScheduleOutlined />May 15, 2023</p>
                        </div>
                        <p className='p-inline'>Most of the parents who want to teach phonics at home are doubtful with the teaching methods regarding pronunciation and vocabulary.</p>
                        <h5><button onClick={() => navigate('/readmore')}>Read our Blog<SelectOutlined /></button></h5>
                    </div>
                    <div className='insights-card-one'>
                        <img src='https://x.learn2read.co/static/media/post2.793b1110a253064ff6ae.png' alt='no-data'></img>
                        <h4>Know everything about Phonics: Top 10 quick phonics tips</h4>
                        <div className='inside-insights-card-one'>
                            <p className='name'><UserOutlined />Rohit Joshi</p>
                            <p className='date'><ScheduleOutlined />May 15, 2023</p>
                        </div>
                        <p className='p-inline'>Phonics is nothing but a system or a method that helps people read and write an alphabetic language like English, Spanish, Arabic, etc.</p>
                        <h5><button onClick={() => navigate('/readmore')}>Read our Blog<SelectOutlined /></button></h5>
                    </div>
                    <div className='insights-card-one'>
                        <img src='https://x.learn2read.co/static/media/post3.243eebff56ca8150e45b.png' alt='no-data'></img>
                        <h4>How Children Learn to Read through Phonic Sounds</h4>
                        <div className='inside-insights-card-one'>
                            <p className='name'><UserOutlined />Rohit Joshi</p>
                            <p className='date'><ScheduleOutlined />May 15, 2023</p>
                        </div>
                        <p className='p-inline'>Learning to read is a visual process for mostly all and this is where it gets so interesting on how children learn to read</p>
                        <h5><button onClick={() => navigate('/readmore')}>Read our Blog<SelectOutlined /></button></h5>
                    </div>
                </div>
            </div>
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

export default About
