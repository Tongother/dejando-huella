'use client';
import { FormEvent, useState, ChangeEvent } from "react";
import { postPerros } from "./formLocalStorage";
interface FormLocalStorageProps {
	especie: number | undefined,
    nombre: string | undefined,
    edad: number | undefined,
    sexo: number,
    personalidad: number,
    tamano: number,
    adoptado: boolean,
}

export default function FormLocalStorage( {id}: {id: number} ) {
	const [values, setValues] = useState<FormLocalStorageProps>({	
		especie: 0,
		nombre: '',
		edad:0,
		sexo: 0,
		personalidad: 0,
		tamano: 0,
		adoptado: false,
	});

	const HandleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
		const { id, value } = event.target;
		setValues((prevData) => ({
				...prevData,
				[id]: value
			}
		));
	};

	const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = postPerros(values);
	};

	const HandleCancel = (event: any) => {
		event.preventDefault();
		window.location.reload();
	};
 
	return(
		<form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl m-auto" onSubmit={HandleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700]">Registro de peluditos</h1>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="nombre">Nombre</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre}/>

			<label className="my-2font-ini text-center text-[14px] text-[#333]" htmlFor="edad">Edad</label>
			<div className="flex gap-1 items-center mb-3">
				<output className="font-ini font-semibold bg-[#F6A700] text-white px-3 py-1 rounded-full">{values.edad}</output>
				<input className="w-full" id="edad" onChange={HandleChange} type="range" value={values.edad} min="0" max="25"/>
			</div>
			
			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Sexo</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="sexo" name="sexo" onChange={HandleChange}>
				<option value="">Selecciona el Sexo</option>
				<option value="1">Macho</option>
				<option value="2">Hembra</option>
			</select>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="personalidad" name="personalidad" onChange={HandleChange}>
				<option value="">Selecciona la personalidad</option>
				<option value="1">Juguetón</option>
				<option value="2">Tímido</option>
				<option value="3">Tranquilo</option>
				<option value="4">Protector</option>
				<option value="5">Amoroso</option>
			</select>

			{values.especie === 1 &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="tamano">Tamaño</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="tamano" name="tamano" onChange={HandleChange}>
						<option value="">Selecciona el tamaño del perrito</option>
						<option value="1">Pequeño</option>
						<option value="2">Mediano</option>
						<option value="3">Grande</option>
					</select>
				</div>
			}
			<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Registrar</button>
			<button className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]" onClick={HandleCancel}>Cancelar</button>
		</form>
	)
};