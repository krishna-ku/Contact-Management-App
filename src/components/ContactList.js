import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    // const inputEl=useRef("");
    const deleteContactHandler = (email) => {
        props.getContactEmail(email);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler} />
        );
    });
    // const getSearchTerm=()=>{
    //     props.searchKeyword(inputEl.current.value);asfsdfdafas
    // };
    return (
        <div style={{ marginTop: '70px' }}>
            <h2>
                Contact List
                <Link to="/add">
                    <button style={{ marginLeft: "300px" }} className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            {/* <div className="ui icon input">
                <input 
                ref={inputEl}
                style={{ borderColor: "black", width: "300px" }}
                    type="text" placeholder="Search Contact" 
                    className="prompt" value={props.term} 
                    onChange={getSearchTerm} />
                <i className="search icon"></i>
            </div> */}
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
}
export default ContactList;