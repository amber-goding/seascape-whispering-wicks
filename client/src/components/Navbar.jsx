import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-sky-200/60 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">

                {/* Brand */}
                <Link
                    to="/"
                    className="text-xl font-bold tracking-wide text-teal-700 transition hover:text-teal-600 sm:text-2xl"
                >
                    Seascape Whispering Wicks
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 text-slate-700 font-medium md:flex">
                    <li>
                        <Link
                            to={"/candles"}
                            className="transition hover:text-teal-600"
                        >
                            Candles
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={"/about"}
                            className="transition hover:text-teal-600"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={"/contact"}
                            className="transition hover:text-teal-600"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="rounded-md p-2 text-slate-700 transition hover:bg-sky-100 md:hidden"
                    aria-label="Open navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

            </nav>
        </header>
    );
};

export default Navbar;