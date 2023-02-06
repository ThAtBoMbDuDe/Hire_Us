const NewInquiry = () => {

  const newStudentInfo = {};

  const postStudent = () => {
    fetch("http://34.121.174.111:3002/api/students", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: "POST",
      body: JSON.stringify(newStudentInfo)
    })
  }
 
  const getStudentData = (e) => {
    newStudentInfo.name = e.currentTarget.parentNode[0].value
    newStudentInfo.email = e.currentTarget.parentNode[1].value
    
  }

  const handleClick = (e) => {
    getStudentData(e)
    postStudent()
  }

  return (
    <form>
      <label htmlFor="name">Enter Name:</label>
      <input datatype="name" type="text" name="name" />
      <label htmlFor="email">Enter Email:</label>
      <input type="email" name="email"/>
      <button onClick={handleClick} type="button">Submit New Student</button>
    </form>

  )
}

export default NewInquiry;