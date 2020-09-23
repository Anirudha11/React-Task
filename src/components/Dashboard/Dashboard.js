import React from 'react';

const dashboard = (props) => {
    
    return (
        <React.Fragment>
        <h1>Dashboard UI!</h1>
        
        {console.log(props)}
        {props.users.user.map(user=>(
            <React.Fragment>
            <h4>ID:{user.id}</h4>
            <h2>Name:{user.name}</h2>
            <h3>Age:{user.age}</h3>
            <h4>Email:{user.email}</h4>
            <h4>Phone No.:{user.phoneNo}</h4>
            <br />
        </React.Fragment>
        ))}
        </React.Fragment>
        
    )
}

export default dashboard;