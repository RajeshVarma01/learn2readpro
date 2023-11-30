import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { ArrowRightOutlined } from '@ant-design/icons'
import { AiFillStar } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import Navbar from './Navbar'

const Teachers = () => {
    let [tutorsData, setTutorsData] = useState([])
    function fetchallTutorsData() {
        fetch('https://xapi.learn2read.co/api/tutors/web_list_all_tutors')
            .then(res => res.json())
            .then(data => {
                setTutorsData(data.Tutors)
            })
    }
    useEffect(() => {
        fetchallTutorsData()
    }, [])
    return (
        <div>
            <Navbar/>
            <div className='about-box-one'>
                <h1 className='courses-h1'>Meet Our Best Teachers</h1>
            </div>
            <div className='teachers-main-div'>
                <div className='teachers-main-div-new'>
                    <h2>MEET OUR TEAM OF EXPERT INSTRUCTORS</h2>
                    <h3>Your Child's Cheerleaders in their Online Learning Journey</h3>
                </div>
                <div className='teachers-div'>
                    {
                        tutorsData.map((person) => {
                            return(
                                <div className='teachers-cards'>
                                <img src={person.ProfilePicture} alt={''}></img>
                                        <h5>{person.FirstName}</h5>
                                        <h5>{person.LastName}</h5>
                                        <p>{person.skill}</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>{person.About}</p>
                                </div>
                            )
                        })
                    }
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

export default Teachers
