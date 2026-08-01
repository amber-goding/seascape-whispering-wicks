import CandleCard from "../components/CandleCard";
import candles from "../data/candles";

function CandleCollection() {
    return (
        <section
            id="candles"
            className="max-w-7xl mx-auto px-6 py-20"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Our Candle Collection
                </h2>

                <p className="text-gray-600 mt-4">
                    Handcrafted with 100% pure beeswax, coconut wax, and
                    premium essential oils inspired by the beauty of the sea.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {candles.map((candle) => (
                    <CandleCard
                        key={candle.id}
                        candle={candle}
                    />
                ))}
            </div>
        </section>
    );
}

export default CandleCollection;