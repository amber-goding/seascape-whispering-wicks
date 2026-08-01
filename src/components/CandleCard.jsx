function CandleCard({ candle }) {
    return (
        <article className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
            <img
                src={candle.image}
                alt={candle.name}
                className="w-full h-72 object-cover"
            />

            <div className="p-4">
                <h3 className="text-xl font-semibold">{candle.name}</h3>

                <p className="text-gray-500 mt-1">{candle.scent}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-lg">${candle.price}</span>

                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg">
                        View
                    </button>
                </div>
            </div>
        </article>
    );
}

export default CandleCard;