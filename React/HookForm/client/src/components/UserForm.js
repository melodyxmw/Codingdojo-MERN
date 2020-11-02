import React, { useState } from  'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    
    const createUser = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
       
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label htmlFor="firstName">First name: </label> 
                <input type="text" name="firstName" onChange={ createUser } />
            </div>
            <div>
                <label htmlFor="lastName">Last name: </label> 
                <input type="text" name="lastName" onChange={ createUser } />
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="text" name="email" onChange={ createUser } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={ createUser } />
            </div>
            <div>
                <label htmlFor="confirmPassword">Comfirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ createUser } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;