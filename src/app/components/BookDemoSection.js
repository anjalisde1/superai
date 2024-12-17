"use client"; // For Next.js App Router compatibility

import { useEffect } from "react";

const BookDemoSection = () => {
  useEffect(() => {
    // Load Calendly script asynchronously
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="book-a-demo" className="section-5 py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold "
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          Ready to Transform Your Home?

        </h2>
        <h3>Book a demo today and see how our intelligent robots can revolutionize your life!

</h3>
      </div>
      <div className="flex justify-center gap-4">
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


      {/* Calendly Widget */}
      {/* <div
        className="w-full max-w-4xl mx-auto px-4"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/sneha-sivakumar-1/30min?primary_color=0435dd"
          style={{
            position: "relative",
            minWidth: "320px",
            height: "700px",
          }}
        ></div>
      </div> */}
    </section>
  );
};

export default BookDemoSection;
