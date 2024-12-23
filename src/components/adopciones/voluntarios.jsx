import Image from "next/image";

export const VoluntariosBanner = () => {
    return (
        <div className="mt-10 mb-10 flex flex-col-reverse lg:flex-row md:justify-between" >
            <Image src="/Voluntarios.png" alt="Voluntarios" width={600} height={600} quality={100}/>
            <div className="flex flex-col gap-10 p-10 md:p-20 items-center">
                <h2 className="text-[#F6A700] font-irish text-center md:text-[40px] text-[30px]">¡Vuelvete parte de la familia!</h2>
                <p className="font-itim text-[#0f0f0f] text-base text-center md:w-3/4 w-full">Si no puedes adoptar, pero quieres ayudar, estamos en busca de personas comprometidas que quieran unirse a nuestro equipo y marcar una diferencia en la vida de muchos perros y gatos rescatados de la calle. <span className="text-[#4C62D9]">Escanea el QR y llena el formulario de voluntariado y únete a nuestra familia.</span></p>
            </div>
        </div >

    );
}

export default VoluntariosBanner;