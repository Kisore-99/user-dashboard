import React from 'react'


// import data from '../../data';

import './User-Details.css';

// const { People }= data;


export default function UserDetails(props) {
    
        

        var {userId}= props.match.params;
        // console.log(typeof(userId));

        // const {userList}= location.state;
        // console.log(props.location.state.userList[0]);
        // var userData= People.filter(function(i){
        //     console.log(i.id);
        //     return i.id === userId
        // })
        // console.log(userData);      
        const {users}= props.location.state;
        // console.log(userList[1].name)
        //var userData= userList.filter(user=> user.id === userId)
        console.log(users)
        
        
       var userData= (users.filter(function(i){
            console.log(i.id)
            return parseInt(i.id) === parseInt(userId)
        }))  
        console.log(userData)
        
       
    return (
        <div className="user-info">
            <div className="details">
           
            
           
                <li><span className="key">Name:</span> <span className="val">{userData[0].name}</span> </li>  
                <li><span className="key">Id:</span> <span className="val">{userData[0].id}</span></li>
                <li><span className="key">Description:</span> <span className="val" >{userData[0].description}</span></li>



        
            </div>

        </div>
    )
    }
