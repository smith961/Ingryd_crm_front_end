import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <LoginForm onLogin={onLogin} />
  )
}

export default LoginPage