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
          Simplify Household Tasks
          </h3>
          <p className="text-16 text-gray-600">
          "Our robot tackles household chores, from cooking to organizing, giving you more time for the things that matter."          </p>
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
          Control with Voice Commands
          </h3>
          <p className="text-16 text-gray-600">"Simply describe the tasks you want the robot to perform, and it will follow through with the precision of your voice commands."
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
          Quick Setup, Effortless Integration
          </h3>
          <p className="text-16 text-gray-600">
          "It takes minutes—not days—to set up, and the robot integrates smoothly into your daily routine, adapting to your home’s needs and freeing up your schedule."</p>        </div>
      </div>
    </section>
  );
}
