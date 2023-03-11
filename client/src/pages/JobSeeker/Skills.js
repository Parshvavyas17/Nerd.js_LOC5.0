import React, { useState } from 'react';
import StudInfoSidebar from "../../components/StudInfoSidebar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Skills=() =>{
    const navigate = useNavigate();
    const [ softSkill, setSoftSkill ] = useState("");
    const [ softScale, setSoftScale ] = useState("");
    const [ hardSkill, setHardSkill ] = useState("");
    const [ hardScale, setHardScale ] = useState("");
    const [ skills, setSkills ] = useState([]);

  const url = 'http://localhost:5000';

  const addSoftSkill = (e) => {
    e.preventDefault();
    const data = {
        name: softSkill,
        level: softScale
    }
    const temp = [...skills, data];
    setSkills(temp);
    setSoftSkill("");
    setSoftScale(0);
  }

  const addHardSkill = (e) => {
    e.preventDefault();
    const data = {
        name: hardSkill,
        level: hardScale
    }
    const temp = [...skills, data];
    setSkills(temp);
    setHardSkill("");
    setHardScale(0);
  }

  const handleSoftSkills = (e) => {
    setSoftSkill(e.target.value);
  }

  const handleHardSkills = (e) => {
    setHardSkill(e.target.value);
  }

  const handleSoftScale = (e) => {
    setSoftScale(e.target.value);
  }

  const handleHardScale = (e) => {
    setHardScale(e.target.value);
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const skillStrings = skills.map((skill) => skill.name);
        const skill = skillStrings.join(' ');
        console.log(skills);
        
        try {
            const data = {
                skills: skill, 
                skillsStudent: skills,
            };
            const response = await axios.patch(`${url}/students/self`, data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-type': "application/json",
                }
            });
            console.log(response.data);
            // alert("Succesful");
            navigate('/worksamples');

        } catch(error) {
            alert("Error");
            console.log(error.message);
        }
        setSoftSkill("");
        setSoftScale(0);
        setHardSkill("");
        setHardScale(0);
    }

    return(
        <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
 
      <StudInfoSidebar selected="Skills"/>
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-4">Skills</div>
                <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-16 shadow-main-sd">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <div>Soft Skills</div>
                            <label className="mb-2 font-medium">What Soft Skills Do you have?</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                {/* {Array.from(Array(counterSoft)).map((c, index)=>{
                                    return <div>
                                        <input key={c} type="text" className='rounded-xl border border-purple w-96 m-1'></input>
                                        <input type="range" min="1" max="5" step={1} className="accent-purple" onChange={handleperformScale} value={softScale}/>
                                        </div>
                                })}
                                <button onClick={handleClickSoft}>ADD+</button> */}
                                <input type='text' name='softskills' className="rounded-xl border border-purple w-96" onChange={handleSoftSkills} value={softSkill} />
                            </div>
                            
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">How would you rate yourself?(on a scale of 1 to 5)</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type="range" name='softscale' min="1" max="5" step={1} className="accent-purple" onChange={handleSoftScale} value={softScale} />
                            </div>
                        </div>
                        <button onClick={addSoftSkill}>Add</button>

                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <div>Hard Skills</div>
                            <label className="mb-2 font-medium">What Skills Do you have?</label>
                            <div className="flex flex-row flex-wrap justify-between">
                                <input type='text' name='hardskills' className="rounded-xl border border-purple w-96" onChange={handleHardSkills} value={hardSkill} />
                            </div>
                        </div>
                        
                        <div className="flex flex-col min-w-full min-h-full mb-7">
                            <label className="mb-2 font-medium">How would you rate yourself?(on a scale of 1 to 5)</label>
                            <div className="flex flex-row flex-wrap justify-between">
                            <input type="range" min="1" max="5" name='hardscale' step={1} className="accent-purple" value={hardScale} onChange={handleHardScale}/>
                            </div>
                        </div>
                        <button onClick={addHardSkill}>Add</button>
    
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-[3.75rem] justify-evenly">
                        <button type="submit" className="bg-purple rounded-xl text-white p-3 px-11" onClick={handleSubmit}>Next</button>
                        <button type="submit" className=" bg-purple rounded-xl text-white p-3 px-7">Previous</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
      
    )
}


export default Skills;
