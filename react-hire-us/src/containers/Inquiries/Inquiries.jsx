import { useState, useEffect } from "react"
import InquiryCard from "../../components/InquiryCard/InquiryCard.jsx";
import "./inquires.scss";

const Inquiries = () => {

  const [ companyData, setCompanyData ] = useState("");
  const [ singleCompany, setSingleCompany ] = useState("")

  let inquisitionId = 0;

  const getCompanies = () => { 
    fetch("http://34.121.174.111:3002/api/students")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setCompanyData(data);
    })
  }

  const getCompaniesByID = () => {
    fetch(`http://34.121.174.111:3002/api/students/${inquisitionId}`)
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
        <input className="input box" placeholder="Inquisition ID" onChange={(e) => inquisitionId = e.target.value}/>
        <button onClick={getCompaniesByID}>Get Inquiry</button>
      </div>
      
      {singleCompany ? <InquiryCard companyObj = {singleCompany}/> : companyData ? companyData.map((companyObj) => {
        return <InquiryCard companyObj = {companyObj}/> 
      }) : ""}
    </div>
  )
}

export default Inquiries;