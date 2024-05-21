import React, { useState } from 'react';

import LoginForm from './LoginForm'
import Login2FA from './Login2FA'
import './styles.scss'

export default function Login() {
  const [show2FA, setShow2FA] = useState(false)
  return (
    <main className="flex-container">
      <div className="flex-item slider-section">slider</div>
      <div className="flex-item form-section">
        <div className="flex-container">
          {show2FA ? <Login2FA /> : <LoginForm setShow2FA={setShow2FA} />}
        </div>
      </div>
    </main>
  )
}