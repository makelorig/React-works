import { useState, useEffect } from 'react';

function PasswordGenerator(){
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  useEffect(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers){charset +='0123456789'}
    if (includeSymbols){charset +='!@#$%^&*()'}
    let newPassword = ''
    for (let i = 0; i < length; i++) {newPassword+=charset.charAt(Math.floor(Math.random()*charset.length))} setPassword(newPassword)
}, [length, includeNumbers, includeSymbols])
  return (
    <div>
      <div className="password-display"><span>{password}</span></div>
      <div className="settings">
        <label>Длина: {length}<input type="range" min="10" max="52" step="1" value={length} onChange={(e) => setLength(e.target.value)}/></label>
        <label>Включить цифры<input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/></label>
        <label>Включить символы<input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/></label>
      </div>
    </div>
  )
}
export default PasswordGenerator