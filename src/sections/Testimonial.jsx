import { Star } from 'lucide-react';
import { testimonialData } from '../data';

const Testimonial = () => {
  return (
    <section className="pt-12">
      <div className="container">
        <h2 className="text-400 md:text-600 font-600 mb-4 text-center">
          What Our Users Are Saying
        </h2>

        <div className="relative mb-8 rounded-2xl bg-gray-300 p-8 after:absolute after:left-1/2 after:top-1/2 after:h-0.5 after:w-[95%] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-neutral-900 after:content-[''] md:grid md:grid-cols-2 md:gap-12 md:px-10 md:py-16 md:after:h-[85%] md:after:w-0.5">
          {testimonialData.map((data) => (
            <div key={data.id} className="last:mt-12 md:last:mt-0">
              <div className="flex mb-4">
                {Array(data.rating)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} className="fill-primary-400" />
                  ))}
              </div>

              <p className="text-200 font-500 mb-4 leading-[1.6]">
                {data.description}
              </p>

              <div className="flex item-center gap-2">
                <img
                  src={data.image}
                  alt={data.name}
                  className="size-[40px] rounded-full object-cover"
                />

                <div>
                  <h4 className="font-500">{data.name}</h4>
                  <p className="text-gray-600">{data.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
