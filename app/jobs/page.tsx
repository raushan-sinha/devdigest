'use client';
import { useEffect } from "react";

export default function Jobs() {
    // Fetch Jobs Potsing API -
    const jobsFetching = async () => {
        try {
            const response = await fetch('http://localhost:5000/jobs/api');
            if(!response.ok) throw new Error('Failed to fetch API');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        jobsFetching();
    }, []);

    return (
        <h1>Jobs Page</h1>
    );
}