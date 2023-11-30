import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons/lib/icons'
import { PlayCircleOutlined } from '@ant-design/icons/lib/icons'
import { SelectOutlined } from '@ant-design/icons/lib/icons'
import { UserOutlined } from '@ant-design/icons/lib/icons'
import { ScheduleOutlined } from '@ant-design/icons/lib/icons'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import MyModal from './ShowModal'

const Content = () => {
    const navigate = useNavigate()
    let [subjectsData, setSubjectsData] = useState([])
    let [tutors, setTutors] = useState([])
    let [courseList, setCourseList] = useState([])
    const [showModal, setShowModal] = useState('')
    const closeModal = () => setShowModal(false) 
    
    function fetchTutorsData() {
        fetch('https://xapi.learn2read.co/api/tutors/web_list_all_tutors')
            .then(res => res.json())
            .then(data => {
                setTutors(data.Tutors)
            })
    }
    const [active, setActive] = useState('')
    function fetchSubjectsData() {
        fetch(`${process.env.React_APP_BASE_URL}web_list_all_categories`)
            .then(res => res.json())
            .then(data => {
                setSubjectsData(data.Categories)
                setActive(data.Categories[0].CategoryID)
            })
    }
    function fetchCourseList(body) {
        axios.post('https://xapi.learn2read.co/api/web_courses_list', body)
            .then((response) => {
                setCourseList(response.data.Courses)
            })
    }
    useEffect(() => {
        fetchSubjectsData()
        fetchTutorsData()
        fetchCourseList()
    }, [])
    console.log(courseList, "got courselist data")
    const oncoursechangefunc = (e) => {
        let body = { CategoryID: e.target.value }
        fetchCourseList(body)
    }

    const GetAllCourses = (id) => {

    }

    const GetAllCoursesHandler = (e) => {
        let id = e.currentTarget.getAttribute('custom-id')
        setActive(Number(id))

    }
    return (
        <div>
            <Navbar />
            <div className='left-right'>
                <div className='left-side'>
                    <p className='para-one'>Live  <span className='para-two'>classes for  </span>ages 3-8</p>
                    <h1 className='reading'>Reading</h1>
                    <h1 className='superstar'>Superstar</h1>
                    <p className='potential-para'>Unlock Your Child's Reading Potential with Learn2Read</p>
                    <p className='potential-para'>Phonics Classes</p>
                    <p className='para-three'>✔️Improves Pronunciation, Fluency & Spellings</p>
                    <p className='para-three'>✔️Vocabulary and Comprehension Boost</p>
                    <p className='para-three'>✔️Confidence & Personality-building</p>
                    <div className='course-demo-btns'>
                        <button className='courses-btn'>View Courses<ArrowRightOutlined /></button>
                        <button onClick={() => setShowModal(true)} className='demo-btn'><PlayCircleOutlined />Book free Demo</button>
                        { showModal && <MyModal closeModal = {closeModal}/> }
                    </div>
                </div>
                <div className='right-side'>
                    <img src='https://x.learn2read.co/static/media/headerright.699d210321e156e7cf10.png' alt='no data'></img>
                </div>
            </div>
            <div className='box-3'>
                <div className='discover-unlock'>
                    <h4 className='discover'>DISCOVER OUR OFFERINGS</h4>
                    <h2 className='unlock'>Unlock Engaging Learning Experiences with Our Courses</h2>
                </div>
                <div className='inside-box'>
                    {subjectsData.slice(0, 4).map(item =>

                        <button className={active === item.CategoryID ? 'hi-btn' : "inactive"} custom-id={item.CategoryID} onClick={GetAllCoursesHandler}>{item.CategoryName}</button>
                    )}
                </div>
                <div className='cards'>
                    {
                        courseList.map((item) => {
                            return (
                                <div className='courses-cards'>
                                    <div className='card'>
                                        <img src={item.CourseImage} alt=''></img>
                                        <div className='div-beginner'>
                                            <h5 className='beginner'>{item.Level}</h5>
                                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />0 Reviews</p>
                                        </div>
                                        <h4>{item.CourseName}</h4>
                                        <p className='item-para'>{item.Overview}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='before-box-4'></div>
                <div className='box-4'>
                    <h5 className='phonics'>WHY CHOOSE OUR PHONICS CLASSES?</h5>
                    <h4 className='b4'>Igniting Curiosity, Inspiring Confidence:</h4>
                    <h4 className='b4'>Unlock Your Child's Reading Potential with Learn2Read</h4>
                </div>
                <div className='wrapper-main'>
                    <div className='wrapper-sub-main'>
                        <div className='wrapper'>

                            <img src='https://x.learn2read.co/static/media/Icon1.54cc80e67922352384ae7b214fca3a12.svg' alt=''></img>

                            <div className='text-box'>
                                <h2>Customised Learning Paths</h2>
                                <p>Education tailored to your child's level and learning pace, ensuring a truly personalized journey</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon2.1e17d3a65e1319ddcdaa7e3402e3e8f1.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Interactive Classes</h2>
                                <p>We have a track record of delivering proven results, with countless individuals achieving remarkable success in their respective fields after completing the program.</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon3.e2b8d186c5eb14e6efb2617c654f2510.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Convenience</h2>
                                <p>With our flexible schedule, you have the freedom to learn at your own pace.</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon4.c37e4d3ca2bde17ba73f408f014097fe.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Experienced Instructors</h2>
                                <p>We offer our course at an incredibly affordable price. We believe that everyone should have access to quality education.</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon5.499e0e4c81b28c95256857103e20833d.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Personalized Attention</h2>
                                <p>We offer our course at an incredibly affordable price. We believe that everyone should have access to quality education.</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon6.12effd088552b850951841ba50f04b06.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Money-Back Guarantee</h2>
                                <p>We offer our course at an incredibly affordable price. We believe that everyone should have access to quality education.</p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            <img src='https://x.learn2read.co/static/media/Icon7.1145049bec2d830fd34def3cff70efd3.svg' alt=''></img>
                            <div className='text-box'>
                                <h2>Visible Growth</h2>
                                <p>We offer our course at an incredibly affordable price. We believe that everyone should have access to quality education.</p>
                            </div>
                        </div>

                    </div>
                    <div className='wrapper-img-data-new'>
                        <img className='wrapper-girl' src='https://x.learn2read.co/static/media/Image.481060b2ad05c794981b.png' alt=''></img>
                    </div>
                </div>
                <div className='card-main-div'>
                    <div className='card-main-div-new'>
                        <h4>MEET OUR TEAM OF EXPERT INSTRUCTORS</h4>
                        <h3>Your Child's Cheerleaders in their Online Learning Journey</h3>
                    </div>
                    <div className='card-div'>
                        {
                            tutors.slice(0, 4).map((tutor) => {
                                return (
                                    <div className='instructors-cards'>
                                        <img src={tutor.ProfilePicture} alt={''}></img>
                                        <h5>{tutor.FirstName}</h5>
                                        <h5>{tutor.LastName}</h5>
                                        <p>{tutor.skill}</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>{tutor.About}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='view-btn'>
                    <button onClick={() => navigate('/teachers')} className='view'>View More</button>
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
        </div>
    )
}
export default Content
