"use client"

import { useState } from "react";


export const FormularioPerros = () => {
    const [values, setValues] = useState({
        especie: '',
        nombre: '',
        edad: '',
        sexo: '',
        personalidad: '',
        size: '',
        adoptado: false,
    });

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues((prevData) => (
			{
				...prevData,
				[name]: value
			}
		));
	};
    return (
        <form className="flex flex-col w-[500px] p-[20px] border-solid border-black border-[2px] rounded-xl my-[40px] mx-auto" >
            <h1 className="text-center font-ramm text-2xl text-[#F6A700]">LocalStorage</h1>
            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="especie">Especie</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" onChange={HandleChange} id="especie" name="especie" type="text" value={values.especie} />

            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="nombre">Nombre</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="nombre" name="nombre" type="text" value={values.nombre} />

            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="edad">Edad</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="edad" name="edad" type="text" value={values.edad} />

            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Sexo</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="sexo" name="sexo" type="text" value={values.sexo} />

            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="personalidad" name="personalidad" type="text" value={values.personalidad} />

            <label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="size">Tamaño</label>
            <input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="size" name="size" type="text" value={values.size} />

            <button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Registrar</button>
            <button className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]">Cancelar</button>
        </form>
    )
}