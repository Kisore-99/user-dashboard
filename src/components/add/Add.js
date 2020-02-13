import React, { Component } from "react";
// import { Field, reduxForm } from 'redux-form';

import "bootstrap/dist/css/bootstrap.css";

import { Modal, createId, open, close } from "react-modal-syaku";
import "react-modal-syaku/dist/react-modal.css";

import './Add.css';
// import SubmitForm from "./SubmitForm";

class Add extends Component {
  constructor(props) {
    super(props);
    this.id = createId();
    //this.addUser= this.addUser.bind(this);
    this.show= this.show.bind(this);
  }

 

  onOpen(name) {
    this.setState({ [name]: true });
  }

  onClose(name) {
    this.setState({ [name]: false });
  }

  // addUser= (e)=>{
  //   this.props.addUser(this.props.user)
  // }

  show= (e)=>{
    e.preventDefault();
    alert("name");
  }
  

  render() {
    console.log(this.props);
    // const {onSubmit, handleSubmit}= this.props;
    const {handleChange, handleSubmit}= this.props;
    console.log(this.props);
    return (
      <div>
       
        <button
          type="button"
          className="open"
          onClick={() => {
            open(this.id);
          }}
        >
             +
        </button>
        <p />
       

        <Modal id={this.id} isOpen={false}>
      
            {/* <input class="un " type="text" align="center" placeholder="Username"/>
            <input class="pass" type="password" align="center" placeholder="Password"/>
            <a class="submit" align="center">Sign in</a>
            <p class="forgot" align="center">Forgot Password?</p>
                     */}
       <div className="cont">
  
            <div class="form">
                <form>
                    <label>Name  </label>
                        <input type="text"
                                name= "name"
                                className="user"
                                onChange= {handleChange}
                            />
                        
                    <label>Id </label>
                        <input type="text" 
                                name= "id"
                                className="pass"
                                onChange= {handleChange}
                                />
                        
                    <label>Description</label>
                            <input 
                            type="text" 
                            className="desc" 
                            name="description"
                            onChange= {handleChange}/>
                        <button className="close" onClick= {()=>{close(this.id)}}>Close</button>
                        <button className="add-user" onClick= {handleSubmit}>Add User</button>
                </form>


            </div>
  
       </div>
            {/* <div className="cont">
                  <div>
                    <form >
                      <Field
                        name="name"
                        component="input"
                      />
                      <Field
                        name="id"
                        component="input"
                      />
                      <Field
                        name="description"
                        component="input"
                      />
                      <button type="button" onClick={addUser}>Submit</button>
                    </form>
                  </div>

            </div> */}
        </Modal>
      </div>
    );
  }
}



// const formConfig= {
//   form: 'my-own-form'
// }
// export default reduxForm(formConfig)(Add);
export default Add;