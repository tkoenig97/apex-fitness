import { toggleMenu } from "../utils/NavUtils";

export const Header = () => {
    return (
        <div className="bg-brown-500 text-brown-200 px-4 flex md:justify-center justify-between items-center">
            <h1 className="text-4xl hover:cursor-pointer hover:text-brown-300">
                Apex Fitness
            </h1>
            <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
        </div>
    );
};
