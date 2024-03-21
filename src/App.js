import "./App.css";
import TotalAmountSection from "./Components/TotalAmountSection";
// import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    // <div className="font-poppins">
    //   <AllRoutes />
    // </div>

    <>
    {/* <Navbar/> */}
    <Dashboard/>
    {/* <TotalAmountSection/> */}
    </>
  );
}

export default App;
