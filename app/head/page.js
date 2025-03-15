
const HeaderPage = () => {
    return (
        <header className=" relative py-4 px-4 lg:py-6  shadow-md rounded-b-lg  text-center"
            style={{ backgroundImage: "url('/images/banner2.jpg')" }}
        >

            <h1 className="text-2xl sm:text-4xl lg:text-3xl font-extrabold text-black drop-shadow-md">
                Pak <span className="text-black">Foods</span> Ice Cream &
                <span className="text-black"> Fish</span> Point
            </h1>
        </header>
    );
};
export default HeaderPage;