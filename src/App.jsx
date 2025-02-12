import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import NavBar from "./pages/NavBar";
// import DataTable from "./pages/LogOut";
import NewProject from "./pages/NewProject";
import Faculty from "./pages/Faculty"
// import Login from "./pages/Login";
import SignIn from "./components/authentication/SignIn";
import Project_list_prof from "./pages/Project_list_prof";
import Cse from "./components/Faculty/department/Cse";
import Ce from "./components/Faculty/department/Ce";
import Ee from "./components/Faculty/department/Ee";
// import Prof from "./components/Faculty/Prof";
import SignUp from "./components/authentication/SignUp";
// import About from "./pages/About";
import LogOut from "./pages/LogOut";
import Student from "./pages/Student";
import ProjectDesc from "./components/Student/ProjectDesc";
import UserProfile from "./pages/UserProfile";
import ProjectCategories from "./components/Student/StudentCard";
import ProjectCategory from "./components/Student/ProjectCategories";
// import ProjectPage from "./components/Student/ProjectPage";
import Home from "./pages/Home";
import History from './pages/History';
import Requests from "./pages/Requests";
import EnrolledStudents from "./pages/EnrolledStudents";
import ProfProfile from "./pages/ProfProfile";
import HomeFaculty from "./pages/HomeFaculty";
import ForgotPassword from "./components/authentication/ForgotPassword";

function App() {
  // var isWho = "user";
  const [kon, setKon] = useState("user");
  const [isAuthorized, setAuthorization] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const[logedInStudentData, setLogedInStudentData] = useState(null);
    // const [loginDetail, setLoginDetail] = useState("");


  const getData = (isAuth, who, ikartik) => {
    // Handle data from child component
    console.log("Data received in parent:", ikartik);
    setAuthorization(isAuth);
    setKon(who);
    setLogedInStudentData(ikartik);
  };

  const handleLogout = () => {
    setAuthorization(false); 
  };

  function getNameOfCategory(x) {
    setCategoryName(x);
  }

  if (isAuthorized) {
    if (kon === "faculty") {

      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar who={kon} />}>
                <Route path="Project_list_prof" element={<Project_list_prof />} />
                {/* <Route path="DataTable" element={<DataTable />} /> */}
                <Route path="NewProject" element={<NewProject />} />
                <Route path="Requests" element={<Requests />} />
                <Route path="ProfProfile" element={<ProfProfile />} />
                <Route index element={<HomeFaculty />} />
                <Route path="Home" element={<HomeFaculty />} />
                <Route path="EnrolledStudents" element={<EnrolledStudents />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="LogOut" element={<LogOut />} />
                <Route path="UserProfile" element={<UserProfile logedInStudentData= {logedInStudentData} />} />
                <Route path="LogOut" element={<LogOut onLogout={handleLogout} />} />
                {/* <Route path="UserProfile" element={<UserProfile loginDetail= {loginDetail} />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )

    } else if (kon === "user") {

      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar who={kon} />}>
                {/* <Route path="DataTable" element={<DataTable />} /> */}
                <Route path="Faculty" element={<Faculty />}>
                  <Route path="Cse" element={<Cse />} />
                  <Route path="Ee" element={<Ee />} />
                  <Route path="Ce" element={<Ce />} />
                </Route>
                <Route path="ContactUs" element={<ContactUs />} />
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="LogOut" element={<LogOut onLogout={handleLogout} />} />
                <Route path="Student" element={<ProjectCategories getNameOfCategory={getNameOfCategory} />} />
                <Route path="ProjectPage" element={
                <ProjectCategory
                 CategoryName={CategoryName} 
                 logedInStudentData ={logedInStudentData}
                />} />
                <Route path="ProjectDesc" element={<ProjectDesc />} />
                <Route path="UserProfile" element={<UserProfile logedInStudentData= {logedInStudentData} />} />
                <Route path="History" element={<History />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )

    }


  }

  else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<SignIn sendDataToParent={getData} />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="SignIn" element={<SignIn sendDataToParent={getData} />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />


          </Routes>
        </BrowserRouter>
      </>
    )

  }

}

export default App;
