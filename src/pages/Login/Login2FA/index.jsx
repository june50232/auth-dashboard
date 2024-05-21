import React, { useEffect, useState, useRef } from 'react'
import {
  useNavigate,
  useLocation,
} from 'react-router-dom'
import QRCode from 'qrcode'
import { 
  authenticator, 
} from '../../../utils/otplib'


export default function Login2FA() {
  const canvasRef = useRef(null)
  let navigate = useNavigate();
  let location = useLocation();
  const [userSecret, setSecret] = useState(null)
  const [isQrcodeValid, setIsValid] = useState(null)
  const [inputValue, setInputValue] = useState(false)

  useEffect(() => {
    const secret = "KFCTML3YPBRTS3DMKRIWSUDRNREUUNJU";
    setSecret(secret)

    const otpauth = authenticator.keyuri("june-temp", "otp", secret);

    QRCode.toCanvas(canvasRef.current, otpauth, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }, [])

  const onVerify = () => {
    const isValid = authenticator.verify({
      secret: userSecret,
      token: inputValue,
    })
    setIsValid(isValid)

    if (isValid) {
      setTimeout(() => {
        const from = location.state?.from?.pathname || "/dashboard";
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      }, 500)
    }
  }

  return (
    <div>
      <h2>Use Google authenticator app to scan:</h2>
      <canvas ref={canvasRef} />
      <div>Verify code</div>
      <input
        type="number"
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => onVerify()}>Verify</button>
      {isQrcodeValid !== null && <div>{isQrcodeValid ? "✅" : "❌"}</div>}
    </div>
  )
}