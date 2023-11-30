import React from 'react'
import { UserOutlined } from '@ant-design/icons/lib/icons'
import { ScheduleOutlined } from '@ant-design/icons/lib/icons'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import Navbar from './Navbar'


const Readmore = () => {
    return (
        <div>
            <Navbar/>
            <div className='about-box-one'>
                <h1 className='courses-h1'>Teaching your kids how to read with Digraphs and Diphthongs</h1>
            </div>
            <div className='readmore-entire'>
                <div className='readmore-main-box'>
                    <div className='readmore-sub-box-1'>
                        <div className='sub-box-1-card-1'>
                            <img className='read-img' src='https://x.learn2read.co/static/media/details.fd4c36bc7250e5d4bd06.png' alt=''></img>
                            <h2>Teaching your kids how to read with Digraphs and Diphthongs</h2>
                            <div className='read-inside-insights-card-one'>
                                <h6 className='read-date'><ScheduleOutlined />May 15, 2023</h6>
                                <h6 className='read-name'><UserOutlined />Rohit Joshi</h6>
                                <h6 className='read-comments'><UserOutlined />09 Comments</h6>
                            </div>
                            <p>The terms digraph and diphthong are common terms in the reading world. We find that many people are confused about the difference between the two terms. The clear difference is that digraphs are letters and diphthongs are sounds. The morphemes (meaningful word parts) in each word help us remember their meanings. Both words are derived from Greek. The first morpheme di in both words means “two.” The morpheme graph means written, making the word digraph refer to something written that has two parts.</p>
                            <p>The morpheme phthong means “sound”, making the word diphthong refer to a sound that has two parts. If you understand the meaning of the morphemes in each word, you will never confuse them again. Digraph is two letters that spell one sound. Digraphs that spell consonant sounds include the letter pairs sh, ch, th, wh, ck, ph, ng. Digraphs that spell vowel sounds include the letter pairs ai, ay, ee, ea, ie, ei, oo, ou. ow, oe, oo, ue, ey, ay, oy, oi, au and aw. The important thing to remember is that a digraph is made of two letters, and although the letters spell a sound, the digraph is the two letters, not the sound.</p>
                            <img className='read-img' src='https://x.learn2read.co/static/media/blog2.e5472a5c05b3ac6a5668f7c6d3153f28.svg' alt=''></img>
                            <p>Diphthong is a special kind of vowel sound. Most vowel sounds in English are made with the mouth in one position and with one pure sound. These vowel sounds are called monophthongs (mono meaning “one” and phthong meaning “sound”). A diphthong is one vowel sound formed by the combination of two vowel sounds.</p>
                            <img className='read-img' src='https://x.learn2read.co/static/media/blog3.4ad26e00a61045cab49148d7723817c6.svg' alt=''></img>
                            <p>A diphthong begins as one vowel sound and moves toward another, such as the vowel sounds in coin or loud. Diphthongs can be contrasted with two monophthong vowel sounds together that form two syllables, such as in chaos, triage, or violin. When teaching how to read, the two vowel sounds most commonly identified as diphthongs are /oy/ and /ow/. The most common spellings for the vowel sound /oy/ are oy (toy) and oi (void), and the two most common spellings for /ow/ are ow (cow) and ou (cloud). The fact that these two diphthongs are usually spelled with digraphs may explain the confusion between the terms.</p>
                        </div>
                        <div className='sub-box-1-card-2'>
                            <div className='ajay-profile'>
                                <img src='https://x.learn2read.co/static/media/profile.6b65ad73fdca733914749812dc5668fa.svg' alt=''></img>
                            </div>
                            <div className='ajay-content'>
                                <h3>Ajay Verma</h3>
                                <h4>English Teacher</h4>
                                <p>Ajay Verma is a English language expert who has dedicated her career to helping students master the art of effective communication.</p>
                                <h1><BsFacebook color='#3B5998' /><AiFillTwitterCircle color='#55ACEE' /><AiFillInstagram color='#E4405F' /><TiSocialLinkedinCircular color='#007BB5' /></h1>
                            </div>
                        </div>
                        <div className='new-sub-box-1-card-3'>
                            <div className='sub-box-1-card-3'>
                                <h4>02 Comments</h4>
                            </div>
                            <div className='sub-box-1-card-3'>
                                <div className='linsa-profile'>
                                    <img src='https://x.learn2read.co/static/media/profile1.215eeaa802f4176eefb417be71553291.svg' alt=''></img>
                                </div>
                                <div className='linsa-content'>
                                    <p>Linsa Faith</p>
                                    <p className='linsa-para'>October 5, 2018 at 12:41 pm</p>
                                    <p className='linsa-para'>The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth</p>
                                </div>
                            </div>
                            <div className='sub-box-1-card-3'>
                                <div className='linsa-profile'>
                                    <img src='https://x.learn2read.co/static/media/profile1.215eeaa802f4176eefb417be71553291.svg' alt=''></img>
                                </div>
                                <div className='linsa-content'>
                                    <p>Linsa Faith</p>
                                    <p className='linsa-para'>October 5, 2018 at 12:41 pm</p>
                                    <p className='linsa-para'>The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth</p>
                                </div>
                            </div>
                        </div>
                        <form className='read-form'>
                            <h4>Leave a Comment</h4>
                            <div className='read-form-div-1'>
                                <input type='text' placeholder='Your Name'></input>
                                <input type='text' placeholder='Your Email'></input>
                            </div>
                            <input className='read-form-input-1' type='text' placeholder='Subject'></input>
                            <textarea rows={10} placeholder='Type here your comment'></textarea>
                            <button>Send Comment</button>
                        </form>
                    </div>
                    <div className='readmore-sub-box-2'>
                        <div className='sub-box-2-card-1'>
                            <input className='readmore-textbox' type='text' placeholder='search'></input>
                        </div>
                        <div className='sub-box-2-card-2'>
                            <h4>Post Category</h4>
                            <div className='post-div'>
                                <p>Education</p>
                                <p>20</p>
                            </div>
                            <div className='post-div'>
                                <p>Blogs</p>
                                <p>11</p>
                            </div>
                            <div className='post-div'>
                                <p>Online Learning</p>
                                <p>21</p>
                            </div>
                            <div className='post-div'>
                                <p>Health Coaching</p>
                                <p>10</p>
                            </div>
                            <div className='post-div'>
                                <p>Courses learning</p>
                                <p>16</p>
                            </div>
                            <div className='post-div'>
                                <p>Teachers</p>
                                <p>12</p>
                            </div>
                            <div className='post-div'>
                                <p>Students</p>
                                <p>39</p>
                            </div>
                        </div>
                        <div className='sub-box-2-card-3'>
                            <h4>Our Recent Posts</h4>
                            <div className='recent-posts'>
                                <img src='https://x.learn2read.co/static/media/post1.81b27dc67edc08fc77db.png' alt=''></img>
                                <p>Poor People’s Campaign Our Resources May 11, 2023</p>
                            </div>
                            <div className='recent-posts'>
                                <img src='https://x.learn2read.co/static/media/post1.81b27dc67edc08fc77db.png' alt=''></img>
                                <p>Poor People’s Campaign Our Resources May 11, 2023</p>
                            </div>
                            <div className='recent-posts'>
                                <img src='https://x.learn2read.co/static/media/post1.81b27dc67edc08fc77db.png' alt=''></img>
                                <p>Poor People’s Campaign Our Resources May 11, 2023</p>
                            </div>
                            <div className='recent-posts'>
                                <img src='https://x.learn2read.co/static/media/post1.81b27dc67edc08fc77db.png' alt=''></img>
                                <p>Poor People’s Campaign Our Resources May 11, 2023</p>
                            </div>
                        </div>
                        <div className='sub-box-2-card-2'>
                            <h4>Our Archives</h4>
                            <div className='post-div'>
                                <p>January</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>February</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>March</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>April</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>May</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>June</p>
                                <p>2022</p>
                            </div>
                            <div className='post-div'>
                                <p>July</p>
                                <p>2022</p>
                            </div>
                        </div>
                        <div className='popular-last-div'>
                            <div className='sub-box-2-card-5'>
                                <h4>Our Popular Tags</h4>
                                <div className='popular-tags'>
                                    <p>Books</p>
                                    <p>Education</p>
                                    <p>Design</p>
                                    <p>Health Coaching</p>
                                    <p>Learning</p>
                                    <p>Online</p>
                                    <p>Learn2Read</p>
                                    <p>English Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='connected-before'>

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
                        <p><BsFacebook className='small-icons' />Facebook</p>
                        <p><AiFillInstagram className='small-icons' />Instagram</p>
                        <p><AiFillYoutube className='small-icons' />Youtube</p>
                    </div>
                    <div className='conn-para'>
                        <h4 className='conn-para-one'>Contact Information</h4>
                        <p><AiOutlineMail className='small-icons' />info@learntoread.co</p>
                        <p><BsTelephone className='small-icons' />+91 978-238-1907</p>
                    </div>
                </div>
                <div className='conn-para-img-last'>
                    <img src='https://x.learn2read.co/static/media/footer-bottom.88e416dd34f06f4ddb58647f96cc6cc0.svg' alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Readmore
