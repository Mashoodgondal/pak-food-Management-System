"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const router = useRouter();

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setResult(eval(input).toString());
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-300 p-5">

            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-5 w-full max-w-sm">
                <h2 className="text-center text-red-600 text-3xl font-bold mb-3">Calculator</h2>

                <div className="bg-white p-3 rounded-lg shadow-inner mb-4">
                    <input type="text" value={input} readOnly className="w-full text-right text-gray-500 text-lg bg-transparent outline-none" />
                    <div className="text-right text-gray-700 text-xl font-semibold">{result}</div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleClick(btn)}
                            className="bg-white bg-opacity-30 text-gray-500 font-bold text-lg rounded-lg p-4 hover:bg-opacity-50 hover:bg-orange-200 transition"
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => router.push("/")}
                    className="mt-5 w-full text-center text-gray-300 font-semibold bg-indigo-600 bg-opacity-40 py-3 rounded-lg hover:bg-opacity-60 transition"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Calculator;
