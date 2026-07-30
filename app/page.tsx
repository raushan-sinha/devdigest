'use client';
import QuotePopupCard from "@/components/ui/QuotePopupCard";
import Home from "./home/Home";
import { useEffect, useState } from "react";
import { getQuoteUrlData } from "@/services/quoteUrl.services";
import { QuoteData } from "@/types/quoteCardProps.types";

export default function MainPage() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showQuote, setShowQuote] = useState<QuoteData[]>([]);

    // todo: Handle Quote Url -
    useEffect(() => {
        const loadQuoteData = async () => {
            try {
                const quoteResponse = await getQuoteUrlData();
                console.log(quoteResponse);
                setShowQuote(quoteResponse);
            } catch (error) {
                console.error(error);
            }
        }

        loadQuoteData();
    }, []);

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

            {showPopup && showQuote.length > 0 && (
                <QuotePopupCard onClose={handleClose} q={showQuote[0].q} a={showQuote[0].a} />
            )}
        </>
    );
}
