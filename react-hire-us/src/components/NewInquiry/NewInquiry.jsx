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
      <label htmlFor="name">Enter Company Name:</label>
      <input datatype="name" type="text" name="name" />
      <label htmlFor="email">Enter Company Email:</label>
      <input type="email" name="email"/>
      <button onClick={handleClick} type="button">Submit Inquiry</button>
    </form>

  )
}

export default NewInquiry;