export default function Product() {
    return (
        <div className=" flex h-auto w-full flex-col overflow-x-hidden">
            <nav className='w-full px-4 py-10 flex justify-between items-center sm:px-4 md:px-8 lg:px-16 '>
                <img
                    className="w-[200px] h-[50px] sm:w-[250px] sm:h-[50px] md:w-[350px] md:h-[70px] lg:w-[350px] lg:h-[70px]"
                    src="/octopus-logo.svg"
                    alt="Octopus Energy Logo"
                />
                <img
                    className="w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]"
                    src="/basket.svg"
                    alt="Basket"
                />
            </nav>
            <div className="flex px-4 my-8 h-auto w-full
            flex-col justify-center items-center
            sm:px-4 md:px-8 lg:px-16 "
            >
                <div className="flex my-12 w-full justify-between">
                    <div className="flex w-[45%] justify-center">
                        <img
                            className=" rounded-3xl w-full h-full"
                            src="/philips-plumen.jpg"
                            alt="Basket"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-[50%]">
                        <h1 className="font-bold font-sans text-white text-7xl leading-[6rem]">Energy saving light
                            bulb</h1>
                        <p className="my-6 font-medium text-2xl font-sans text-purpleHaze">25W // Packet of 4</p>
                        <div className="w-full flex justify-between my-16 font-sans items-center">
                            <p className="font-bold font-sans text-5xl">&pound;12.99</p>
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-sans text-lg py-2">Qty</p>
                                <div className="flex justify-center items-center">
                                    <div
                                        className=" flex mx-4 bg-sohoLights w-[60px] h-[60px] rounded-2xl justify-center items-center">
                                        <p className="font-sans font-bold text-2xl"> - </p>
                                    </div>
                                    <p className="font-sans font-bold text-5xl mx-2">1</p>
                                    <div
                                        className="flex mx-4 bg-sohoLights w-[60px] h-[60px] rounded-2xl justify-center items-center">
                                        <p className="font-sans font-bold text-2xl"> + </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full my-12 py-8 bg-sohoLights rounded-2xl text-siphon font-medium text-3xl">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-hemocyanin my-4 px-4 pt-8 pb-16 w-full h-auto sm:px-4 md:px-8 lg:px-16 ">
                <h1 className="text-5xl font-medium font-sans my-8">Description</h1>
                <p className="w-[45%] text-xl font-sans">Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no
                    wait
                    around warm start and flicker free features make for a great all purpose bulb</p>
            </div>
            <div className=" my-4 px-4 py-8 w-full h-auto sm:px-4 md:px-8 lg:px-16 ">
                <h1 className="text-5xl font-medium font-sans my-8">Specification</h1>
                <div className=" w-[40%] flex justify-between">
                    <div>
                        <p className="my-6 font-sans text-xl">Brand</p>
                        <p className="my-6 font-sans text-xl">item weight (g)</p>
                        <p className="my-6 font-sans text-xl">Dimension (cm)</p>
                        <p className="my-6 font-sans text-xl">Item Model Number</p>
                        <p className="my-6 font-sans text-xl">Cool Daylight</p>
                    </div>
                    <div>
                        <p className="my-6 font-sans text-xl">Phillips</p>
                        <p className="my-6 font-sans text-xl">77</p>
                        <p className="my-6 font-sans text-xl">12.6 x 6.2 x 6.2</p>
                        <p className="my-6 font-sans text-xl">E27 ES</p>
                        <p className="my-6 font-sans text-xl">Cool Daylight</p>
                    </div>

                </div>

            </div>
            <div className="flex items-center bg-hemocyanin my-4 px-4 py-16 w-full h-auto sm:px-4 md:px-8 lg:px-16">
                <p className="text-purpleHaze">Octopus energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London EC1N 2HT Trading office: 20-24 Broadwick Street, London, W1F 8HT</p>
            </div>
        </div>

    )
}
