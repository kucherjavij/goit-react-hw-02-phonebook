import React, {Component} from "react";
import PropTypes from "prop-types";

class Form extends Component{
state = {
    name: '',
    number: ''
}

hendleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
    }

    handleSubmit = e=> {
        
        e.preventDefault();
    this.props.onSubmit(this.state)  
    this.setState({name:'', number:''})
    }
    

render(){
    return(
        <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <br/>
      <input
  type="text"
  value={this.state.name}
  onChange={this.hendleInputChange}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/></label><br/>
<input
  type="tel"
  value={this.state.number}
  onChange={this.hendleInputChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<br/>
<button type="submit" >Add contact</button>
</form>
    )
}

}
Form.propTypes={
    onSubmit:  PropTypes.func
}

export default Form