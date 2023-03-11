import React, { useState} from 'react';
import StudInfoSidebar from "../../components/StudInfoSidebar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WorkSamples=() =>{

  const navigate = useNavigate();

  const [ blogLink, setBlogLink ] = useState("");
  const [ githubLink, setGithubLink ] = useState("");
  const [ playstoreLink, setPlaystoreLink ] = useState("");
  const [ behanceLink, setBehanceLink ] = useState("");
  const [ otherPortfolioLink, setOtherPortfolioLink ] = useState("");

  const url = 'http://localhost:5000';

  const handleBlog = (e) => {
    setBlogLink(e.target.value);
  }

  const handleGithubLink = (e) => {
    setGithubLink(e.target.value);
  }

  const handlePlaystoreLink = (e) => {
    setPlaystoreLink(e.target.value);
  }

  const handleBehanceLink = (e) => {
    setBehanceLink(e.target.value);
  }

  const handleOtherPortfolioLink = (e) => {
    setOtherPortfolioLink(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = {
            blogLink: {
              link: blogLink
            },
            githubLink: {
              link: githubLink
            },
            playstoreLink: {
              link: playstoreLink
            },
            behanceLink: {
              link: behanceLink
            },
            otherPortfolioLink: {
              link: otherPortfolioLink
            },
          };
          console.log(data);

        console.log(localStorage);
      const response = await axios.patch(`${url}/students/self`, data,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      console.log(response.data);
      console.log(localStorage.getItem('userType'));

    //   localStorage.setItem("token", response.data.companyToken);
    //   localStorage.setItem("userType", "company");
      setBlogLink("");
      setGithubLink("");
      setPlaystoreLink("");
      setBehanceLink("");
      setOtherPortfolioLink("");
      // alert("Successfully added the Work Samples.");
      navigate('/experience');
    } catch(error) {
        setBlogLink("");
        setGithubLink("");
        setPlaystoreLink("");
        setBehanceLink("");
        setOtherPortfolioLink("");
      alert('Error occured while adding the Work Samples');
    }
  }
  
    return(
        <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
 
      <StudInfoSidebar selected="WorkSamples"/>
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Work Samples</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-12 shadow-main-sd">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-5 font-bold text-xl">Add your work sample links here if any:</label>
                            <label className="mb-1 font-medium">Blog Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text'className="rounded-xl border border-purple w-96 p-1" onChange={handleBlog}/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-1 font-medium">Github Profile link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96 p-1" onChange={handleGithubLink}/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-1 font-medium">Playstore Developer Account Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96 p-1" onChange={handlePlaystoreLink}/>
                            </div>
                        </div>
                        
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-1 font-medium">Behance Portfolio Link:</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="text" className="rounded-xl border border-purple w-96 p-1" onChange={handleBehanceLink}/>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-4">
                            <label className="mb-1 font-medium">Other Portfolio Link:</label>
                            <div className="flex flex-row flex-wrap justify-between" onChange={handleOtherPortfolioLink}>
                            <input type="text" className="rounded-xl border border-purple w-96 p-1"/>
                            </div>
                        </div>
                        
    
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-10 justify-evenly">
                        <button type="submit" className=" bg-purple rounded-xl text-white p-3 px-10" onClick={handleSubmit}>Next</button>
                        {/* <button type="submit" className=" bg-purple rounded-xl text-white p-3 px-7">Previous</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
      
    )
}
export default WorkSamples;