const Hero = () => {
  return (
    <section>
      <div className="hero z-20">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-70" />
        <div className="container flex h-screen flex-col items-center justify-center text-center">
          <div className="max-w-[800px] text-white">
            <h1 className="text-600 font-900 md:text-1000 leading-[1.3] md:mb-4 md:leading-[1]">
              Discover Delicious{' '}
              <span className="text-primary-400">Recipes</span>
            </h1>
            <p className="md:text-400 mb-4">
              Explore, create, and enjoy handpicked recipes for every occasion.
            </p>
            <button className="font-500 rounded-lg bg-primary-400 px-4 py-2 text-white">
              View Recipes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
