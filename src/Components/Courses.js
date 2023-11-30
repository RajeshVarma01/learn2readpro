import { AiFillStar } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import axios from 'axios'
import Navbar from './Navbar'


const Courses = () => {
    const [webCategories, setWebCategories] = useState([])
    const [mathsData, setMathsData] = useState([])

    function fetchCategoriesData() {
        fetch('https://xapi.learn2read.co/api/web_list_all_categories')
            .then((data) => data.json())
            .then((val) => setWebCategories(val.Categories))
    }
    function fetchCourseData(body) {


        // fetch('https://xapi.learn2read.co/api/web_courses_list', {method:'POST', body:body})
        axios.post('https://xapi.learn2read.co/api/web_courses_list', body)
            .then((response) => {
                setMathsData(response.data.Courses)
            })
    }
    useEffect(() => {
        fetchCategoriesData()
        fetchCourseData({})
    }, [])
    console.log(webCategories, "got all webcatogories data")
    console.log(mathsData, "got maths data")
    const onchangefunc = (e) => {
        let body = { CategoryID: e.target.value }
        fetchCourseData(body)
    }
    return (
        <div>
            <Navbar/>
            <div className='about-box-one'>
                <h1 className='courses-h1'>Unleashing Potential with Our Curated Learning Courses</h1>
            </div>
            <div className='courses-box-two'>
                <h4>DELIGHTFUL, IMPACTFUL LEARNING COURSES</h4>
                <h3>Discover a range of programs thoughtfully designed to cater to your child's unique learning needs. Our comprehensive, engaging, and effective courses are tailored to nurture your child's growth and understanding, whether it's mastering phonics, becoming proficient in English reading and speaking, or gaining a strong foundation in Hindi and Maths</h3>
            </div>
            <div className='courses-box-three-cards'>
                <select className='select-design' onChange={onchangefunc} defaultValue={''}>
                    <option disabled value={''}>Select Category</option>
                    {
                        webCategories.map((opts, i) => <option className='option-btn' value={opts.CategoryID} >{opts.CategoryName}</option>)
                    }
                </select>
            </div>
            <div className='courses-box-four'>
                <div className='courses-main-cards'>
                    {
                        mathsData.map((item) => {
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

export default Courses
