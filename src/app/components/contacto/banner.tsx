import Image from "next/image";

const Banner = () => {
    return(
        <section className="relative w-full h-64 md:h-96 lg:h-screen">
            <Image src="/contacto/perritos_banner.png" alt="breadcrumb" fill />
            <div className="absolute right-0 w-full md:w-[50%] h-full flex justify-center items-center bg-white opacity-50 md:opacity-30 z-10"/>
            <div className="absolute right-0 w-full md:w-[50%] h-full flex justify-center items-center z-10">
                <div className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-8">
                    <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil praesentium nam cupiditate necessitatibus. Ratione architecto repudiandae aspernatur fugiat hic! Necessitatibus recusandae odit voluptatum.</h1>
                    <div className="flex justify-evenly w-full">
                        <button className="md:w-32 xl:w-44 xl:h-12 bg-[#024BFF] hover:bg-[#0642cd] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">Adoptar</button>
                        <button className="md:w-32 xl:w-44 xl:h-12 bg-[#FFB602] hover:bg-[#ffd61b] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">Visítanos</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;