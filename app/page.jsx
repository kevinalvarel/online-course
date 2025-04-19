import About from "./ui/About/About";
import Contact from "./ui/Contact/Contact";
import CourseList from "./ui/Courselist/Courselist";
import Hero from "./ui/Hero/Hero";
import Pricelist from "./ui/Pricelist/Pricelist";
import Testimonials from "./ui/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden w-full">
      <Hero />
      <About />
      <Pricelist />
      <CourseList />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
