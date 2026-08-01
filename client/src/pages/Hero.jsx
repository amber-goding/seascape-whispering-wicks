import HeroCarousel from "../components/HeroCarousel";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-cyan-50 to-amber-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-14 px-6 py-16 sm:px-10 lg:flex-row lg:justify-between">

        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35rem] text-teal-600">
            Handcrafted • Beeswax • Coconut Wax
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-6xl xl:text-7xl">
            Hand-Poured
            <span className="block text-teal-600">
              Inspired by the Sea
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Thoughtfully handcrafted candles made from premium beeswax,
            coconut wax, and essential oils. Designed to bring warmth,
            comfort, and the peaceful feeling of the coast into your home.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <button className="rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-teal-700 hover:shadow-xl">
              View Collection
            </button>

            <button className="rounded-lg border-2 border-teal-600 px-8 py-3 font-semibold text-teal-700 transition duration-300 hover:bg-teal-600 hover:text-white">
              Contact the Maker
            </button>

          </div>

        </div>

        {/* Image Placeholder */}
        <div className="flex w-full max-w-md items-center justify-center">

          <div className="relative">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-200/50 blur-3xl"></div>

            {/* Placeholder */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-200/50 blur-3xl"></div>

              <div className="relative">
                <HeroCarousel />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;