
export default function Product() {

    return (
        <div className=" flex h-auto w-full flex-col overflow-x-hidden">
            <nav className='w-full px-6 py-10 flex justify-between items-center sm:px-6 md:px-10 lg:px-16 '>
                <img
                    className="w-[200px] h-[50px] sm:w-[250px] sm:h-[50px] md:w-[350px] md:h-[70px] lg:w-[350px] lg:h-[70px]"
                    src="/octopus-logo.svg"
                    alt="Octopus Energy Logo"
                />
                <div className="relative">
                    <img
                        className="relative w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]"
                        src="/basket.svg"
                        alt="Basket"
                    />
                    <div
                        className="absolute -top-2 -right-2 flex justify-center items-center w-8 h-8 bg-sohoLights rounded-xl ">
                        <p  className="text-base font-bold font-sans ">0</p>
                    </div>
                </div>


            </nav>
            <div className="flex my-4 h-auto w-full
            flex-col justify-center items-center
            px-6 sm:px-6 md:px-10 lg:px-16"
            >
                <div className="flex w-full justify-between
                flex-col sm:flex-col md:flex-col lg:flex-row
                my-2 sm:my-2 md:my-12 lg:my-12
                ">
                    <div className="flex w-full justify-center sm:w-full md:w-full lg:w-[45%]">
                        <img
                            className=" rounded-3xl w-full h-full"
                            src="/philips-plumen.jpg"
                            alt="Basket"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-full sm:w-full md:w-full lg:w-[50%]">
                        <h1 className="font-bold font-sans text-ice my-10
                        text-4xl sm:text-4xl md:text-6xl lg:text-7xl
                        leading-[3rem] sm:leading-3 md:leading-[5rem] lg:leading-[7rem] "
                        >Energy saving light bulb</h1>
                        <p className="my-4 font-medium text-2xl font-sans text-purpleHaze">25W // Packet of 4</p>
                        <div
                            className="w-full flex justify-between items-center  my-6 font-sans  sm:my-6 md:my-16 lg:my-16">
                            <p className="font-bold font-sans text-4xl sm:text-4xl md:text-5xl lg:text-5xl mt-12 ">&pound;12.99</p>
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-sans text-lg py-2 ">Qty</p>
                                <div className="flex justify-center items-center">
                                    <div
                                        className={`flex mx-4 bg-sohoLights rounded-2xl justify-center items-center cursor-pointer
                                        w-[50px] sm:w-[50px] md:w-[60px] lg:w-[60px]
                                        h-[50px] sm:h-[50px] md:h-[60px]  lg:h-[60px]`}>
                                        <p className={`font-sans font-bold text-siphon text-2xl `}> - </p>
                                    </div>
                                    <p  className={`font-bold font-sans text-3xl sm:text-3xl md:text-5xl lg:text-5xl`}>1</p>
                                    <div
                                        className="flex mx-4 bg-sohoLights rounded-2xl justify-center items-center cursor-pointer
                                        w-[50px] sm:w-[50px] md:w-[60px] lg:w-[60px]
                                        h-[50px] sm:h-[50px] md:h-[60px] lg:h-[60px]">
                                        <p className="font-sans font-bold text-siphon text-2xl"> + </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full my-12  bg-sohoLights rounded-2xl text-siphon font-medium
                            py-6 sm:py-6 md:py-8 lg:py-8
                            text-xl sm:text-xl md:text-3xl lg:text-3xl "
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-hemocyanin my-4 px-6 pt-8 pb-16 w-full h-auto sm:px-6 md:px-10 lg:px-16 ">
                <h1 className="text-3xl font-medium font-sans my-8 sm:text-3xl md:text-5xl lg:text-5xl">Description</h1>
                <p className="w-full sm:w-full md:w-full lg:w-[50%] text-lg sm:text-lg md:text-2xl lg:text-2xl font-sans">Available
                    in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no
                    wait
                    around warm start and flicker free features make for a great all purpose bulb</p>
            </div>
            <div className=" my-4 px-6 py-8 w-full h-auto sm:px-6 md:px-10 lg:px-16 ">
                <h1 className="text-3xl font-medium font-sans my-8 sm:text-3xl md:text-5xl lg:text-5xl">Specification</h1>
                <div className="w-full sm:w-full md:w-[80%] lg:w-[40%] flex justify-between">
                    <div>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Brand</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">item weight (g)</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Dimension (cm)</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Item Model Number</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Cool Daylight</p>
                    </div>
                    <div>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Phillips</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">77</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">12.6 x 6.2 x 6.2</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">E27 ES</p>
                        <p className="my-6 font-sans text-lg sm:text-lg md:text-2xl lg:text-2xl">Cool Daylight</p>
                    </div>

                </div>

            </div>
            <div className="flex items-center bg-hemocyanin my-4 px-6 py-12 w-full h-auto sm:px-6 md:px-10 lg:px-16">
                <p className="text-purpleHaze  text-md sm:text-lg md:text-xl lg:text-xl">Octopus energy Ltd is a company
                    registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London
                    EC1N 2HT Trading office: 20-24 Broadwick Street, London, W1F 8HT</p>
            </div>
        </div>

    )
}
