import { useState } from 'react'
import FAQAccordion from './Components/FAQAccordion'
import FAQAccordion2 from './Components/Model2/FAQAccordion2'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='my-6'>
      <FAQAccordion />
      <FAQAccordion2 />
    </div>
  )
}

export default App
