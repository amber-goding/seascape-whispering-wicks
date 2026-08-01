import { Link } from "react-router-dom";
import handPouring from "../assets/images/handpouring.png";

function About() {
    return (
        <main className="bg-slate-50">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-bold text-slate-800">
                    Our Story
                </h1>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                    At Seascape Whispering Wicks, every candle is handcrafted to capture
                    the peaceful beauty of the sea. Inspired by ocean breezes, coastal
                    landscapes, and the calming rhythm of the waves, each candle is made
                    with carefully selected natural ingredients to create a warm,
                    relaxing atmosphere in your home.
                </p>
            </section>

            {/* Story */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">
                        Inspired by Nature
                    </h2>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Seascape Whispering Wicks was founded from a love of the ocean and a
                        passion for handcrafted artistry. Every candle is poured in small
                        batches with attention to detail, ensuring each piece is as unique
                        as the shoreline that inspired it.
                    </p>

                    <p className="text-slate-600 leading-relaxed">
                        Whether displayed as décor or lit to fill your space with calming
                        aromas, our candles are designed to bring the serenity of the coast
                        into everyday life.
                    </p>
                </div>

                <img
                    src={handPouring}
                    alt="Hand pouring a candle"
                    className="rounded-2xl shadow-xl object-cover"
                />
            </section>

            {/* Ingredients */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
                        Crafted with Quality
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl shadow">
                            <h3 className="text-2xl font-semibold mb-4">
                                🐝 Pure Beeswax
                            </h3>

                            <p className="text-slate-600">
                                We use 100% pure beeswax for its naturally clean burn and warm,
                                golden glow.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl shadow">
                            <h3 className="text-2xl font-semibold mb-4">
                                🥥 Coconut Wax
                            </h3>

                            <p className="text-slate-600">
                                Coconut wax provides a smooth finish and enhances fragrance
                                while remaining an eco-friendly choice.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl shadow">
                            <h3 className="text-2xl font-semibold mb-4">
                                🌿 Essential Oils
                            </h3>

                            <p className="text-slate-600">
                                Every scent is carefully chosen to create a relaxing coastal
                                experience inspired by nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold text-slate-800">
                    Bring the Coast Home
                </h2>

                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Discover handcrafted candles inspired by the beauty and tranquility
                    of the sea.
                </p>

                <Link
                    to="/candles"
                    className="inline-block mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition"
                >
                    Shop the Collection
                </Link>
            </section>
        </main>
    );
}

export default About;