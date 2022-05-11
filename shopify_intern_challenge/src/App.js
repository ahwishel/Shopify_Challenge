import './App.css'
import Response from './components/Response'
import {useState, useRef} from 'react'
import logo from './logo.png'

function App() {

  //Two-way binding will be established with textarea tag
  const [prompt, setPrompt] = useState('')
  //A stack of prompts
  const [promptStack, setPromptStack] = useState([])
  //Selected engine
  const [engine, setEngine] = useState('text-curie-001')
  
  const scrollRef = useRef()

  //pushes a new prompt to the stack such that the newest response is at the top
  const Ask = e => {
    const new_promptStack = [prompt, ...promptStack]
    setPromptStack(new_promptStack)
    setPrompt('') //reset the value
    scrollRef.current.scrollIntoView()
  }

  return (
    <div className="App">
      
      <div className='upper_third_section'>

        {/* NAV */}
        <nav>
          <img src={logo} alt='nav_logo' className='nav_logo'/>
          <ul>
            <li><a href="https://www.shopify.com/">Home</a></li>
            <li><a href="https://www.shopify.com/about">About</a></li>
            <li><a href="https://accounts.shopify.com/store-login">Log in</a></li>
          </ul>
        </nav>

        <h2>Welcome To Shopify's Smart Assist!</h2>

        <div className='header_statement'>
          <p>
            Using OpenAI's groundbreaking AI capabilities, we at shopify will be able to answer any questions
            you might have! even if they're unrelated to shopify
          </p>
        </div>

        {/* Form where user will type in their question */}
        <form onSubmit={e => e.preventDefault()}>
          <div className='form_inner_container'>
            <b style={{display: 'block', textAlign: 'left', margin: '0 0 0.25em 0.25em', color: 'white'}}>Enter Question(s) Here</b>
            <textarea placeholder="How do I get started with shopify?" value={prompt} className='prompt_box' onChange={e => setPrompt(e.target.value)}/>
            <br/>
            <b style={{color: 'white'}}>Engine: </b>
            <select className='engine' onChange={e => {console.log(e.target.value);setEngine(e.target.value)}} value={engine}>
              <option value='text-davinci-002'>Davinci</option>
              <option value='text-curie-001'>Curie</option>
              <option value='text-babbage-001'>Babbage</option>
              <option value='text-ada-001'>Ada</option>
            </select>
            <br/>
            <button className='submit_btn' onClick={Ask}>Ask</button>
          </div>
        </form>
      </div>
      
      {/* Response Container (MIDDLE SECTION) */}
      <div className='responses_container'>
        {promptStack.length === 0? <h3 className='responses_placeholder'>You haven't asked me anything</h3> :
        <>
          <h4>Responses</h4>
          {/* Response component will carry the response in it's own state */}
          <div>
            {promptStack.map(elem => <Response engine={engine} prompt={elem} key={elem}/>)}
          </div>
        </>
        }
      </div>

      {/* Bottom Section */}
      <div ref={scrollRef} className='footer'>
        <span>By Abdallah Hwishel</span>
      </div>
    </div>
  );
}

export default App;
