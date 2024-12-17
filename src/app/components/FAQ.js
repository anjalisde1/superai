'use client'
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Animation only runs once
        });
      }, []);
    const faqs = [
        {
            question: "What is the onboarding process?",
            answer: `Onboarding is extremely simple on Spur — since we do not require access to your codebase, 
      all you need to provide is a public URL to start writing your first test.
      We onboard customers in two steps: first, hop on a call with us to help us understand your 
      requirements, and we'll onboard you on the next call and get you set up in no time!`,
        },
        {
            question: "How does the Spur Agent work?",
            answer: `The Spur Agent is a vision-first, multi-modal agent. This means that your tests are not reliant 
      on CSS selectors, unlike tests written in web-automation frameworks like Playwright or Selenium. 
      This allows your tests to be more reliable, reducing false-positives, so you can focus on shipping faster!`,
        },
        {
            question: "What kind of flows do you support?",
            answer: `We can support any action that happens within the browser window—no matter how complex your use case is. 
      The Spur Agent interacts with the browser just like any human does!`,
        },
        {
            question: "Do I need to know how to code to use Spur?",
            answer: `No! Spur is a no-code test platform — this means that all tests can be written in natural language. 
      Whether you are a PM, CTO, Engineer, or QA — anyone can write tests on Spur.`,
        },
        {
            question: "Can we test APIs through Spur?",
            answer: `Yes! We have API testing support for tests! You can call, store, and verify the response of 
      any APIs in Spur — including ones that are dynamically generated.`,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section  bg-gray-100 py-10">
            <div className=" mx-auto lg:max-w-[1024px] container">
               
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div 
                    data-aos="fade-right"
        data-aos-duration="1000"
                className="text-left mb-8">
                    <h2 className="text-[32px] font-bold  mb-2">Frequently Asked Questions</h2>
                    <p className="text-[16px] text-gray-600 w-[300px]">We’re here to help. If you have questions, we’re here to answer them.</p>
                    <div className="w-max button primary w-inline-block mt-4">
                        <div className="h-[44px] w-[129px] primary-button-link py-[10px]">
                            Book a Demo
                        </div>
                    </div>
                   
                    </div>
                   
                    <div className="w-full md:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                                >
                                    <div
                                     data-aos="fade-up"
                                     data-aos-anchor-placement="top-bottom"
                                     data-aos-duration="1000"
                                        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white hover:bg-gray-50"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                        <svg
                                            className={`h-5 w-5 transform transition-transform ${activeIndex === index ? "rotate-90" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="px-4 py-3 bg-gray-50 text-gray-700 text-sm">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
