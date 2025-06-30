"use client";
import React from "react";

export default function RefreshButton({ className = "", title = "Refresh" }: { className?: string, title?: string }) {
    const handleRefresh = () => {
        // Save current scroll position
        const scrollPosition = window.scrollY;
        sessionStorage.setItem('scrollPosition', scrollPosition.toString());

        // Reload the page
        window.location.reload();
    };

    // Restore scroll position on component mount
    React.useEffect(() => {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        if (savedPosition) {
            // Use setTimeout to ensure the page is fully loaded
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedPosition));
                sessionStorage.removeItem('scrollPosition');
            }, 100);
        }
    }, []);

    return (
        <button
            className={`m-1 text-white bg-[#522f92] hover:bg-blue-700 active:bg-white active:text-blue-700 border border-blue-600 text-[12px] font-bold px-3 rounded-[7px] p-1 cursor-pointer transition-all duration-100 active:scale-95 ${className}`}
            onClick={handleRefresh}
            type="button"
        >
            {title}
        </button>
    );
} 