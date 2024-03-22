import './App.css'

function App() {

  return (
    <div className="emailgen">
      <h1>Email Generator</h1>
      <div className="email-values">
        <input type="text" className="generated" readOnly />
        <button>copy</button>
      </div>
      <div className="parameters">
        <input type="range" min = {6} max = {22} />
        <label htmlFor="length" >length </label>
        <input type="checkbox" />
        <label htmlFor="checkbox" >numbers</label>
        <input type="radio" name='email'/>
        <label htmlFor="checkbox">Gmail</label>
        <input type="radio" name='email'/>
        <label htmlFor="checkbox">Outlook</label>
        <input type="radio" name='email'/>
        <label htmlFor="checkbox">Yahoo</label>
      </div>
      <button className='generate'>Generate</button>
    </div>
  )
}

export default App
