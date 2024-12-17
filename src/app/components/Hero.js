
"use client"; // For Next.js App Router

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const fullText = "Hi, I'm Your Smart Household Robot";
    const typingSpeed = 100; // Typing speed in milliseconds
    const [displayedText, setDisplayedText] = useState(""); // Ensure state starts clean

    useEffect(() => {
        let index = 0; // To iterate through the fullText characters
        let cleanText = ""; // Clean variable for typing
        setDisplayedText(""); // Reset text when effect runs

        const interval = setInterval(() => {
            if (index < fullText.length) {
                cleanText += fullText[index]; // Append the next character
                setDisplayedText(cleanText); // Update state
                index++;
            } else {
                clearInterval(interval); // Stop when typing is complete
            }
        }, typingSpeed);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Empty dependency array ensures effect runs only once

    return (
        <section className="flex justify-around  py-24 px-8 bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc]">
            <div>
                <h1 className="text-[5rem] leading-[5rem] text-left font-normal xs:w-[360px] lg:w-[500px] mb-4 text-[#081550]">
                    {displayedText}
                    <span className="animate-pulse">|</span> {/* Blinking cursor */}
                </h1>
                <p className="lg:w-[433px] md:w-[600px] xs:w-[360px] text-[24px] text-[#081550] mb-6">
                Revolutionizing Household Management with Intelligent Robotics                </p>
                <div className="flex justify-start gap-4">
                    <div className="button primary w-inline-block">
                        <div className="primary-button-link">
                            Book a Demo
                        </div>
                    </div>
                    <div className="button w-inline-block">
                        <div className="link">
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <Image
                    src='/robot.jpeg'
                    alt='right-img'
                    height={500}
                    width={500}
className="w-full h-auto object-cover  transform transition duration-300 hover:scale-105"
                /></div>
        </section>
    );
}

