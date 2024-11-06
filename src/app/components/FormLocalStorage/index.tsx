'use client';
import { FormEvent, useState,ChangeEvent } from "react";
export default function FormLocalStorage() {
	const [values, setValues] = useState({
		especie: '',
		nombre: '',
		edad: '',
		sexo: '',
		personalidad: '',
		size: '',
		adoptado: false,
	});

	const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues((prevData) => (
			{
				...prevData,
				[name]: value
			}
		));
	};

	function HandleSubmit(event: FormEvent<HTMLFormElement>) {	
		event.preventDefault();
		window.location.reload();
	}

	const HandleCancel = (event: any) => {
		event.preventDefault();
		setValues({
			especie: '',
			nombre: '',
			edad: '',
			sexo: '',
			personalidad: '',
			size: '',
			adoptado: false,
		});
	}
 
	return(
		<form className="flex flex-col w-[500px] p-[20px] border-solid border-black border-[2px] rounded-xl my-[40px] mx-auto" onSubmit={HandleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700]">LocalStorage</h1>
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="especie">Especie</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="especie" name="especie" onChange={HandleChange} type="text" value={values.especie}/>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="nombre">Nombre</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre}/>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="edad">Edad</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="edad" name="edad" onChange={HandleChange} type="text" value={values.edad}/>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Sexo</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="sexo" name="sexo" onChange={HandleChange} type="text" value={values.sexo}/>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="personalidad" name="personalidad" onChange={HandleChange} type="text" value={values.personalidad}/>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="size">Tamaño</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="size" name="size" onChange={HandleChange} type="text" value={values.size}/>
			
			<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Registrar</button>
			<button className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]" onClick={HandleCancel}>Cancelar</button>
		</form>
	)
};