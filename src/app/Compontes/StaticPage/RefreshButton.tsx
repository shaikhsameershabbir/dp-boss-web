"use client";
import React from "react";

export default function RefreshButton({ className = "", title = "Refresh" }: { className?: string, title?: string }) {
    return (
        <button
            className={`m-1 text-white bg-[#522f92] hover:bg-blue-700 active:bg-white active:text-blue-700 border border-blue-600 text-[12px] font-bold px-3 rounded-[7px] p-1 cursor-pointer transition-all duration-100 active:scale-95 ${className}`}
            onClick={() => window.location.reload()}
            type="button"
        >
            {title}
        </button>
    );
} 