import StudInfoSidebar from "../../components/StudInfoSidebar";
import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../context/appContext";


const EducationInfo = () => {
    const navigate = useNavigate();
    const url = 'http://localhost:5000';
    // const {token} = useContext(AppContext);

    const [gradStatus, setGradStatus] = useState({});
    const [score, setScore] = useState({});
    const [hscmarks, setHscMarks] = useState({});
    const [sscmarks, setSscMarks] = useState({});
    const [degree, setDegree] =useState({});
    const [stream, setStream] = useState({});
    const [college, setCollege] = useState({});
    const [hscschool, setHscSchool] = useState({});
    const [sscschool, setSscSchool] = useState({});
    const [startYear, setStartYear] = useState({});
    const [endYear, setEndYear] = useState({});

    const handleGradChange = (e) => {
        setGradStatus(e.target.value);
    };
    const handleScoreChange = (e) => {
        setScore(e.target.value);
    };
    const handleDegree = (e) => {
        setDegree(e.target.value);
    };
    const handleStream = (e) => {
        setStream(e.target.value);
    };
    const handleStartChange = (e) => {
        setStartYear(e.target.value);
    };
    const handleEndChange = (e) => {
        setEndYear(e.target.value);
    };
    const handleHscMarks = (e) => {
        setHscMarks(e.target.value);
    };
    const handleHscSchool = (e) => {
        setHscSchool(e.target.value);
    };
    const handleSscMarks = (e) => {
        setSscMarks(e.target.value);
    };
    const handleSscSchool = (e) => {
        setSscSchool(e.target.value);
    };
    const handleCollege = (e) => {
        setCollege(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const grad = {
                gradStatus: gradStatus,
                score: score,
                startYear: startYear,
                endYear: endYear,
                college:college,

            }
            const hsc ={
                score:hscmarks,
                college:hscschool,
            }
            const ssc={
                score:sscmarks,
                college:sscschool,
            }
            const data = {
                graduation: grad,
                hsc:hsc,
                ssc:ssc,
            };
            console.log(data);
            const response = await axios.patch(`${url}/api/user/self`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-type": "application/json",
                },
            });
            console.log(data);
            console.log(response.data);
            console.log(localStorage.getItem('userType'));
            console.log("RTYU")
            alert("Details Added");
            navigate('/skills');
              
        }
        catch (error) {
            console.log("RTYU")
            alert("Error Occured");
        }
    }

    return (
        <div className='bg-purple w-full h-fit flex font-ourfont font-ourfont'>
            <StudInfoSidebar selected={`Educational`} />
            <div className="container bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl flex flex-wrap justify-center items-center">
                <div className="flex flex-col w-1/2 h1/2 py-8">
                    <div className="text-center text-4xl font-bold pb-4 mb-7">Education Details</div>
                    <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-10 shadow-main-sd">
                        <form>
                            <div className="flex flex-col min-w-full min-h-full mb-5">
                                <label className="font-semibold text-lg">Graduation Status* :</label>
                                <div className="justify-around">
                                    <div className="flex flex-row flex-wrap">
                                        <input type="radio" id="radio1" name="radio" value="Pursuing" onChange={handleGradChange} />
                                        <label className="font-normal ml-2">Pursuing</label> &nbsp;&nbsp;
                                        <input type="radio" id="radio2" name="radio" value="Completed" onChange={handleGradChange} />
                                        <label className="font-normal ml-2">Completed</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Graduation (CGPA / Marks)*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" onChange={handleScoreChange} />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">College / University*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" onChange={handleCollege} />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Degree*:<br />
                                        <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" onChange={handleDegree} />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">Stream*:<br />
                                        <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" onChange={handleStream} />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Start Year*:<br />
                                        <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" onChange={handleStartChange} />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">End Year*:<br />
                                        <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" onChange={handleEndChange} />
                                    </label>
                                </div>
                            </div>

                            {/* <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Performance Scale:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">Performance:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>
                                </div>
                            </div> */}
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Higher Seconday College Name*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscmarks' className="rounded-xl border border-purple w-96 p-1" onChange={handleHscSchool} />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">XII (Senior Secondary) / Diploma Percentage*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscmarks' className="rounded-xl border border-purple w-96 p-1" onChange={handleHscMarks} />
                                </div>
                            </div>
                            {/* <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">English Marks in XIIth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Science Marks in XIIth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1"/>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Math Marks in XIIth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div> */}
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">School Name*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='sscschool' className="rounded-xl border border-purple w-96 p-1" onChange={handleSscSchool} />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">X (Secondary) Percentage*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='sscmarks' className="rounded-xl border border-purple w-96 p-1" onChange={handleSscMarks}/>
                                </div>
                            </div>
                            {/* <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">English Marks in Xth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1"/>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Science Marks in Xth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Math Marks in Xth:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='hscschool' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div> */}
                            <div className="flex flex-row-reverse min-w-full min-h-full mt-7">
                                <button type="submit" className="flex-reverse align bg-purple rounded-xl text-white p-2 px-10" onClick={handleSubmit}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationInfo;