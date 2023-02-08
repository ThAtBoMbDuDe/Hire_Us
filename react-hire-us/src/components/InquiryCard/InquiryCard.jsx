import "./InquiryCard.scss";

const InquiryCard = (props) => {

  const {companyName, fullName, companyEmail, jobTitle, contactNum, personalEmail} = props.companyObj

return (

  <div>
        <h2>Company Name: {companyName}</h2>
        <p>Full Name: {fullName}</p>
        <p>Company Email: {companyEmail}</p>
        <p>Job Title: {jobTitle}</p>
        <p>Contact Number: {contactNum}</p>        
        <p>Personal Email: {personalEmail}</p>
  </div>

)
}

export default InquiryCard;