import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeams";
import { useNavigate } from "react-router-dom";
import CoursePage from "./manageCourse/managecourse";
function Instructor() {


    const navigate = useNavigate();
    const handleNewCourse = () =>{
        navigate("/newcourse");
    }

  return (
    <div className="items-center justify-center h-screen relative">
      <BackgroundBeamsWithCollisionDemo />
      <div className="mt-10 flex items-center justify-center">
        <button className="px-7 py-4 bg-blue-500 text-white rounded shadow-lg" onClick={handleNewCourse}>
          New Course
        </button>
      </div>
      
        <CoursePage/>
      
    </div>
  );
}

export default Instructor;
