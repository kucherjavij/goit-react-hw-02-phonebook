import { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component{

    render (){
       return  (<div>
        <h2>Contacts</h2>
        <ul>
       {this.props.onRender.map(contact => (<li key={contact.id}>
         {contact.name} : {contact.number} 
         <button
             type='button'
             onClick={() => this.props.deleteContacts(contact.id)}>Delete
         </button>
       </li>))}
     </ul></div>)
    }
}
ContactList.propTypes={
    onRender:  PropTypes.func,
    deleteContacts: PropTypes.func
}
export default ContactList