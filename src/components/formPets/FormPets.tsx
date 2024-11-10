'use client';
import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
interface FormProps {
	idEdit: number | null,
	especie: number | null,
	nombre: string | null,
	edad: number | null,
	sexo: number | null,
	personalidad: number | null,
	tamano: number | null,
	adoptado: boolean,
}

// interface FormEditProps {
// 	nombre: string,
// 	edad: number,
// 	sexo: number,
// 	personalidad: number,
// 	tamano: number | null,
// 	adoptado: boolean,
// }

//TODO: Agregar la lógica para insertar y actualizar imágenes.

export default function FormLocalStorage({ idEdit, especie }: { idEdit: number | null; especie: number | null; }) {
	const [isMounted, setIsMounted] = useState(false);
	const [alert, setAlert] = useState<boolean>(false);
	const [values, setValues] = useState<FormProps>({
		idEdit: idEdit,
		especie: idEdit === null ? 1 : especie,
		nombre: null,
		edad: null,
		sexo: null,
		personalidad: null,
		tamano: null,
		adoptado: false,
	});
	const [insert, setInsert] = useState<boolean>(false);
	const [update, setUpdate] = useState<boolean>(false);

	useEffect(() => {
		console.log(values)
	}, [values])

	//Si se llamó a la función con un idEdit, se obtienen los datos del peludito a editar
	useEffect(() => {
		async function getEditData() {
			if (idEdit === null) return
			const res = await axios.get(`api/getPet/${especie}/${idEdit}`);
			setValues(res.data)
		}
		getEditData()
	}, [])

	//Si se llamó a la función con un idEdit, se actualizan los datos del peludito
	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true); // Marca que el componente ya está montado
			return; // No hacer nada durante el primer renderizado
		}
		async function editPet() {
			if (idEdit === null) return
			const res = axios.put('/api/editPet/', values)
			console.log(res)
		}
		editPet()
	}, [update])

	//Si llamo a la función sin un idEdit, se insertan los datos del peludito
	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true); // Marca que el componente ya está montado
			return; // No hacer nada durante el primer renderizado
		}
		async function insertPet() {
			try {
				const response = await axios.post('/api/insertPet', values, {
					headers: {
						'Content-Type': 'application/json',
					}
				});
				console.log('Respuesta:', response.data);
			} catch (error: unknown) {
				console.error('Error en la petición:', error);
			}
		}
		insertPet()
	}, [insert])

	const HandleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
		const { id, value } = event.target;
		setValues((prevData) => ({
			...prevData,
			[id]: value
		}
		));
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prevData) => ({
			...prevData,
			adoptado: event.target.checked
		}
		));
	};

	const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (especie === 1) {
			const { nombre, edad, sexo, personalidad, tamano, adoptado } = values;
			if (!nombre || !edad || !sexo || !personalidad || !tamano || !adoptado) {
				setAlert(true);
				setTimeout(() => {
					setAlert(false);
				}, 2000);
				return;
			}
		} else {
			const { nombre, edad, sexo, personalidad, adoptado } = values;
			if (!nombre || !edad || !sexo || !personalidad || !adoptado) {
				setAlert(true);
				setTimeout(() => {
					setAlert(false);
				}, 2000);
				return;
			}
		}
		if (idEdit === null) {
			setInsert(true);
		} else {
			setUpdate(true);
		}
		window.location.reload();
	};

	const HandleCancel = () => {
		window.location.reload();
	};

	return (
		<form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl m-auto" onSubmit={HandleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700]">Registro de peluditos</h1>
			{
				idEdit === null &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Especie</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="especie" name="especie" onChange={HandleChange} value={values.especie || 0} required>
						<option value={0} disabled>Selecciona el peludito</option>
						<option value={1}>Perro</option>
						<option value={2}>Gato</option>
					</select>
				</div>
			}

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="nombre">Nombre</label>
			<input className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre || ""} required />

			<label className="my-2font-ini text-center text-[14px] text-[#333]" htmlFor="edad">Edad en años</label>
			<div className="flex gap-1 items-center mb-3">
				<output className="font-ini font-semibold bg-[#F6A700] text-white px-3 py-1 rounded-full">{values.edad}</output>
				<input className="w-full" id="edad" onChange={HandleChange} type="range" value={values.edad || 0} min="0" max="25" required />
			</div>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Sexo</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="sexo" name="sexo" onChange={HandleChange} value={values.sexo || 0} required>
				<option value={0} disabled>Selecciona el Sexo</option>
				<option value={1}>Macho</option>
				<option value={2}>Hembra</option>
			</select>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="personalidad" name="personalidad" onChange={HandleChange} value={values.personalidad || 0} required>
				<option value={0} disabled>Selecciona la personalidad</option>
				<option value={1}>Juguetón</option>
				<option value={2}>Tímido</option>
				<option value={3}>Tranquilo</option>
				<option value={4}>Protector</option>
				<option value={5}>Amoroso</option>
			</select>

			{values.especie == 1 &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="tamano">Tamaño</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="tamano" name="tamano" onChange={HandleChange} value={values.tamano || 0} required>
						<option value={0} disabled>Selecciona el tamaño del perrito</option>
						<option value={1}>Pequeño</option>
						<option value={2}>Mediano</option>
						<option value={3}>Grande</option>
					</select>
				</div>
			}
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
			<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Registrar</button>
			<button className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]" onClick={HandleCancel}>Cancelar</button>
			{
				alert && <div className="text-center text-[#f62d00]">Completa todos los datos del formulario</div>
			}
		</form>
	)
};