import { Route,Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Course from "./page/Course/Course";
import Instructor from "./page/Instructor/Instructor";
import NewCourse from "./page/NewCourse/NewCourse";

function AllRouter(){
    return(
        <Routes>
            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/course/:id" element={<Course/>}/>
            <Route path="/instructor" element={<Instructor/>}/>
            <Route path="/newcourse" element={<NewCourse/>}/>
            
        </Routes>
    )    
}
export default AllRouter