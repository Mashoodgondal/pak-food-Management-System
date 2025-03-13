"use client";
import { useState } from "react";

const CalculatorModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    // const handleButtonClick = (value: string) => {
    //     if (value === "=") {
    //         try {
    //             setInput(eval(input).toString()); // Evaluate expression
    //         } catch {
    //             setInput("Error");
    //         }
    //     } else if (value === "C") {
    //         setInput(""); // Clear input
    //     } else {
    //         setInput(input + value); // Append value
    //     }
    // };
    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                setInput((prevInput) => {
                    const result = new Function("return " + prevInput)();
                    return result.toString();
                });
            } catch {
                setInput("Error");
            }
        } else if (value === "C") {
            setInput(""); // Clear input
        } else {
            setInput((prevInput) => prevInput + value); // Append value
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {/* Open Modal Button */}
            <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                onClick={() => setIsOpen(true)}
            >
                Open Calculator
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-72 transform transition-all scale-95 opacity-0 animate-fade-in">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-700">Calculator</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                ✖
                            </button>
                        </div>

                        {/* Display */}
                        <div className="bg-gray-100 text-right text-2xl p-3 rounded-md mb-4">
                            {input || "0"}
                        </div>

                        {/* Buttons Grid */}
                        <div className="grid grid-cols-4 gap-2">
                            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map(
                                (btn) => (
                                    <button
                                        key={btn}
                                        className="bg-gray-200 text-gray-800 p-3 rounded-lg text-lg font-bold hover:bg-gray-300 transition-all"
                                        onClick={() => handleButtonClick(btn)}
                                    >
                                        {btn}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalculatorModal;
