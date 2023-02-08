import "./NewInquiry.scss";

const NewInquiry = () => {

  const newCompanyInfo = {};

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
      <label className="input" htmlFor="companyName">Enter company name:
      <input className="input box" datatype="companyName" type="text" name="companyName" />
      </label>
      <label className="input" htmlFor="companyEmail">Enter company email:
      <input className="input box" type="companyEmail" name="companyEmail"/>
      </label>
      <label className="input" htmlFor="fullName">Enter full name:
      <input className="input box" type="fullName" name="fullName"/>
      </label>
      <label className="input" htmlFor="job">Enter job title:
      <input className="input box" type="job" name="job"/>
      </label>
      <label className="input" htmlFor="phone">Enter best contact number:
      <input className="input box" type="phone" name="phone"/>
      </label>
      <label className="input" htmlFor="personalEmail">Enter personal email:
      <input className="input box" type="personalEmail" name="personalEmail"/>
      </label>


    </form>
      <button className="box" onClick={handleClick} type="button">Submit Inquiry</button>
    </div>
  )
}

export default NewInquiry;