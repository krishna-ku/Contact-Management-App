import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Defiscreen from './Defiscreen';
import ContactDetails from './ContactDetails';
import { uuid } from 'uuidv4';
import api from "../api/contacts";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // const [searchTerm, setSearchTerm] = ("");
  // const [searchResults, setSearchResults] = useState("");
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return storedContacts ? JSON.parse(storedContacts) : [];
  // });

  // Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      // id:uuid,
      ...contact
    }
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  // const updateContactHandler=()=>{};

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm != "") {
  //     const newContactList = contacts.filter((contact) => {
  //       return Object.values(contact)
  //         .join(" ").toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(newContactList);
  //   }else{
  //     setSearchResults(contacts);
  //   }
  // };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContactsFromServer = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContactsFromServer();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          {/* <Route 
        path='/' 
        exact
        render={(props)=>(
          <ContactList
          {...props} contacts={contacts} getContactEmail={removeContactHandler}/> )} /> */}
          <Route
            path='/'
            element={<ContactList contacts={contacts}
              getContactEmail={removeContactHandler}
              // term={searchTerm}
              // searchKeyword={searchHandler}
            />}
          />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          {/* <Route path='/edit' element={<EditContact updateContactHandler={updateContactHandler} />} /> */}
          <Route path='contact/:email' element={<ContactDetails />} />
          {/* <Route exact path="/" element={<Defiscreen />} /> */}
          {/* <AddContact addContactHandler={addContactHandler}/> */}
          {/* <ContactList contacts={contacts} getContactEmail={removeContactHandler}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
