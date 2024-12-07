import { Route,Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Course from "./page/Course/Course";

function AllRouter(){
    return(
        <Routes>
            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
            
        </Routes>
    )    
}
export default AllRouter