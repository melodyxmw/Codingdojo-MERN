import React from  'react';

const Form = (props) => {
    const {inputs, setInputs} = props;
    const createUser = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })  
    };

    const formValidations = {
        firstNameValidation: "First Name must be at least 2 characters", 
        lastNameValidation: "Last Name must be at least 2 characters",
        emailValidation: "Email must be at least 5 characters",
        passwordValidation: "Password must be at least 8 characters",
        confirmPasswordValidation: "Passwords must match",
    }

    return(
        <form >
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={ createUser } />
                {inputs.firstName.length > 1 ?
                "" 
                :
                <span className="alert text-danger">{formValidations.firstNameValidation}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ createUser } />
                {inputs.lastName.length > 1 ?
                "" 
                :
                <span className="alert text-danger">{formValidations.lastNameValidation}</span>}

                </div>
                <div className="form-group">
                <label htmlFor="email">Email Address: </label> 
                <input type="text" name="email" onChange={ createUser } />
                {inputs.email.length > 4 ?
                "" 
                :
                <span className="alert text-danger">{formValidations.emailValidation}</span>}

            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={ createUser } />
                {inputs.password.length > 7 ?
                "" 
                :
                <span className="alert text-danger">{formValidations.passwordValidation}</span>}

            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Comfirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ createUser } />
                {inputs.confirmPassword === inputs.password ?
                "" 
                :
                <span className="alert text-danger">{formValidations.confirmPasswordValidation}</span>}

            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Form;