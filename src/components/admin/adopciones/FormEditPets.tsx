'use client';
import { FormEvent, useState, ChangeEvent, useEffect, useRef } from "react";
import axios from "axios";
import { isEqual } from "lodash";
import Error from "@/components/items/Alerts/Error";
import Exito from "@/components/items/Alerts/Exito";

interface FormProps {
	id: number,
	especie: string,
	nombre: string,
	edad: number,
	id_sexo: number,
	id_personalidad: number,
	id_tamano?: number,
	adoptado: boolean,
	historia?: string,
}

type Personalidad = {
	id_personalidad: number;
	personalidad: string;
};

interface FormPetsProps {
	idEdit?: number | null;
	especie: string;
	initialData?: FormProps | null;
}

export const FormEditPets = ({ idEdit, especie, initialData }: FormPetsProps) => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [values, setValues] = useState<FormProps>(initialData || {
		id: Number(idEdit),
		especie: especie,
		nombre: '',
		edad: 0,
		id_sexo: 0,
		id_personalidad: 0,
		id_tamano: 0,
		adoptado: false,
		historia: '',
	});
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [personalidades, setPersonalidades] = useState<Personalidad[]>([]);
	const [isEditing] = useState<boolean>(values.id !== 0);
	const [hasChanges, setHasChanges] = useState(false); // Nuevo estado para detectar cambios

	useEffect(() => {
		// Detectar cambios en el formulario
		setHasChanges(!isEqual(values, initialData));
	}, [values, initialData]); // Se actualiza cada vez que cambian los valores o los datos iniciales

	useEffect(() => {
		const getPersonalidades = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros/personalidades`);
			const data = await res.json();
			setPersonalidades(data);
		};
		getPersonalidades();
	}, []);


	const editPet = async (petData: FormProps) => {
		console.log(petData);
		try {
			const res = await axios.put('/api/updatePet/', petData, {
				headers: { 'Content-Type': 'application/json' }
			});
			if (res.data.status === 200) {
				setSuccess(true);
				setHasChanges(false);
				setTimeout(() => {
					setSuccess(false);
				}, 2000);
			}
		} catch (error) {
			setError(true);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { id, value } = event.target;
		setValues((prevData) => ({
			...prevData,
			[id]: value
		}
		));
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues(prevData => ({ ...prevData, adoptado: event.target.checked }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		editPet(values);
	};

	useEffect(() => {
		const target = textAreaRef.current;
		if (target) {
			target.style.height = 'auto';
			target.style.height = `${target.scrollHeight}px`;
		}
	}, [values.historia]);

	return (
		<form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl " onSubmit={handleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700] mb-5">{isEditing ? "Edición" : "Registro"} de peluditos</h1>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="nombre">Nombre</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="nombre" name="nombre" onChange={handleChange} type="text" value={values.nombre || ""} required />

			<label className="my-2font-ini text-center text-[14px] text-[#333]" htmlFor="edad">Edad en años</label>
			<div className="flex gap-1 items-center mb-3">
				<output className="font-ini font-semibold bg-[#F6A700] text-white px-3 py-1 rounded-full">{values.edad}</output>
				<input className="w-full" id="edad" onChange={handleChange} type="range" value={values.edad || 0} min="0" max="25" required />
			</div>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Sexo</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_sexo" name="id_sexo" onChange={handleChange} value={values.id_sexo || 0} required>
				<option value={0} disabled>Selecciona el Sexo</option>
				<option value={1}>Macho</option>
				<option value={2}>Hembra</option>
			</select>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_personalidad" name="id_personalidad" onChange={handleChange} value={values.id_personalidad || 0} required>
				<option value={0} disabled>Selecciona la personalidad</option>
				{personalidades.map((personalidad) => (
					<option key={personalidad.id_personalidad} value={personalidad.id_personalidad}>{personalidad.personalidad}</option>
				))}
			</select>

			{values.especie == "perros" &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="tamano">Tamaño</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_tamano" name="id_tamano" onChange={handleChange} value={values.id_tamano || 0} required>
						<option value={0} disabled>Selecciona el tamaño del perrito</option>
						<option value={1}>Pequeño</option>
						<option value={2}>Mediano</option>
						<option value={3}>Grande</option>
					</select>
				</div>
			}

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="historia">Historia</label>
			<textarea
				className="p-3 mb-5 border-solid border-[1px] border-[#ccc] rounded-md text-sm resize-none overflow-hidden"
				id="historia"
				name="historia"
				onChange={(e) => {
					handleChange(e);
				}}
				ref={textAreaRef}


				value={values.historia || ""}
				required
			/>

			<label htmlFor="adoptado" className="flex gap-2 px-5 mb-5">
				<input
					type="checkbox"
					id="adoptado"
					name="adoptado"
					checked={values.adoptado}
					onChange={handleCheckboxChange}
				/>
				Este peludito ya fue adoptado
			</label>

			<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px] disabled:bg-gray-300 disabled:cursor-not-allowed" type="submit" disabled={!hasChanges}>Guardar</button>
			{success && <Exito mensaje="Cambios guardados correctamente" />}
			{error && <Error mensaje="Favor de comunicarse con un desarrollador" />}
		</form>
	)
};

export default FormEditPets;