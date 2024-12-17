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
            question: "What kind of household tasks can the robot handle?",
            answer: `Our robot is equipped to tackle a wide range of tasks, including cleaning, cooking, organizing, and more. Whether it's preparing meals or tidying up your living space, the robot adapts to your specific needs.`,
        },
        {
            question: "Can the robot learn my preferences over time?",
            answer: `Yes, the robot uses advanced learning algorithms to understand your preferences and routines. Over time, it adapts to your household’s specific needs, making it more efficient and intuitive with each use.`,
        },
        {
            question: "Is the robot suitable for homes with pets or children?",
            answer: `Absolutely! The robot is designed to safely interact with all members of the household, including pets and children. Its gentle operation and smart sensors ensure that it won’t cause any harm or disruptions while performing tasks.`,
        },
        {
            question: "How does the robot handle complex tasks like cooking?",
            answer: `The robot is capable of following detailed instructions for complex tasks like cooking. Just provide it with the necessary voice commands or recipes, and it will prepare meals with precision, ensuring high-quality results every time.
`,
        },
        {
            question: "Can I control the robot remotely if I'm not at home?",
            answer: `Yes! You can control the robot remotely via your smartphone or other connected devices. Whether you're at work or on vacation, you can still manage tasks and keep an eye on your home’s needs.`,
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
