import { Link } from "react-router-dom";

function Contact() {
    return (
        <main className="bg-slate-50">

            {/* Hero */}
            <section className="max-w-5xl mx-auto text-center px-6 py-20">
                <h1 className="text-5xl font-bold text-slate-800">
                    Let's Bring Your Coastal Escape to Life
                </h1>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    Whether you have a question about our handcrafted candles, want help
                    choosing the perfect scent, or are interested in a custom order, we'd
                    love to hear from you. Every message is read personally, and we look
                    forward to helping you find your next favorite candle.
                </p>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div className="space-y-8">

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-6">
                                Get in Touch
                            </h2>

                            <div className="space-y-4 text-slate-600">

                                <p>
                                    📧 hello@seascapewhisperingwicks.com
                                </p>

                                <p>
                                    📱 Instagram: @SeascapeWhisperingWicks
                                </p>

                                <p>
                                    👍 Facebook: Seascape Whispering Wicks
                                </p>

                                <p>
                                    ⏰ Typical response time:
                                    <br />
                                    Within 24–48 hours.
                                </p>

                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-100 to-cyan-50 rounded-2xl p-8 shadow-lg">

                            <h3 className="text-2xl font-bold mb-4">
                                Why Shop With Us?
                            </h3>

                            <ul className="space-y-4 text-slate-700">

                                <li>🐝 100% Pure Beeswax</li>

                                <li>🥥 Premium Coconut Wax</li>

                                <li>🌿 Naturally Inspired Essential Oils</li>

                                <li>🌊 Coastal Designs Handmade with Care</li>

                                <li>❤️ Small Batch Quality</li>

                            </ul>

                        </div>

                    </div>

                    {/* Right Side */}

                    <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">

                        <h2 className="text-3xl font-bold">
                            Send a Message
                        </h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-lg p-3"
                        />

                        <textarea
                            rows="6"
                            placeholder="Tell us how we can help..."
                            className="w-full border rounded-lg p-3 resize-none"
                        ></textarea>

                        <button
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </section>

            {/* Bottom CTA */}

            <section className="bg-slate-800 text-white py-20">

                <div className="max-w-4xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold">
                        Every Candle Begins with a Conversation
                    </h2>

                    <p className="mt-6 text-slate-300 leading-relaxed">
                        Thank you for supporting handmade craftsmanship. Every candle is
                        poured with care, inspired by the sea, and created to bring warmth,
                        comfort, and a little coastal magic into your home.
                    </p>

                    <Link
                        to="/candles"
                        className="inline-block mt-8 bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold"
                    >
                        Explore Our Collection
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Contact;