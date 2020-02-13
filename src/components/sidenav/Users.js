import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// import {addUsers} from '../../actions/addActions';
// import {addUser} from '../../store/actions/userActions';

import './Users.css';

import data from '../../data';
import Add from '../add/Add';

import { Button } from './Button';
import {Checkbox} from './Checkbox';


console.log(data);

// const {People}=  data;
// console.log(People);

 class Users extends Component {
    constructor(props){
        super(props);
        this.state={
          
            users: [
                {name: 'Harry', id:"1",  description: 'React developer', isChecked: false},
                { name: 'Andrew', id:"2", description: 'Nodejs developer', isChecked: false},
            ],
            user:{name: "", id: 0, description: "", isChecked: false}
           
           
        }
         this.handleChange= this.handleChange.bind(this);
         this.handleSubmit= this.handleSubmit.bind(this);
         this.handleInputChange= this.handleInputChange.bind(this);
         this.onChangeBox= this.onChangeBox.bind(this);
         this.handleDel= this.handleDel.bind(this);


         //this.addUser= this.addUser.bind(this);
    }

    componentWillMount(){
        localStorage.getItem('users') && this.setState({
            users: JSON.parse(localStorage.getItem('users'))
        })
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('users', JSON.stringify(nextState.users))
    }
        handleChange = e => {
            const { name, value } = e.target;
            
            this.setState(prevState => ({
              user: { ...prevState.user, [name]: value }

            }));    
            console.log(this.state.user)    

           };
         

    //       handleCheck= e => {
    //         this.setState({checked: !this.state.user.checked});
    //       }

    //       handleDelete = () => {
    //         const userList = this.state.userList.filter(user => user.checked === false);
    //         this.setState({ userList: userList });
    //       };

        handleSubmit = e => {
            e.preventDefault();
     
            // this.props.addUsers();

            
            if(this.state.value==="")
             return; 
            
                // const newUser={
                //     name:this.state.users.name,
                //     id: this.state.users.id,
                //     description: this.state.users.description
                // }
               
                this.setState(prevState=>({
                    users: [...this.state.users, this.state.user],
                    //users:prevState.users.concat(newUser),                       
                }))  

               
   
     };
     handleInputChange= (e,id)=>{
            console.log(id)
            console.log(e.target.checked)
            let users = this.state.users
            users.forEach(user => user.isChecked = e.target.checked) 
            // users.forEach(user => {
            //    if (user.value === e.target.value)
            //       user.isChecked =  e.target.checked
            // })
            this.setState({users: users})
          
    }

    // addUser = (user) => {
    //     this.props.addUser(user);
    //     // console.log(user)
    // }   s
    // onChangeBox = item => {
    //     this.setState(({ users }) => ({
    //       users: users.map(user =>
    //         user.id === item.id ? { ...user, isChecked: !user.isChecked } : user
    //       )
    //     }));
    //   };
    
    //   handleDel = item => {
    //     this.setState(({ users }) => ({
            
    //     //   users: users.filter(user => user.id !== item.id),
    //       users: users.filter((user =>  user.isChecked === false ) )
     
    //     }));
    //     this.props.history.push('/')
    //   };s
    onChangeBox = e => {
        const id = e.target.id;
        console.log(id)
        this.setState(prevState => {
          return {
            users: prevState.users.map(u => (parseInt(u.id) === +id ? { ...u, isChecked: !u.isChecked} : u))
          };
        });
        console.log(this.state.users)

      };


      handleDel = () => {
        this.setState(prevState => {
          return {
            users: prevState.users.filter(u => !u.isChecked)
          };
        });
        this.props.history.push('/')
      };

      
    render(){
        
        console.log(this.state.users);
        // console.log(this.state.users[0]);
       
       // const {userList}= this.props;
        return (
       
            <div className="side-nav"> 

            {/* <Add addUser= {(user)=>{this.props.addUser(user)}}  /> */}
                <Add
                    handleChange= {this.handleChange}
                    handleSubmit= {this.handleSubmit}
                />

                <h2 className="title" style={{color: 'black'}}>People</h2>
                 <button style={{marginTop: '15px', height: '10px'}}  className="btn" onClick={this.handleDel}><FontAwesomeIcon icon={faTrash}/></button>

                {/* <Button onClick={() => {this.handleDel(u)}}>Delete</Button> */}
                <div className="users">
            
          
               {
                   this.state.users.map((u)=>{
                       
                                return (
                                    <div className="names" >
                                
                                        {/* <Checkbox
                                                onClick={() =>{this.onChangeBox(u)}}
                                                defaultChecked={u.isChecked}
                                        />{" "} */}
                                        <input
                                        className="chk-box"
                                        type="checkbox"
                                        id={u.id}
                                        checked={u.isChecked}
                                        onClick={this.onChangeBox}
                                        />
                                            
                                                {/* <Button onClick={() => {this.handleDel(u)}}><FontAwesomeIcon icon={faTrash} /></Button> */}
                                                <Link style={{textDecoration: 'none'}} to= {{
                                                pathname: `/user/${u.id}`,
                                                state: {
                                                    users: this.state.users
                                                }
                                                }}
                                                > 
                                                    <li className="user-names" key={u.id}>{u.name} </li>
                                                </Link>

                                </div>
                            )


                
                })
               }

                               {/* <li key={this.state.id}>{this.state.name}</li> */}
           
               </div>
            </div>
            
        )
    }
}
    

    // Users.propTypes= {
    //     addUsers: PropTypes.func.isRequired,
    //     userList: PropTypes.array.isRequired
    // }
    // const mapStateToProps= state =>({
    //      userList: state.userList.users
    // })

    // const mapStateToProps= (state)=>{
    //     return {
    //         users: state.user.users,

    //     }
    // }
    // const mapDispatchToProps=(dispatch)=>{
    //     return {
    //         addUser: (user)=>{
    //             dispatch(addUser(user))
    //         }
    //     }
    // }
   //export default connect(mapStateToProps,mapDispatchToProps) (Users);

export default withRouter(Users);