'use client';
import QuotePopupCard from "@/components/ui/QuotePopupCard";
import Home from "./home/Home";
import { useEffect, useState } from "react";

export default function MainPage() {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    // todo: Handle the Pop up Quote Card -
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // todo: Handle the Close Pop up card -
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
