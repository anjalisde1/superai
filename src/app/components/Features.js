// components/FeaturesSection.js
'use client'
import Image from "next/image";
import React, {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    title: "Smart Household Management",
    description: "I handle everything from cleaning to cooking, ensuring your home stays in top shape.",
    imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc1d8f70e9283c3f2f02_Helping%20Hand.svg",
  },
  {
    id: 2,
    title: "User-Friendly Interface",
    description: "My design is intuitive and easy to use for everyone in the household.",
    imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc9128ee13ba75b4c09f_Language.svg",
  },
  {
    id: 3,
    title: "24/7 Companion",
    description: "I offer constant emotional support and daily reminders.",
    imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc91d5d9613629d2c32e_Medal.svg",
  },
  {
    id: 4,
    title: "Seamless Integration",
    description: "I work with other devices to enhance your home experience.",
    imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc915bdc459505d90deb_Secure.svg",
  },
  // {
  //   id: 5,
  //   title: "Test actual User Experience",
  //   description: "Test your site just as your users use it. The Spur Agent is built to replicate actual user behavior.",
  //   imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc916a4f6d071edf8334_Popular%20Man.svg",
  // },
  // {
  //   id: 6,
  //   title: "Integrated with CI/CD",
  //   description: "Simple integration with your CI/CD pipelines.",
  //   imgSrc: "https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4bc91fb552663cdbbb51a_Query%20Inner%20Join.svg",
  // },
];

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation only runs once
    });
  }, []);
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto lg:max-w-[804px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">Features: The Power of Smart Robots
          </h2>
        </div>
        <div className="text-left grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-md p-6 text-left transform hover:scale-105 transition-transform duration-200"
            >
              <div 
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1000"
              className="mb-4">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={100}
                  height={100}
                  // className="mx-auto"
                />
              </div>
              <h3 
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1000"
              className="text-xl font-semibold">{feature.title}</h3>
              <p 
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1000"
              className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
