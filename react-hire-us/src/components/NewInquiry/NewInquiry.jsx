import "./NewInquiry.scss";

const NewInquiry = () => {

  let newCompanyInfo = {
    companyName: '',
    fullName: '',
    companyEmail: '',
    jobTitle: '',
    contactNum: '',
    personalEmail: ''
  };

  const postCompany = () => {
    fetch("http://192.168.56.10:3002/api/inquiries", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: "POST",
      body: JSON.stringify(newCompanyInfo)
    })
  }
 
  const getCompanyData = (e) => {
    newCompanyInfo.companyName = e.currentTarget.parentNode[0].value
    newCompanyInfo.fullName = e.currentTarget.parentNode[1].value
    newCompanyInfo.companyEmail = e.currentTarget.parentNode[2].value
    newCompanyInfo.jobTitle = e.currentTarget.parentNode[3].value
    newCompanyInfo.contactNum = e.currentTarget.parentNode[4].value
    newCompanyInfo.personalEmail = e.currentTarget.parentNode[5].value
    
  }

  const handleClick = (e) => {
    getCompanyData(e)
    postCompany()
    
  }

  return (
    <div>
   
      <h1>Get Hired Today</h1>
    <form className="container">
      <>
      <label className="input" htmlFor="companyName">Enter company name:</label>
      <input className="input box" type="text" name="companyName" />
      
      <label className="input" htmlFor="fullName">Enter full name:</label>
      <input className="input box" type="text" name="fullName"/>

      <label className="input" htmlFor="companyEmail">Enter company email:</label>
      <input className="input box" type="text" name="companyEmail"/>
      
      <label className="input" htmlFor="jobTitle">Enter job title:</label>
      <input className="input box" type="text" name="jobTitle"/>
     
      <label className="input" htmlFor="contactNum">Enter best contact number:</label>
      <input className="input box" type="text" name="contactNum"/>
      
      <label className="input" htmlFor="personalEmail">Enter personal email:</label>
      <input className="input box" type="text" name="personalEmail"/>
      </>


    </form>
      <button className="box" onClick={handleClick} type="button">Submit Inquiry</button>
    </div>
  )
}

export default NewInquiry;