import { Route,Routes } from "react-router-dom";
import Home from "./page/Home/Home";

function AllRouter(){
    return(
        <Routes>
            
            <Route exact path="/" element={<Home/>}/>
            
            
        </Routes>
    )    
}
export default AllRouter