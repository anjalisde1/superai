import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
// import VideoSection from './components/Videosection'
import HowItWorksSection from './components/HowItWorks'
// import LearnMoreSection from './components/LearnMore'
import BookDemoSection from './components/BookDemoSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Testimonials /> */}
      {/* <VideoSection/> */}
      <HowItWorksSection/>
      {/* <LearnMoreSection/> */}
      <Features />
      <FAQSection />
      <BookDemoSection/>
      <Footer />
    </main>
  );
}
