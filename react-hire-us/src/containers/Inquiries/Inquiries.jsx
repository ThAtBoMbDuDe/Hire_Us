import { useState, useEffect } from "react"
import InquiryCard from "../../components/InquiryCard/InquiryCard.jsx";
import "./inquires.scss";

const Inquiries = () => {

  const [ companyData, setCompanyData ] = useState("");
  const [ singleCompany, setSingleCompany ] = useState("")

  let cName = null;

  const getCompanies = () => { 
    fetch("http://localhost:3002/api/inquiries")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setCompanyData(data);
    })
  }

  const getCompany = () => {
    fetch(`http://localhost:3002/api/inquiries/${cName}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setSingleCompany(data);
      
    })
    .catch((err) => {
      alert("We just put this up! You think we have that many inquiries already?")
      console.log(err)
    })
  }

  useEffect(getCompanies, [])



  return (
    <div>
      <div className="inquireID_card">
        <input className="input box" placeholder="Company Name" onChange={(e) => cName = e.target.value}/>
        <button onClick={getCompany}>Get Inquiry</button>
      </div>
      
      {singleCompany ? <InquiryCard companyObj = {singleCompany}/> : companyData ? companyData.map((companyObj) => {
        return <InquiryCard companyObj = {companyObj}/> 
      }) : ""}
    </div>
  )
}

export default Inquiries;