'use client';
import QuotePopupCard from "@/components/ui/QuotePopupCard";
import Home from "./home/Home";
import { useEffect, useState } from "react";

export default function MainPage() {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    }

    return (
        <>
            <Home />

            {showPopup && (
                <QuotePopupCard onClose={handleClose} />
            )}
        </>
    );
}
