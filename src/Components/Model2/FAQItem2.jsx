import React, { useState } from 'react';

const FAQItem2 = () => {
  const data = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund, provided the product is in its original condition."
      },
      {
        question: "How can I contact customer service?",
        answer: "You can contact our customer service team by email at support@example.com or by calling our toll-free number at 1-800-123-4567. Our team is available Monday through Friday from 9 AM to 5 PM."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on the destination. You can check the shipping options at checkout."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the courier's website."
      },
      {
        question: "Can I change my order after it's been placed?",
        answer: "Unfortunately, we cannot modify orders once they have been placed. However, if you contact us within 24 hours, we may be able to cancel the order so you can place a new one with the correct details."
      }
  ];

  // This state will store which FAQ item is currently expanded (if any)
  const [activeIndex, setActiveIndex] = useState(null);

  const showAnswer = (index) => {
    // Toggle the visibility of the clicked question
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      {data.map((item, index) => (
        <div className='border my-2 w-full md:w-3/4 lg:w-3/5 shadow-md shadow-gray-300' key={index}>
          <div
            className='bg-red-100 p-5 text-xl capitalize cursor-pointer font-medium hover:bg-red-200'
            onClick={() => showAnswer(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div>
              <h1 className='text-lg p-4 py-6 bg-red-50'>
                {item.answer}
              </h1>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQItem2;
