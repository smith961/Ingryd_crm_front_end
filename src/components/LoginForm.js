import React, { useState } from 'react'
import "../styles/LoginForm.css"
import { useNavigate } from 'react-router-dom';



function LoginForm({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else {
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
        type = "text"
        id="username"
        autoComplete="off"
        value = {username}
        onChange= {(e) => setUsername(e.target.vaule)}
        />
        </div>
        <div className='loginform'>
            <label htmlFor="password">Password</label>
            <input
            type= "password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className='loginform'>
            <button type='submit'>{isLoading ? "Loading...":"Login"}</button>
            
        </div>
        <div className='loginform'>
            {errors.map((err) => (
                <error key={err} >{err}</error>
            ))}
        </div>
        <p>
        Don't have an account?
        <span
        style={{cursor:"pointer", "marginLeft": "10px"}}
        onClick = {() => navigate("/signup")}
    ><b>Sign Up</b>
            </span>

    </p>
    </form>
</div>
    </>
  
  )
}

export default LoginForm