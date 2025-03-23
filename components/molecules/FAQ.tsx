"use client"
import { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>('services');

  const toggleQuestion = (id:string) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };

  const faqs = [
    {
      id: 'services',
      question: 'What services do you offer?',
      answer: 'We\'re a one-stop-shop for all things digital! From crafting stunning websites to skyrocketing your SEO rankings, managing your social media, and building unforgettable brands, we do it all. Oh, and we promise we don\'t bite.'
    },
    {
      id: 'timeframe',
      question: 'How long does it take to design a website?',
      answer: 'Website design timeframes vary based on complexity and requirements. Typically, a basic website takes 2-4 weeks, while more complex sites can take 8-12 weeks or longer.'
    },
    {
      id: 'clientSize',
      question: 'Do you work with small businesses or just big brands?',
      answer: 'We proudly work with businesses of all sizes! From startups and small local businesses to established corporations, our solutions are scalable to fit your specific needs and budget.'
    },
    {
      id: 'customization',
      question: 'Can I customize the packages you offer?',
      answer: 'Absolutely! We believe in tailoring our services to meet your unique needs. Our packages can be customized to include exactly what your business requires.'
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-base font-medium text-gray-900">Frequently Asked Questions</span>
            </div>
            
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              FAQ It Up! Your curiosity meets our expertise—let&apos;s clear things up!
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We&apos;ve gathered all the important info right here. Explore our FAQs and find the answers you need.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {openQuestion === faq.id ? (
                        <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openQuestion === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;