'use client';
import Home from "@/app/page";

export default function Button() {
    const callAPI = async () => {
        console.log('hello');
    }

    return (
        <button onClick={callAPI}>Call Enka</button>
    );
}