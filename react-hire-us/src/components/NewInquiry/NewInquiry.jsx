import "./NewInquiry.scss";
import { useState } from "react";


const NewInquiry = () => {


  const [companyName, setCName] = useState('');
  const [fullName, setName] = useState('');
  const [companyEmail, setCEmail] = useState('');
  const [jobTitle, setJob] = useState('');
  const [contactNum, setCNum] = useState('');
  const [personalEmail, setEmail] = useState('');

  const newCompanyInfo = {
    companyName: `${companyName}`,
    fullName: `${fullName}`,
    companyEmail: `${companyEmail}`,
    jobTitle: `${jobTitle}`,
    contactNum: `${contactNum}`,
    personalEmail: `${personalEmail}`,
  };

  const postCompany = () => {
    fetch("http://localhost:3002/api/inquiries", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: "POST",
      body: JSON.stringify(newCompanyInfo)
    })
  }


  const updateCName = (event) => {
    setCName(event.target.value)
  };  
  const updateFullName= (event) => {
    setName(event.target.value)
  };  
  const updateCEmail = (event) => {
    setCEmail(event.target.value)
  };  
  const updateJob = (event) => {
    setJob(event.target.value)
  };  
  const updateCNum = (event) => {
    setCNum(event.target.value)
  };  
  const updateEmail = (event) => {
    setEmail(event.target.value)
  };  

  const handleClick = (e) => {
    postCompany()    
  }

  return (
    <div>
   
      <h1>Get Hired Today</h1>
    <form className="container">
      <label className="input" htmlFor="companyName">Enter company name:</label>
      <input className="input box" onChange={updateCName} type="text" name="companyName" />
      
      <label className="input" htmlFor="fullName">Enter full name:</label>
      <input className="input box" onChange={updateFullName} type="text" name="fullName"/>

      <label className="input" htmlFor="companyEmail">Enter company email:</label>
      <input className="input box" onChange={updateCEmail} type="text" name="companyEmail"/>
      
      <label className="input" htmlFor="jobTitle">Enter job title:</label>
      <input className="input box" onChange={updateJob} type="text" name="jobTitle"/>
     
      <label className="input" htmlFor="contactNum">Enter best contact number:</label>
      <input className="input box" onChange={updateCNum} type="text" name="contactNum"/>
      
      <label className="input" htmlFor="personalEmail">Enter personal email:</label>
      <input className="input box" onChange={updateEmail} type="text" name="personalEmail"/>
    </form>
      <button className="box" onClick={handleClick} type="button">Submit Inquiry</button>
    </div>
  )
}

export default NewInquiry;