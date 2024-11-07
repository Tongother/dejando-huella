import Image from "next/image";

const Formulario = () => {
    return (
        <section className="w-full font-rancho flex justify-center gap-12">
            <div className="hidden md:block relative w-80 h-80">
                <Image src="/contacto/Oso.png" alt="perritos" fill/>
            </div>
            <form action="" className="flex flex-col w-full md:w-[80%] lg:w-[50%]">
                <h2 className="text-4xl md:text-5xl text-center text-[#374193]">¡Contactanos!</h2>
                <div className="lg:h-12 flex flex-col md:flex-row mt-4 gap-4">
                    <input type="text" placeholder="Nombre completo" className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required/>
                    <input type="tel" placeholder="Telefono" className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required/>
                </div>
                <div className="flex flex-col mt-4 gap-4">
                    <input type="email" name="" id="" placeholder="Correo electronico" className="w-full lg:h-12 p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required/>
                    <textarea name="" id="" rows={4} placeholder="¡Hola, mucho gusto! Quisiera saber acerca de..." className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required></textarea>
                </div>
                <button className="w-32 h-12 bg-[#FFB602] hover:bg-[#ffd61b] hover:scale-105 ease-out duration-300 text-white text-xl py-2 px-4 rounded-full self-center mt-4">Enviar</button>
            </form>
        </section>
    )
}

export default Formulario;