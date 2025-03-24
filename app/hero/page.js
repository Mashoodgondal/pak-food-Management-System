
"use client";
import Link from "next/link";
import { useState } from "react";

const items = [
    { name: "Vanilla", prices: { small: 100, medium: 150, large: 200, xl: 250 } },
    { name: "Chocolate", prices: { small: 60, medium: 120, large: 180, xl: 250 } },
    { name: "Strawberry", prices: { small: 55, medium: 110, large: 165, xl: 250 } },
    { name: "Mango", prices: { small: 65, medium: 130, large: 195, xl: 250 } },
    { name: "Pistachio", prices: { small: 75, medium: 150, large: 225, xl: 250 } },
    { name: "Rabri", prices: { small: 150, medium: 150, large: 150 } },
    { name: "Bryani", prices: { small: 150, medium: 200, large: 250 } },
    { name: "Vanilla Shake", type: "shake", prices: { regular: 180, large: 220 } },
    { name: "Chocolate Shake", type: "shake", prices: { regular: 180, large: 220 } },
    { name: "Strawberry Shake", type: "shake", prices: { regular: 180, large: 220 } },
    { name: "Mango Shake", type: "shake", prices: { regular: 180, large: 220 } },
    { name: "Oreo Shake", type: "shake", prices: { regular: 200, large: 250 } },
    { name: "KitKat Shake", type: "shake", prices: { regular: 200, large: 250 } },
    { name: "Pistachio Shake", type: "shake", prices: { regular: 200, large: 250 } },
    { name: "Nutella Shake", type: "shake", prices: { regular: 220, large: 270 } },
    { name: "Coffee Shake", type: "shake", prices: { regular: 200, large: 250 } },
    { name: "Rabri Shake", type: "shake", prices: { regular: 250, large: 300 } },
];

const HomePage = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleClick = (item, size) => {
        const price = item.prices[size];
        setSelectedItems([...selectedItems, { ...item, size, price }]);
    };



    const handleCancel = (index) => {
        setSelectedItems(selectedItems.filter((_, i) => i !== index));
    };

    const handleCancelAll = () => {
        setSelectedItems([]);
    };

    const handlePrintVoucher = () => {
        if (selectedItems.length === 0) {
            alert("No items selected!");
            return;
        }

        let voucherContent = `
            <div style="font-family: monospace; text-align: center; padding: 10px; width: 280px;">
                <h2 style="margin: 0;">Pak Dairy Ice Cream & Fish Point</h2>
                <hr style="border: 1px dashed black;">
                <table style="width: 100%; text-align: left; font-size: 14px;">
                    <tr>
                        <th style="text-align: left;">Item</th>
                        <th style="text-align: center;">Size</th>
                        <th style="text-align: right;">Price</th>
                    </tr>
        `;

        selectedItems.forEach(item => {
            voucherContent += `
                <tr>
                    <td>${item.name}</td>
                    <td style="text-align: center;">${item.size}</td>
                    <td style="text-align: right;">Rs. ${item.price}</td>
                </tr>
            `;
        });

        const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
        voucherContent += `
                </table>
                <hr style="border: 1px dashed black;">
                <h3 style="text-align: right;">Total: Rs. ${total}</h3>
                <hr style="border: 1px dashed black;">
                <p>Thank you for your purchase!</p>
            </div>
        `;

        const printWindow = window.open("", "_blank", "width=300,height=600");
        printWindow.document.write("<html><head><title>Receipt</title></head><body>");
        printWindow.document.write(voucherContent);
        printWindow.document.write("</body></html>");
        printWindow.document.close();

        printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
        };
    };

    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);



    return (
        <div className="grid grid-cols-1 md:grid-cols-2  p-5 bg-gray-100 gap-3">


            <div className=" h-[500px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 p-3 bg-white shadow-lg rounded-lg overflow-scroll">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="h-20 w-30 p-3 bg-yellow-200 rounded-xl shadow-lg border border-gray-500 flex flex-col items-center justify-center space-y-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <h3 className="text-lg font-semibold text-orange-600">{item.name}</h3>
                        <div className="flex sm:flex-col md:flex-row space-x-1">
                            <button
                                onClick={() => handleClick(item, "small")}
                                className="bg-green-500 text-white px-1 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-green-600 hover:scale-110"
                            >
                                S
                            </button>
                            <button
                                onClick={() => handleClick(item, "medium")}
                                className="bg-blue-500 text-white px-1 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                            >
                                M
                            </button>
                            <button
                                onClick={() => handleClick(item, "large")}
                                className="bg-red-500 text-white px-1 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-red-600 hover:scale-110"
                            >
                                L
                            </button>
                        </div>
                    </div>
                ))}


            </div>


            <div className="  p-5 bg-white shadow-lg rounded-lg" >
                <div className=" h-[290px] p-5 bg-white shadow-lg overflow-auto ">
                    <h2 className="text-xl text-center text-indigo-600 font-bold mb-4">Selected Items</h2>
                    <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border bg-yellow-500 text-gray-600 font-bold border-gray-400 p-2">Item Name</th>
                                <th className="border bg-yellow-500 text-gray-600 font-bold border-gray-400 p-2">Size</th>
                                <th className="border bg-yellow-500 text-gray-600 font-bold border-gray-400 p-2">Price</th>
                                <th className="border bg-yellow-500 text-gray-600 font-bold border-gray-400 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="border text-gray-600 font-bold border-gray-400 p-2">{item.name}</td>
                                    <td className="border text-gray-600 border-gray-400 p-2">{item.size}</td>
                                    <td className="border text-gray-600 border-gray-400 p-2">Rs. {item.price}</td>
                                    <td className="border text-gray-600 border-gray-400 p-2 text-center">
                                        <button
                                            onClick={() => handleCancel(index)}
                                            className="bg-red-400 text-white px-2 py-1 text-xs sm:text-sm rounded hover:bg-red-500"
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5">
                    <Link href="/calculator"><button className="bg-green-300 p-2 text-xs sm:text-sm hover:bg-green-400 rounded-lg text-yellow-700 border border-green-500">Calculator</button></Link>
                    <button className="bg-gray-600 p-2 text-xs sm:text-sm hover:bg-gray-500 rounded-lg text-yellow-500 border border-yellow-400" onClick={handleCancelAll}>Cancel All</button>
                    <button onClick={handlePrintVoucher} className="bg-blue-500 text-white px-4 py-2 text-xs sm:text-sm rounded hover:bg-blue-600">Print Voucher</button>
                    <div className="text-yellow-600 font-bold text-lg">Total: Rs. {total}</div>

                </div>

            </div>
        </div>
    );
};

export default HomePage;
