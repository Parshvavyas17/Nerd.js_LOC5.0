import StudInfoSidebar from "../../components/StudInfoSidebar";
import { useState ,useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const StudentProfile = () => {

    const navigate = useNavigate();  
    const url = "http://localhost:5000";
    const [student,setStudent] =useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [currentCity, setCurrentCity] = useState("");

    const handlefNameChange = (e) => {
        setFirstName(e.target.value);
      };
      const handlelNameChange = (e) => {
        setLastName(e.target.value);
      };
      const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
      const handleNoChange = (e) => {
        setMobileNo(e.target.value);
      };
      const handleCityChange = (e) => {
        setCurrentCity(e.target.value);
      };
      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`${url}/students/self`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            });
            return response.data;
          } catch(error) {
            return null;
          }
        }
        getData().then((user) => {
          console.log(user);
          setStudent(user);
        })
        
      }, []);
    

      const handleSubmit = async (e) =>
      {
        e.preventDefault();
        try{
            const data = {
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                mobileNo: mobileNo,
                currentCity: currentCity,
              };

              const response = await axios.patch(`${url}/students/self`, data, {
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem("token")}`,
                  "Content-type": "application/json",
                },
              });
              console.log(response.data);
              console.log(localStorage.getItem('userType'));

            //   setFirstName

              // alert("Details Added");
              navigate('/educationinfo');


        }
        catch (error) {
            alert("Error occured");
            console.log(error.message);

        }
      }



  return (
    <div className='bg-purple w-full h-screen flex font-main'>
        <StudInfoSidebar selected={`Personal`} />
        <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-10">Personal Information</div>
                <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-8 shadow-md">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold">Name:</label>
                            <div className="flex flex-row">
                                {/* <input type='text' name="title" placeholder="Mr/Ms" className="rounded-xl border-purple w-10 border-none focus:border-white" /> */}
                                <input type='text' name='firstName' className="rounded-xl border border-purple w-56 p-1" onChange={handlefNameChange}/>
                                <input type='text' name='lastName' className="rounded-xl border border-purple w-56 p-1 ml-5" onChange={handlelNameChange} />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Gender:</label>
                            <div className="flex flex-row flex-wrap">
                            <select
                            name="Gender"
                            id="Gender"
                            className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" onChange={handleGenderChange}>
                                <option value={null} disabled>Selected</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>                            
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Mobile Number:</label>
                            <div className="flex flex-row flex-wrap">
                                <input type='text' name='mobNo' className="rounded-xl border border-purple w-96 p-1" onChange={handleNoChange}/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Current City:</label>
                            <div className="flex flex-row flex-wrap">
                                <input type='text' name='city' className="rounded-xl border border-purple w-96 p-1" onChange={handleCityChange}/>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                            <button type="submit" className="flex-reverse align border bg-purple rounded-xl w-24 p-2 text-white font-semibold" onClick={handleSubmit}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StudentProfile;
