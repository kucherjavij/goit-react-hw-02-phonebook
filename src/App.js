import React, {Component} from "react";
import Form from "./components/form";
import { nanoid } from 'nanoid'
import ContactList from "./components/contactalist";
import Filter from "./components/filter";
class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: ''
  }
  
formSubmitHandler = data => {
  const {contacts} = this.state
  const contact = {
    name: data.name,
    number: data.number,
    id: nanoid()
  }
if (contacts.find(tel => tel.name.toLowerCase() === contact.name.toLowerCase()) ||
contacts.find(tel => tel.number === contact.number)) {
  alert(`${contact.name} contact is already exists!`);
  return;
}

  this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]
  }))
}

deleteContact = (contactId) => {
  this.setState(({contacts}) => ({
    contacts: contacts.filter(contact => contact.id !== contactId)
  }));
};

onchangeFilter = e => {
  this.setState({filter: e.currentTarget.value})
}

filterContact = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase().trim();
  
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

  render () {
    return (
    <div>
     <Form onSubmit={this.formSubmitHandler}/>
     <Filter value={this.state.filter} onChange={ this.onchangeFilter}/>
     <ContactList onRender={this.filterContact()} deleteContacts={this.deleteContact}/>
    </div>
  );}
}

export default App;
