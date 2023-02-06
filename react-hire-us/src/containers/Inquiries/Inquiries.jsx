import { useState, useEffect } from "react"
import InquiryCard from "../../components/InquiryCard";

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
      alert("No Student with that ID found, please try again.")
      console.log(err)
    })
  }

  useEffect(getCompanies, [])



  return (
    <div>
      <div>
        <input placeholder="Input Student ID" type="number" onChange={(e) => inquisitionId = e.target.value}/>
        <button onClick={getCompaniesByID}>Get Student</button>
      </div>
      
      {singleCompany ? <InquiryCard studentObj = {singleCompany}/> : companyData ? companyData.map((studentObj) => {
        return <InquiryCard studentObj = {studentObj}/> 
      }) : ""}
    </div>
  )
}

export default Inquiries;