import Newsletter from '../components/Newsletter';
import Hero from '../sections/Hero';
import Recipes from '../sections/Recipes';
import Testimonial from '../sections/Testimonial';

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Recipes section */}
      <Recipes />

      {/* Testimonial section */}
      <Testimonial />

      <Newsletter />
    </>
  );
};

export default Home;
