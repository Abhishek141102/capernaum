import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import OurServices from '../components/OurServices/Services';
import Industries from '../components/IndustriesWeServe/Industries';
import WhyChooseUs from '../components/WhyChooseUs/WhyCapernaum';
import OurProcess from '../components/OurProcess/Process';
import ClientTestimonials from '../components/ClientTestimonials/Testimonials';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import LatestBlogs from '../components/LatestBlogs/LatestBlogs';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <Industries />
      <WhyChooseUs />
      <OurProcess />
      <ClientTestimonials />
      <CaseStudies />
      <LatestBlogs />
      <Contact />
    </>
  );
}

export default Home;