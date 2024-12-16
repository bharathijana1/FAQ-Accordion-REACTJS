import React, { useState } from 'react'

const FAQItem = ({question, answer}) => {
    const [show, setShow] = useState(false);

    const showAnswer = () => {
        setShow(prevState => !prevState); // Toggle the show state
    };
    

  return (
    <div className='border my-2 w-full md:w-3/4 lg:w-3/5 shadow-md shadow-gray-200' >
        <div className='bg-green-100 p-5 text-xl capitalize cursor-pointer font-medium hover:bg-green-200' onClick={showAnswer}>{question}</div>
        {show && (
        <div className='' >
            <h1 className='text-lg p-4 py-6 bg-green-50 ' >
            {answer}
            </h1>
        </div>
        )}
      
    </div>
  )
}

export default FAQItem
