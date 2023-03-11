import React, { useState, useEffect } from "react";
import SideBarCompany from "../../components/SideBarCompany";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CompanyInformation = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:5000'
  const [ website, setWebsite ] = useState("");
  const [ companyInfo, setCompanyInfo ] = useState("");
  const [ noOfEmp, setNoOfEmp ] = useState('');
  const [ typeOfCompany, setTypeOfCompany ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ contactNo, setContactNo ] = useState("");
  const [ company, setCompany ] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}/company/self`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        // setCompany(response.data.companyUser);
        // setNoOfEmp(company.noOfEmp);
        // setLocation(company.location);
        // setContactNo(company.contactNo);
        // setLocation(company.location);
        // setTypeOfCompany(company.typeOfCompany);
        // setCompanyInfo(company.companyInfo);
        // setWebsite(company.website);
        return response.data;
      } catch(error) {
        setCompany(null);
        setNoOfEmp("");
        setLocation("");
        setContactNo("");
        setLocation("");
        setTypeOfCompany("");
        setCompanyInfo("");
        setWebsite("");
      }
    }
    getData().then((res) => {
      setCompany(res);
    });
  }, [company]);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }
  const handleEmp = (e) => {
    setNoOfEmp(e.target.value);
  }

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  }

  const handleInfoChange = (e) => {
    setCompanyInfo(e.target.value);
  }

  const handleCompanyType = (e) => {
    setTypeOfCompany(e.target.value);
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      console.log(localStorage.getItem('token'));
      const data=
      {
        website: website, 
        companyInfo: companyInfo, 
        typeOfCompany: typeOfCompany,
        location: location,
        noOfEmp: noOfEmp,
      };
      console.log(localStorage.getItem('token'));
      console.log(data);
      const response = await axios.patch(`${url}/company/self`,
        data , {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(localStorage.getItem('token'));
      console.log(data);
      // console.log(localStorage.token);
      console.log(response.data);
      // localStorage.setItem("token", response.data.studentToken);
      // localStorage.setItem("userType", "student");

      
      console.log(localStorage.getItem("userType"));
      // console.log(localStorage.getItem("token"));
      setWebsite(response.data.website);
      setCompanyInfo(response.data.companyInfo);
      setTypeOfCompany(response.data.typeOfCompany);
      setCompanyInfo(response.data.companyInfo);
      setLocation("");
      alert("Registered");
      navigate('/companydashboard');
      
    } catch(error) {
      setWebsite("");
      setCompanyInfo("");
      setLocation("");
      setTypeOfCompany("");
      setLocation("");
      alert('Error occured while patching');
      console.log(error.message);
    }
  }
  
  return (
    <>
      <div className="bg-[#40189D] w-full min-h-screen flex font-ourfont">
        <SideBarCompany selected="Profile" />
        <div className="bg-white w-full rounded-tl-[45px] rounded-bl-[45px] ml-16">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <header>
              <h1 className="text-3xl font-extrabold text-center ml-4">
                Company Information
              </h1>
            </header>
            <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
            </p>
            <div className="bg-purple bg-opacity-[.12] rounded-[34px] relative mr-10 h-[0%] shadow shadow-inherit shodow-lg">
              <div className="mt-4">
                <form className="mt-4">
                  <div className="mx-8 mt-8 text-lg">
                    <div className="m-3">
                      <label className="font-semibold" name='logo'>Upload Logo</label>
                      <input type="file" name="bg" id="bg" className="m-3" />
                    </div>
                    <div className="flex justify-between mt-16 mx-32">
                      <div className="m-3 ">
                        <label className="font-semibold">Name: </label>
                        <br />
                        <div
                          className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base" 
                        >{ company ? company.name : 'Company Name'}</div>
                      </div>
                      <div className="m-3 mr-32">
                        <label className="font-semibold">Location: </label>
                        <br />
                        <input
                          type="text"
                          className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                          onChange={handleLocation}
                          value={location}
                          name='location'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-40">
                    <div className="m-3">
                      <label className="font-semibold">Phone Number:</label>
                      <br />
                      <div
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] h-[50%] mt-2 p-[0.3rem] text-base">
                          {company ? company.contactNo : 'Company Contact no'}
                      </div>
                    </div>
                    <div className="m-3 mr-32">
                      <label className="font-semibold">No. Of Employees: </label>
                      <br />
                      <input
                        type="number"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                        onChange={handleEmp}
                        value={noOfEmp}
                        name='noOfEmp'
                      />
                    </div>
                  </div>
                  <div className="flex justify-between my-4 text-lg mx-40">
                    <div className="m-3">
                      <label className="font-semibold">Company Type: </label>
                      <br />
                      <select
                        name="typeOfCompany"
                        id="typeOfCompany"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                        onChange={handleCompanyType}
                      >
                        <option value={null}>Select</option>
                        <option value="PbLc">Public Limited</option>
                        <option value="PrLc">Privated Limited</option>
                        <option value="JVC">Joint Venture</option>
                        <option value="PF">Partnership Firm</option>
                        <option value="OPC">One Person Company</option>
                        <option value="SP">Sole Proprietory</option>
                        <option value="BO">Branch Office</option>
                        <option value="NGO">NGO</option>
                      </select>
                    </div>
                    <div className="m-3 mr-32">
                      <label className="font-semibold">Website: </label>
                      <br />
                      <input
                        type="location"
                        className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] w-[150%] mt-2 p-[0.3rem] text-base"
                        onChange={handleWebsiteChange}
                        name='website'
                        value={website}
                      />
                    </div>
                  </div>
                  <div className="m-8 mt-20">
                    <h4 className="text-2xl font-semibold">Description</h4>
                    <hr />
                  </div>
                  <div className="m-8">
                    <textarea
                      rows="10"
                      cols="100"
                      className="border border-[#40189D] bg-[#F2F2F2] rounded-[34px] mt-4 p-3"
                      onChange={handleInfoChange}
                      name='companyInfo' 
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-purple text-white m-8 rounded-[34px] p-3 text-center w-1/6 font-semibold" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInformation;
