import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact; //now we can use name or other properties of 
    // contact directly instead of contact.name etc
    // console.log(props);
    const DeleteContact = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
        if (confirmDelete) {
            props.clickHandler(id);
        }
    };
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link
                    to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
                >
                    {/* <div className="header">{id}</div> */}
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
                <i className="trash alternate outline icon" style={{ color: "red", marginLeft: "auto" }}
                    onClick={() => DeleteContact(id)}
                ></i>
            </div>
            {/* <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
            <i className="edit alternate outline icon" style={{ color: "red", marginTop: "7px" }}
                // onClick={() => DeleteContact(id)}
            ></i>
            </Link> */}
        </div>
    );

}
export default ContactCard;
