import "./NewInquiry.scss";

const NewInquiry = () => {

  const newCompanyInfo = {};

  const postCompany = () => {
    fetch("http://34.121.174.111:3002/api/students", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: "POST",
      body: JSON.stringify(newCompanyInfo)
    })
  }
 
  const getCompanyData = (e) => {
    newCompanyInfo.name = e.currentTarget.parentNode[0].value
    newCompanyInfo.email = e.currentTarget.parentNode[1].value
    
  }

  const handleClick = (e) => {
    getCompanyData(e)
    postCompany()
    
  }

  return (
    <form>
      <label htmlFor="companyName">Enter company name:</label>
      <input datatype="companyName" type="text" name="companyName" />
      <label htmlFor="companyEmail">Enter company email:</label>
      <input type="companyEmail" name="companyEmail"/>
      <label htmlFor="fullName">Enter full name:</label>
      <input type="fullName" name="fullName"/>
      <label htmlFor="job">List your job title here:</label>
      <input type="job" name="job"/>
      <label htmlFor="phone">Enter best contact number here:</label>
      <input type="phone" name="phone"/>
      <label htmlFor="personalEmail">Enter personal email:</label>
      <input type="personalEmail" name="personalEmail"/>

      <button onClick={handleClick} type="button">Submit Inquiry</button>

    </form>

  )
}

export default NewInquiry;