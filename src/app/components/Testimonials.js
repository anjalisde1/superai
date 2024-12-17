"use client"; // For Next.js App Router

const testimonials = [
  {
    name: "Kendal Northwood",
    role: "Founder of Stock Aim",
    text: "We've been using Spur and it's been a game-changer for our QA workflow...",
  },
  {
    name: "Caleb Wilson",
    role: "Founder at TempoHQ",
    text: "This approach is 10x more efficient than traditional testing.",
  },
  {
    name: "Rahul Shanmugam",
    role: "Founder & CEO of Testco",
    text: "Spur has helped us improve our software quality tremendously.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4">
      <div className="overflow-hidden w-full relative">
        {/* Outer container for controlling overflow and sizing */}
        <div
          className="flex gap-8 animate-marquee"
          style={{ animationDuration: "30s", whiteSpace: "nowrap" }} // Adjust scroll speed and nowrap
        >
          {/* Testimonials section */}
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg max-w-xs text-center mx-4" // Set the width and margin
              // style={{ height: "auto", width: "280px" }} // Define exact width and height
            >
              <p className="italic text-gray-700 mb-4">{t.text}</p>
              {/* <p className="font-bold">{t.name}</p> */}
              {/* <p className="text-gray-600">{t.role}</p> */}
            </div>
          ))}

          {/* Duplicate the testimonials for infinite effect */}
          {testimonials.map((t, index) => (
            <div
              key={`duplicate-${index}`}
              className="p-6 bg-white shadow-lg rounded-lg max-w-xs text-center mx-4"
              // style={{ height: "auto", width: "280px" }} // Same width as the original
            >
              <p className="italic text-gray-700 mb-4">{t.text}</p>
              {/* <p className="font-bold">{t.name}</p> */}
              {/* <p className="text-gray-600">{t.role}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
