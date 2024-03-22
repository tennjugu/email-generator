import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(9)
  const [addNum, setAddNum] = useState(false)
  const [emailProvider, setEmailProvider] = useState('gmail.com')
  const [email, setEmail] = useState('')

  const generateEmail = useCallback(() => {
   let emailName = ''
   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

   if(addNum) str += '0123456789'
   
   for(let i = 0; i < length; i++){
   const charIndex = Math.floor( Math.random() * str.length + 1)
   emailName += str.charAt(charIndex)
   emailName 
   }
   setEmail(emailName += '@' + emailProvider)
  }, [length, addNum, emailProvider])

  useEffect(() => {
    generateEmail()
  }, [length, addNum,emailProvider])

  const emailRef = useRef(null)
  const copyEmailToClipboard = () => {
    window.navigator.clipboard.writeText(email)
    emailRef.current?.select()
  }

  return (
    <div className="emailgen">
      <h1>Email Generator</h1>
      <div className="email-values">
        <input type="text" className="generated" value={email} readOnly ref={emailRef} />
        <button onClick={copyEmailToClipboard}>copy</button>
      </div>
      <div className="parameters">
        <input type="range" value={length} min = {6} max = {20} onChange={(e) => setLength(e.target.value)}/>
        <label htmlFor="length" >length:{length}</label>
        <input type="checkbox" defaultChecked = {addNum} onChange={() => {
          setAddNum((prev) => !prev)
        }}/>
        <label htmlFor="checkbox" >numbers</label>
        <input type="radio" name='email' id='gmail' value={'gmail.com'} defaultChecked onClick={(event) => setEmailProvider(event.target.value)} />
        <label htmlFor="gmail" >Gmail</label>
        <input type="radio" name='email' id='outlook' value={'outlook.com'} onClick={(event) => setEmailProvider(event.target.value)}/>
        <label htmlFor="outlook">Outlook</label>
        <input type="radio" name='email' id='yahoo' value={'yahoo.com'} onClick={(event) => setEmailProvider(event.target.value)}/>
        <label htmlFor="yahoo">Yahoo</label>
      </div>
      <button className='generate' onClick={generateEmail}>Generate</button>
    </div>
  )
}

export default App
