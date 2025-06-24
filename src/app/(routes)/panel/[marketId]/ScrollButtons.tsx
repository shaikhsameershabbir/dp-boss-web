"use client";
import React from "react";

interface ScrollButtonsProps {
    position: "top" | "bottom";
}

export function ScrollButtons({ position }: ScrollButtonsProps) {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (position === "top") {
        return (
            <button
                className="bg-[#a0d5ff] px-8 sm:px-10 md:px-12 py-2 sm:py-3 mx-auto block text-[12px] sm:text-[13px] md:text-[14px] text-[#220c82] mt-2 font-bold"
                style={{
                    textShadow: "1px 1px #00bcd4",
                    boxShadow:
                        "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
                }}
                onClick={scrollToBottom}
            >
                Go to Bottom
            </button>
        );
    }

    return (
        <button
            className="bg-[#a0d5ff] px-8 sm:px-10 md:px-12 py-2 sm:py-3 mx-auto block text-[12px] sm:text-[13px] md:text-[14px] text-[#220c82] mt-2 font-bold"
            style={{
                textShadow: "1px 1px #00bcd4",
                boxShadow:
                    "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
            }}
            onClick={scrollToTop}
        >
            Go to top
        </button>
    );
} 