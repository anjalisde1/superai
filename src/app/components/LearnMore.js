"use client"; // For Next.js App Router if necessary

export default function LearnMoreSection() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      {/* Container for the section */}
      <div
        className="div-block-9 max-w-3xl mx-auto"
        style={{
          opacity: 1,
          transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold  mb-6">
          Learn more, today.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Book a Demo Button */}
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
    </section>
  );
}
