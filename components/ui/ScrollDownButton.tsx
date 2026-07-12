'use client'
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function ScrollDownButton() {
    const [showArrow, setShowArrow] = useState<boolean>(false);

    // Logic for Down Scrolling Visible or Hidden -
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, []);

    if(!showArrow) return null;

    return (
        <button className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
            <FaArrowDown />
        </button>
    );
}