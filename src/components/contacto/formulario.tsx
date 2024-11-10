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
                alert("Correo enviado correctamente");
            }else{
                alert("Error al enviar el correo");
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
                </div>
                <button className="w-32 h-12 bg-[#FFB602] hover:bg-[#ffd61b] hover:scale-105 ease-out duration-300 text-white text-xl py-2 px-4 rounded-full self-center mt-4">Enviar</button>
            </form>
        </section>
    )
}

export default Formulario;