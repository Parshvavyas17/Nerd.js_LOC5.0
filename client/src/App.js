import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Authentication/Login";
import SignupCompany from "./pages/Authentication/SignupCompany";
import Dashboard from "./pages/JobSeeker/Dashboard";
import SearchJob from "./pages/JobSeeker/SearchJob";
import ApplicationStud from "./pages/JobSeeker/ApplicationStud";
import Edit from "./pages/JobSeeker/Edit";
import StudentProfile from "./pages/JobSeeker/StudentProfile";
import EducationInfo from "./pages/JobSeeker/EducationInfo";
import Skills from "./pages/JobSeeker/Skills";
import WorkSamples from "./pages/JobSeeker/WorkSamples";
import Experience from "./pages/JobSeeker/Experience";
import ApplicationCompany from "./pages/Company/ApplicationCompany";
import CompanyInformation from "./pages/Company/CompanyInformation";
import CompanyPostVacancy from "./pages/Company/CompanyPostVacancy";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import Calendar from "./pages/JobSeeker/Calendar";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobSeeker/JobDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignupCompany />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/searchjob" element={<SearchJob />} />
        <Route path="/applicationstud" element={<ApplicationStud />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/educationinfo" element={<EducationInfo />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/worksamples" element={<WorkSamples />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/applicationcompany" element={<ApplicationCompany />} />
        <Route path="/companyinformation" element={<CompanyInformation />} />
        <Route path="/companypostvacancy" element={<CompanyPostVacancy />} />
        <Route path="/companydashboard" element={<CompanyDashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/jobDetails/:jid" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;
