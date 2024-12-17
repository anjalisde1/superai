"use client"; // For Next.js App Router
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function HowItWorksSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation only runs once
    });
  }, []);
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#081550]">
          How it works
        </h2>
      </div>

      {/* First Block */}
      <div className="flex flex-wrap items-center justify-center mt-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4c48ff08a103431abd4e5_img1.png"
              alt="Test Website"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:w-[340px] md:w-1/2  p-4">
          <h3 className="text-[24px] font-semibold text-[#081550]">
            Test your website with natural language
          </h3>
          <p className="text-16 text-gray-600">
            I aim to transform the way you manage your home. By combining advanced robotics and smart wearable devices, I handle household chores and provide 24/7 emotional support, so you can focus on what matters most.
          </p>
        </div>
      </div>

      {/* Second Block */}
      <div className="flex flex-wrap items-center justify-center mt-10 flip">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:w-[340px] md:w-1/2 p-4"
        >
          <h3 className="text-[24px] font-semibold text-[#081550] mb-2">
            My Vision: Smart Homes of Tomorrow
          </h3>
          <p className="text-16 text-gray-600"><h4 className="text-[20px] font-normal text-[#081550]">Physical Robot:
          </h4>
            Manage chores like cleaning, cooking, organizing, and more.
          </p>

          <p className="text-16 text-gray-600 mt-2">
            <h4 className="text-[20px] font-normal text-[#081550]">
              Wearable Companion Device:
            </h4>
            Providing emotional support and reminders, seamlessly integrated with the robot.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-[340px] md:w-1/2  p-4">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4dbfc30842fcc7d13306c_Playback.gif"
              alt="Test Playback"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>


      </div>

      {/* Third Block */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-wrap items-center justify-center mt-10">
        <div className="w-[340px] md:w-1/2 p-4">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/66c3e4ffe16480b253b3458d/66c4d21344aa3cd1b05d085e_Webskte%20cnanges.gif"
              alt="Website Changes"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" md:w-1/2  lg:w-[340px] p-4">
          <h3 className="text-[24px] font-semibold text-[#081550] mb-2">
            Why Now? The Need for Intelligent Household Solutions
          </h3>
          <p className="text-16 text-gray-600">
            With the growing demand for household robots, labor shortages, and the push for work-life balance, it's the perfect time for innovation in household management.          </p>
        </div>
      </div>
    </section>
  );
}
