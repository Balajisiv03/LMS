import { BrowserRouter} from "react-router-dom"
import AllRouter from "./route";
import {ToastContainer} from "react-toastify";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div >
      <BrowserRouter>
          <Navbar/>
          <AllRouter/>
      </BrowserRouter>
      <ToastContainer theme='light'/>
    </div>
    
  )
}

export default App
