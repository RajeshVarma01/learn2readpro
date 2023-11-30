import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/About.css'
import './Components/Courses.css'
import './Components/Teachers.css'
import './Components/Faq.css'
import './Components/Contact.css'
import './Components/Readmore.css'
import './Components/SignupPage.css'
import './Components/LoginPage.css'
import './Components/ShowModal.css'
import './Components/SignupAsParent.css'
import './Components/schedulecomponents/Batches.css'
import About from './Components/About';
import Content from './Components/Content';
import Courses from './Components/Courses';
import Teachers from './Components/Teachers';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Readmore from './Components/Readmore';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import SignupAsParent from './Components/SignupAsParent';
import Calender from './Components/schedulecomponents/Calender';
import Batches from './Components/schedulecomponents/Batches';
import CourseBatch from './Components/schedulecomponents/CourseBatch';
import Earnings from './Components/schedulecomponents/Earnings';
import Leave from './Components/schedulecomponents/Leave';
import TutorAvailability from './Components/schedulecomponents/TutorAvailability';
import Logout from './Components/schedulecomponents/Logout';
import LessonPlan from './Components/schedulecomponents/LessonPlan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/readmore' element={<Readmore/>}/>
        <Route path='/signuppage' element={<SignupPage/>}/>
        <Route path='/loginpage' element={<LoginPage/>}/>
        <Route path='/signupasparent' element={<SignupAsParent/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/batches' element={<Batches/>}/>
        <Route path='/coursebatches' element={<CourseBatch/>}/>
        <Route path='/earnings' element={<Earnings/>}/>
        <Route path='/leave' element={<Leave/>}/>
        <Route path='/tutoravailability' element={<TutorAvailability/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/lessonplan/:courseID" element={<LessonPlan/>}/>
      </Routes>
    </div>
  );
}
export default App;
