import { useEffect, useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      setMessage('Thank you for subscribing');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-400 md:text-600 font-600 mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>

        <form
          onSubmit={handleSubscribe}
          className="relative mx-auto max-w-[500px] md:flex"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mb-4 h-[45px] w-full rounded-lg border-[1.5px] border-black text-black pl-4 placeholder-black"
          />

          <button
            type="submit"
            className="font-500 w-full rounded-lg bg-primary-400 px-4 py-3 text-white md:absolute md:right-0 md:top-0 md:h-[45px] md:w-fit md:rounded-bl-none md:rounded-tl-none"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="text-center">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
