import React from "react";
import user from "../images/user.png";
import { useLocation, useParams } from "react-router-dom";

const ContactDetails = (props) => {
//   const { name, email } = props.location.state.contact;
  return (
    <div style={{ marginTop: "70px" }} className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          {/* Display the name and email dynamically */}
          <div className="header">name</div>
          <div className="description">email</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
