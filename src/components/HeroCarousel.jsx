import { useEffect, useState } from "react";

// Placeholder images
import logo from "../assets/images/logo.png"
import lighthouse from "../assets/images/lighthouse.png";
import shark from "../assets/images/shark.png";
import turtle from "../assets/images/turtle.png";
import starfish from "../assets/images/starfish.png";
import dolphin from "../assets/images/dolphin.png";

const images = [logo, lighthouse, shark, turtle, starfish, dolphin];

const HeroCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((previous) =>
                previous === images.length - 1 ? 0 : previous + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-90 w-90 overflow-hidden rounded-[2rem] bg-white shadow-2xl sm:h-96 sm:w-96">

            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Handcrafted candle ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

        </div>
    );
};

export default HeroCarousel;