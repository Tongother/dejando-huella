import Image from "next/image";
import gatitos_enjaulados from "../../../../public/gatitos/gatitos_enjaulados.png";
import Link from "next/link";


const HogarTemporal = () => {
    return (
        <div className="flex justify-center gap-64 bg-[#FEFEFE] items-center h-[400px] w-full p-10">

            <Image className="h-[350px] w-[350px] rounded-[100%] transform transition-transform duration-100 hover:scale-110" src={gatitos_enjaulados.src} alt="Hogar temporal" width={350} height={350} />
            <div className="flex flex-col items-center justify-center w-[600px]">
                <h1 className="md:text-[40px] font-irish text-center text-[#374193]">¿No puedes adoptar pero quieres ayudar?</h1>
                <p className="font-itim text-base text-[#F6A700] text-center">Revisa nuestro programa de Dog/Cat Sitting,<span className="text-gray-900"> donde podrás brindar un hogar temporal a alguno de nuestros peluditos mientras llega su adopción definitiva</span></p>
                <Link className="w-[250px] h-[60px] bg-[#374193] text-white font-itim text-[24px] mt-10 rounded-xl flex items-center justify-center text-center transform transition-transform duration-300 hover:scale-110"  href="/hogar_temporal"><p className="-mt-2">Conocer más</p></Link>
            </div>
        </div>
    );
}

export default HogarTemporal;