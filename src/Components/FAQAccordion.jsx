import React from 'react'
import FAQItem from './FAQItem'

const FAQAccordion = () => {
  const data = [
    {
      question: "What is HTML?",
      answer: "HTML (HyperText Markup Language) is the standard language used to create and design the structure of web pages. It uses tags to define elements like headings, paragraphs, images, links, and more."
    },
    {
      question: "What is CSS?",
      answer: "CSS (Cascading Style Sheets) is used to style and design the layout of web pages. It controls the look and feel of a web page, including colors, fonts, spacing, and positioning of elements."
    },
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a programming language that enables dynamic behavior and interactivity on websites. It is commonly used for things like form validation, animations, and updating content on a webpage without reloading the page."
    },
    {
      question: "What is the DOM?",
      answer: "The DOM (Document Object Model) represents the structure of a web page as a tree of objects. JavaScript can interact with the DOM to change the content and structure of a web page dynamically."
    },
    {
      question: "What is a responsive web design?",
      answer: "Responsive web design is an approach that makes web pages look good on all devices by using flexible layouts, images, and CSS media queries. It allows a website to adapt its layout based on the screen size of the device."
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-2xl p-4'>FAQ's Model-1</h1>
        {data.map((item, index) => {
          return <FAQItem question= {item.question} answer= {item.answer} key={index} />

        })}
        
        
      
    </div>
  )
}

export default FAQAccordion
