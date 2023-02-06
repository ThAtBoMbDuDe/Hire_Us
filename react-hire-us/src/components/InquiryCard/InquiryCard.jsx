import "./InquiryCard.scss";

const InquiryCard = (props) => {

  const {name, email, id} = props.studentObj

return (

  <div>
        <h2>Company Name: {name}</h2>
        <p>Company Email: {email}</p>
        <p>Order of Inquisition: {id}</p>
        <p></p>
  </div>

)
}

export default InquiryCard;