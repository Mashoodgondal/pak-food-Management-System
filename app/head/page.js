// import Image from "next/image";
// import img1 from '@/public/images/banner1.jpg'

// const HeaderPage = () => {
//     return (
//         <header className="py-4 px-4 lg:py-6  shadow-md rounded-b-lg text-center"
//             style={{ backgroundImage: { img1 } }}
//         >

//             <h1 className="text-2xl sm:text-4xl lg:text-3xl font-extrabold text-green-700 drop-shadow-md">
//                 Pak <span className="text-indigo-700">Foods</span> Ice Cream &
//                 <span className="text-red-600"> Fish</span> Point
//             </h1>
//         </header>
//     );
// };

// export default HeaderPage;
const HeaderPage = () => {
    return (
        <header
            className="py-4 px-4 lg:py-6 shadow-md rounded-b-lg text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/banner2.jpg')" }} // ✅ Use direct public folder path
        >
            <h1 className="text-2xl sm:text-4xl lg:text-3xl font-extrabold text-green-700 drop-shadow-md bg-white/40 p-2 rounded-md inline-block">
                Pak <span className="text-indigo-700">Foods</span> Ice Cream &
                <span className="text-red-600"> Fish</span> Point
            </h1>
        </header>
    );
};

export default HeaderPage;
