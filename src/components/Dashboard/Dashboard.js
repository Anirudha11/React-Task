import React from 'react';
// import Card from '../UI/Card/Card';
import Card from '@material-ui/core/Card';


const dashboard = (props) => {
    
    return (
        <React.Fragment>
        <h1>Dashboard UI!</h1>

        {props.users.user.map(user=>(
            <React.Fragment key={user.id}>
                <Card variant="outlined">
                <h4>ID:{user.id}</h4>
                <h2>Name:{user.name}</h2>
                <h3>Age:{user.age}</h3>
                <h4>Email:{user.email}</h4>
                <h4>Phone No.:{user.phoneNo}</h4>
                <br />
                </Card>
        </React.Fragment>
        ))}
        </React.Fragment>
        
    )
}

export default dashboard;