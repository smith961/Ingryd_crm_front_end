import React, { useState } from 'react'
import "../styles/SignUpForm.css"


function SignUpPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfrimation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                phoneNumber,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
  return (
    <>
     <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <div className='loginform'>
       <label htmlFor='username'>Username</label>
        <input
        type='text'
        id='username'
        autoComplete='off'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='loginform'>
       <label htmlFor='password'>Password</label>
        <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='current-password'
        />
      </div>
       <div className='loginform'>
          <label htmlFor='password'>Password Confirmation</label>
        <input
        type='password'
        id='password_confirmation'
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfrimation(e.target.value)}
        autoComplete='current-password'
        />
        </div>
      
        <div className='loginform'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
        type='text'
        id='phoneNumeber'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        
        <button type='submit'>{isLoading ? "Loading...": "Sign Up"}</button>
        <div className='loginform'>
            {errors.map((err) => (
                <error key={err} >{err}</error>
            ))}
        </div>
</form>
     </div>
    </>
    
  )
}

export default SignUpPage