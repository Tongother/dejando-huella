'use client';
import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
interface FormProps {
	idEdit: number | null,
	id_especie: number | null,
	nombre: string | null,
	edad: number | null,
	id_sexo: number | null,
	id_personalidad: number | null,
	id_tamano: number | null,
	adoptado: boolean,
}

//TODO: Agregar la lógica para insertar y actualizar imágenes.

export default function FormPets({ idEdit, especie }: { idEdit: number | null; especie: number | null; }) {
	const [isMounted, setIsMounted] = useState(false);
	const [alert, setAlert] = useState<boolean>(false);
	const [valueAlert, setValueAlert] = useState<string>('');
	const [values, setValues] = useState<FormProps>({
		idEdit: idEdit,
		id_especie: especie,
		nombre: null,
		edad: 0,
		id_sexo: null,
		id_personalidad: null,
		id_tamano: null,
		adoptado: false,
	});
	const [insert, setInsert] = useState<boolean>(false);
	const [update, setUpdate] = useState<boolean>(false);

	useEffect(() => {
		console.log("Values actual: " ,values)
	}, [values])

	//Si se llamó a la función con un idEdit, se obtienen los datos del peludito a editar
	useEffect(() => {
		async function getEditData() {
			if (idEdit === null) return
			const res = await axios.get(`/api/getPet/${idEdit}/${especie}`);
			if(res.data.status != 200){
				setValueAlert('No se encontró el peludito');
				setAlert(true);
				setTimeout(() => {
					window.location.href='/admin/list';
				}, 2000);
				return;
			}
			setValues((values) => ({
				...values,
				...res.data.result[0]
			}));
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
			const res = await axios.put('/api/updatePet/', values);
			if(res.data.status === 200){
				setValueAlert('Edición exitosa');
				setAlert(true);
				setTimeout(() => {
					window.location.href='/admin/list';
				}, 2000);
			}
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
				if(response.data.status === 200){
					setValueAlert('Registro exitoso');
					setAlert(true);
					setTimeout(() => {
						window.location.href='/admin/list';
					}, 2000);
				}
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
		if (values.id_especie === 1) {
			const { nombre, edad, id_sexo, id_personalidad, id_tamano} = values;
			if (!nombre || !edad || !id_sexo || !id_personalidad || !id_tamano) {
				setValueAlert('Completa todos los campos del formulario');
				setAlert(true);
				setTimeout(() => {
					setAlert(false);
				}, 2000);
				return;
			}
		} else {
			const { nombre, edad, id_sexo, id_personalidad} = values;
			if (!nombre || !edad || !id_sexo || !id_personalidad) {
				setValueAlert('Completa todos los campos del formulario');
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
		
	};

	// const HandleCancel = () => {
	// 	window.location.reload();
	// };

	return (
		<form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl m-auto" onSubmit={HandleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700]">Registro de peluditos</h1>
			{
				idEdit === null &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Especie</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_especie" name="id_especie" onChange={HandleChange} value={values.id_especie || 0} required>
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
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_sexo" name="id_sexo" onChange={HandleChange} value={values.id_sexo || 0} required>
				<option value={0} disabled>Selecciona el Sexo</option>
				<option value={1}>Macho</option>
				<option value={2}>Hembra</option>
			</select>

			<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="personalidad">Personalidad</label>
			<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_personalidad" name="id_personalidad" onChange={HandleChange} value={values.id_personalidad || 0} required>
				<option value={0} disabled>Selecciona la personalidad</option>
				<option value={1}>Juguetón</option>
				<option value={2}>Tímido</option>
				<option value={3}>Tranquilo</option>
				<option value={4}>Protector</option>
				<option value={5}>Amoroso</option>
			</select>

			{values.id_especie == 1 &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="tamano">Tamaño</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_tamano" name="id_tamano" onChange={HandleChange} value={values.id_tamano || 0} required>
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
			<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">{idEdit! ? 'Editar' : 'Insertar'}</button>
			<Link className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]" href='/admin/list'>
				<button className="text-center w-full">Cancelar</button>
			</Link>
			{
				alert && <div className="text-center text-[#f62d00]">{valueAlert}</div>
			}
		</form>
	)
};