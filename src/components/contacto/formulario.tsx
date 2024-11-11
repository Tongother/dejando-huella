"use client"
import React, { useState } from "react";
import Image from "next/image";

interface datosFormProps {
    nombre: string;
    telefono: string;
    correo: string;
    asunto: string;
    mensaje: string;
}

const Formulario = () => {

    const [datosForm, setDatosForm] = useState<datosFormProps>({
        nombre: "",
        telefono: "",
        correo: "",
        asunto: "",
        mensaje: ""
    });

    const [enviado, setEnviado] = useState(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDatosForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const respuesta = fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosForm)
        })

        respuesta.then((res) => {
            if(res.status === 200){
                setEnviado(res.status);
            }else{
                setEnviado(res.status);
            }
        })
    }

    return (
        <section className="w-full font-itim flex justify-center gap-12">
            <div className="hidden md:block relative w-80 h-80">
                <Image src="/contacto/Oso.png" alt="perritos" fill/>
            </div>
            <form action="" className="flex flex-col w-full md:w-[80%] lg:w-[50%]" onSubmit={(e) => handleSubmit(e)}>
                <h2 className="text-4xl md:text-5xl text-center text-[#374193]">¡Contactanos!</h2>
                <div className="lg:h-12 flex flex-col md:flex-row mt-4 gap-4">
                    <input type="text" name="nombre" placeholder="Nombre completo" className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required onChange={(e) => handleChange(e)}/>
                    <input type="tel" name="telefono" placeholder="Telefono" className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required onChange={(e) => handleChange(e)} minLength={10} maxLength={10}/>
                </div>
                <div className="flex flex-col mt-4 gap-4">
                    <input type="email" name="correo" id="" placeholder="Correo electronico" className="w-full lg:h-12 p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required onChange={(e) => handleChange(e)}/>
                    <input type="text" name="asunto" id="" placeholder="Asunto" className="w-full lg:h-12 p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required onChange={(e) => handleChange(e)}/>
                    <textarea name="mensaje" id="" rows={4} placeholder="¡Hola, mucho gusto! Quisiera saber acerca de..." className="w-full p-2 rounded-xl border border-black" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} required onChange={(e) => handleChange(e)}></textarea>
                    {}
                </div>
                    {enviado === 200 ? (<div className="flex gap-4 mt-2">
                                    <p className="text-green-500 font-semibold text-center">Mensaje enviado con exito</p>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check text-green-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" /></svg>
                                </div>) : enviado !== 0 ? (
                    <div className="flex gap-4 mt-2">
                        <p className="text-red-500 font-semibold text-center">Error al enviar el mensaje</p>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle text-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                    </div>
                ) : null}
                <button className="w-32 h-12 bg-[#FFB602] hover:bg-[#ffd61b] hover:scale-105 ease-out duration-300 text-white text-xl py-2 px-4 rounded-full self-center mt-4">Enviar</button>
            </form>
        </section>
    )
}

export default Formulario;