'use client';
import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

interface FormProps {
	id: number,
	especie: string,
	nombre: string,
	edad: number,
	id_sexo: number,
	id_personalidad: number,
	id_tamano?: number,
	adoptado: boolean,
	imagen?: string,
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

export default function FormPets({ idEdit, especie, initialData }: FormPetsProps) {
	const [alert, setAlert] = useState(false);
	const [valueAlert, setValueAlert] = useState('');
	const [values, setValues] = useState<FormProps>(initialData || {
		id: Number(idEdit),
		especie: especie,
		nombre: '',
		edad: 0,
		id_sexo: 0,
		id_personalidad: 0,
		id_tamano: 0,
		adoptado: false,
		imagen: '',
	});

	const [personalidades, setPersonalidades] = useState<Personalidad[]>([]);
	const [isEditing] = useState<boolean>(values.id !== 0);
	const [editImage, setEditImage] = useState(true);
	const [file, setFile] = useState<File | string>("");

	useEffect(() => {
		const getPersonalidades = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros/personalidades`);
			const data = await res.json();
			setPersonalidades(data);
		};
		getPersonalidades();
	}, []);

	useEffect(() => {
		setEditImage(!isEditing);
	}, [isEditing]);

	const editPet = async (petData: FormProps) => {
		try {
			const res = await axios.put('/api/updatePet/', petData, {
				headers: { 'Content-Type': 'application/json' }
			});
			if (res.data.status === 200) {
				setValueAlert('Edición exitosa');
				setAlert(true);
				setTimeout(() => {
					window.location.href = '/admin/list';
				}, 2000);
			}
		} catch (error) {
			console.error('Error en la petición:', error);
		}
	};
	

	const insertPet = async (petData: FormProps) => {
		try {
			const response = await axios.post('/api/insertPet', petData, {
				headers: { 'Content-Type': 'application/json' }
			});
			if (response.data.status === 200) {
				setValueAlert('Registro exitoso');
				setAlert(true);
				setTimeout(() => {
					window.location.href = '/admin/list';
				}, 2000);
			}
		} catch (error) {
			console.error('Error en la petición:', error);
		}
	};


	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
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
	
		// Validación de campos
		const requiredFields = values.especie === "perros"
			? ["nombre", "edad", "id_sexo", "id_personalidad", "id_tamano"]
			: ["nombre", "edad", "id_sexo", "id_personalidad"];
	
		for (const field of requiredFields) {
			if (!values[field as keyof FormProps]) {
				setValueAlert("Completa todos los campos del formulario");
				setAlert(true);
				setTimeout(() => setAlert(false), 2000);
				return;
			}
		}
	
		let imageUrl = values.imagen;
		// Subir imagen a Cloudinary si se ha seleccionado un archivo
		if (file && typeof file !== "string") {
			const formData = new FormData();
			formData.append("image", file);
	
			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});
	
			const data = await response.json();
			if (data.url) {
				imageUrl = data.url;
			} else {
				console.error("Error al subir la imagen");
				setValueAlert("Error al subir la imagen");
				setAlert(true);
				setTimeout(() => setAlert(false), 2000);
				return;
			}
		} else if (!file) {
			console.error("El archivo no es válido o no se ha seleccionado.");
			setValueAlert("Por favor selecciona un archivo válido");
			setAlert(true);
			setTimeout(() => setAlert(false), 2000);
			return;
		}
	
		// Crea un objeto petData con la URL de la imagen actualizada
		const petData = { ...values, imagen: imageUrl };
	
		// Ejecuta la inserción o edición con petData
		if (isEditing) {
			editPet(petData);
		} else {
			insertPet(petData);
		}
	};
	


	return (
		<form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl m-auto" onSubmit={handleSubmit}>
			<h1 className="text-center font-ramm text-2xl text-[#F6A700] mb-5">{isEditing ? "Edición" : "Registro"} de peluditos</h1>
			{/* {
				idEdit === null &&
				<div className="flex flex-col">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="sexo">Especie</label>
					<select className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md" id="id_especie" name="id_especie" onChange={handleChange} value={values.id_especie || 0} required>
						<option value={0} disabled>Selecciona el peludito</option>
						<option value={1}>Perro</option>
						<option value={2}>Gato</option>
					</select>
				</div>
			} */}

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

			{values.imagen && !editImage &&
				<div className="flex flex-col justify-center items-center mb-5">
					<img className="w-[200px] h-[200px] mb-5" src={values.imagen} alt="Imagen del peludito" />
					<button className="p-[10px] bg-[#4C62D9] text-white border-none rounded-md cursor-pointer mb-[10px]" type="button" onClick={() => { setEditImage(true) }}>Cambiar imagen</button>
				</div>
			}

			{editImage &&
				<div className="flex flex-col justify-center">
					<label className="mb-2 font-ini text-center text-[14px] text-[#333]" htmlFor="imagen">Imagen</label>
					<input
						className="p-3 mb-5 text-base border-solid border-[1px] border-[#ccc] rounded-md"
						id="imagen"
						name="imagen"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (e.target.files === null) {
								console.log("No se ha seleccionado un archivo.");
								return;
							}
							setFile(e.target.files[0]);
						}}
						type="file"
					/>
				</div>
			}

			{values.imagen && editImage &&
				/* boton para cancelar la edición de la imagen */
				<button className="bg-[#f62d00] text-white border-none rounded-md cursor-pointer w-20 h-auto px-2 -mt-2 mb-4" type="button" onClick={() => { setEditImage(false) }}>Cancelar</button>
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
			{isEditing ?
				<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Editar</button> :
				<button className="p-[10px] bg-[#F6A700] text-white border-none rounded-md cursor-pointer mb-[10px]" type="submit">Registrar</button>}
			<Link className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer mb-[10px]" href='/admin/list'>
				<button className="text-center w-full">Cancelar</button>
			</Link>
			{
				alert && <div className="text-center text-[#f62d00]">{valueAlert}</div>
			}
		</form>
	)
};