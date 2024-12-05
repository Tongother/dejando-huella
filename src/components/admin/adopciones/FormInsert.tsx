'use client';
import { FormEvent, useState, ChangeEvent, useEffect, useRef } from "react";
import axios from "axios";
import { isEqual } from "lodash";
import Exito from "@/components/items/Alerts/Exito";
import Error from "@/components/items/Alerts/Error";
import CardImagen from "./cardImagen";
import Image from "next/image";


interface FormProps {
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


export const FormInsertPets = ({ especie }: { especie: string }) => {
    const [numImagenes, setNumImagenes] = useState(0);
    const [editPrincipal, setEditPrincipal] = useState(true);
    const [editHistoria, setEditHistoria] = useState(true);
    const [file, setFile] = useState<File>();
    const [filePrincipal, setFilePrincipal] = useState<File>();
    const [fileHistoria, setFileHistoria] = useState<File>();
    const [nuevasImagenes, setNuevasImagenes] = useState<File[]>([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState(false);
    const [valueAlert, setValueAlert] = useState('');
    const [values, setValues] = useState({
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
    const [hasChanges, setHasChanges] = useState(false); // Nuevo estado para detectar cambios
    const [insertando, setInsertando] = useState(false);


    useEffect(() => {
        // Detectar cambios en el formulario
        setHasChanges(!isEqual(values, {
            especie: especie,
            nombre: '',
            edad: 0,
            id_sexo: 0,
            id_personalidad: 0,
            id_tamano: 0,
            adoptado: false,
            historia: '',
        }) || nuevasImagenes.length > 0 || filePrincipal instanceof File || fileHistoria instanceof File);

    }, [values]);

    useEffect(() => {
        const getPersonalidades = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros/personalidades`);
            const data = await res.json();
            setPersonalidades(data);
        };
        getPersonalidades();
    }, []);


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

    const handleSubmit = async () => {
        let imagenPrincipalUrl = "";
        let imagenHistoriaUrl = "";
        setInsertando(true);
        try {
            if (filePrincipal instanceof File) {
                console.log("filePrincipal", filePrincipal);
                const formData = new FormData();
                formData.append("image", filePrincipal);
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
                    method: "POST",
                    body: formData,
                });
                const data = await res.json();
                imagenPrincipalUrl = data.url;
            }

            if (fileHistoria instanceof File) {
                console.log("fileHistoria", fileHistoria);
                const formData = new FormData();
                formData.append("image", fileHistoria);
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
                    method: "POST",
                    body: formData,
                });
                const data = await res.json();
                imagenHistoriaUrl = data.url;
            }

            const petData = {
                datosTexto: values,
                imagenPrincipal: imagenPrincipalUrl,
                imagenHistoria: imagenHistoriaUrl,
            };

            const response = await axios.post('/api/insertPet', petData, {
                headers: { 'Content-Type': 'application/json' }
            });
            const idEdit = response.data;
            console.log("idEdit", idEdit);

            if (nuevasImagenes.length !== 0) {
                nuevasImagenes.forEach(async (imagen) => {
                    if (imagen === undefined) return;
                    const formData = new FormData();
                    formData.append("image", imagen);
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
                        method: "POST",
                        body: formData,
                    });
                    const data = await res.json();

                    try {
                        const res2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/insertPet/imagenes`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: idEdit,
                                especie: especie,
                                url: data.url,
                            }),
                        });
                    } catch (error) {
                        console.log("Error al insertar la imagen", error);
                    }
                }
                );
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
        setSuccess(true);

        setTimeout(() => {
            window.location.href = `/admin/list/${especie}`;
        }, 1500);

    };

    useEffect(() => {
        const target = textAreaRef.current;
        if (target) {
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
        }
    }, [values.historia]);

    return (
        <div className="flex gap-4 items-start">
            <form className="flex font-ini flex-col w-[500px] p-[20px] shadow-2xl border-solid border-2 border-slate-200 rounded-xl m-auto" onSubmit={handleSubmit}>
                <h1 className="text-center font-ramm text-2xl text-[#F6A700] mb-5">Registro de peluditos</h1>

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
            </form>

            <form className="flex font-ini flex-col w-2/3 p-4 shadow-2xl border-solid border-2 border-slate-200 rounded-xl mx-auto">
                <h1 className="text-center font-ramm text-2xl text-[#F6A700] mb-5">Imagenes</h1>
                <div className="flex justify-center items-center gap-8 w-full">
                    <div className="flex flex-col justify-center">
                        <CardImagen especie={especie} editImage={editPrincipal} setEditImage={setEditPrincipal} file={filePrincipal} setFile={setFilePrincipal} tipo="principal" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <CardImagen especie={especie} editImage={editHistoria} setEditImage={setEditHistoria} file={fileHistoria} setFile={setFileHistoria} tipo="historia" />
                    </div>
                </div>


                <label className="mb-2 font-ini text-center text-[14px] text-[#333] mt-10" htmlFor="imagen">Galería de imagenes</label>
                <div className="flex flex-row-reverse">
                    <button disabled={numImagenes < 5 ? false : true} className={"bg-[#4C62D9] disabled:bg-[#a0a1a6] disabled:cursor-not-allowed w-32 h-8 text-center text-white border-none text-[12px] rounded-md cursor-pointer"} onClick={(e) => {
                        e.preventDefault();
                        setNuevasImagenes([...nuevasImagenes, file as File]);
                        setNumImagenes(numImagenes + 1);
                    }}>Agregar imagen </button>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
                    <div className="flex justify-center gap-4 flex-wrap w-full">
                        {nuevasImagenes.map((imagen, index) => (
                            <div key={index} className="flex flex-col justify-between gap-4 items-center mb-3 mt-3">
                                <CardImagen especie={especie} tipo="galeria" setNuevasImagenes={setNuevasImagenes} nuevasImagenes={nuevasImagenes} editImage={true} index={index} />
                                <button className="bg-[#f62d00] text-white border-none bg-transparent cursor-pointer h-auto p-0 m-0" type="button" title="Eliminar imagen" onClick={(e) => {
                                    e.preventDefault();
                                    setNuevasImagenes(nuevasImagenes.filter((img, i) => i !== index))
                                    setNumImagenes(numImagenes - 1);
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                                        <g fill="#cd0000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"><g transform="scale(5.12,5.12)"><path d="M21,2c-1.64545,0 -3,1.35455 -3,3v2h-10c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h1v36c0,1.654 1.346,3 3,3h26c1.654,0 3,-1.346 3,-3v-36h1c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-10v-2c0,-1.64545 -1.35455,-3 -3,-3zM21,4h8c0.55455,0 1,0.44545 1,1v2h-10v-2c0,-0.55455 0.44545,-1 1
                                ,-1zM19,14c0.552,0 1,0.448 1,1v25c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-25c0,-0.552 0.448,-1 1,-1zM25,14c0.552,0 1,0.448 1,1v25c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-25c0,-0.552 0.448,-1 1,-1zM31,14c0.553,0 1,0.448 1,1v25c0,0.553 -0.447,1 -1,1c-0.553,0 -1,-0.447 -1,-1v-25c0,-0.552 0.447,-1 1,-1z"></path></g></g>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </form>

            {insertando &&
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md w-[250px]">
                        {success ? (
                            <div className="flex flex-col justify-center items-center">
                                <Image src="/gifs/ok.gif" width={50} height={50} alt="Exito" priority/>
                                <p className="text-[#333] text-sm font-ini">Mascota registrada con éxito</p>
                            </div>
                        )
                            :
                            (
                                <div className="flex flex-col justify-center items-center">
                                    <Image src="/gifs/cargando.gif" width={50} height={50} alt="Cargando..." priority/>
                                    <p className="text-[#333] text-sm font-ini">Insertando mascota...</p>
                                </div>
                            )}
                    </div>
                </div>
            }
            <button className="bg-[#F6A700] w-64 h-12 text-center text-white border-none text-base rounded-md cursor-pointer fixed bottom-8 right-8 disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={handleSubmit} disabled={!hasChanges}>Guardar</button>
            {error && <Error mensaje="Error al registrar la mascota" />}
        </div>
    )
}