'use client';

import { useEffect, useState } from "react";
import CardImagen from "./cardImagen";
import Exito from "@/components/items/Alerts/Exito";
import Error from "@/components/items/Alerts/Error";
import { isEqual } from "lodash";


interface FormImagenesProps {
    initialData?: Array<{
        id_imagen: number;
        url: string;
    }>;
    idEdit?: number;
    imagenPrincipal?: string;
    imagenHistoria?: string;
    especie: string;
}

export const FormImagenes = ({ initialData, idEdit, imagenHistoria, imagenPrincipal, especie }: FormImagenesProps) => {
    const [numImagenes, setNumImagenes] = useState(initialData?.length || 0);
    const [editPrincipal, setEditPrincipal] = useState(imagenPrincipal ? false : true);
    const [editHistoria, setEditHistoria] = useState(imagenHistoria ? false : true);
    const [file, setFile] = useState<File>();
    const [filePrincipal, setFilePrincipal] = useState<File>();
    const [fileHistoria, setFileHistoria] = useState<File>();
    const [imagenesGaleriaData, setImagenesGaleriaData] = useState(initialData || []);
    const [nuevasImagenes, setNuevasImagenes] = useState<File[]>([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        setHasChanges(!isEqual(imagenesGaleriaData, initialData) || !isEqual(!!filePrincipal, false) || !isEqual(!!fileHistoria, false) || !isEqual(nuevasImagenes, []));
    }, [imagenesGaleriaData, initialData, filePrincipal, imagenPrincipal, fileHistoria, imagenHistoria, nuevasImagenes]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let imagenPrincipalUrl = "";
        let imagenHistoriaUrl = "";


        if (idEdit !== 0) {
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


            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updatePet/imagenes`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: idEdit,
                    especie: "perros",
                    imagenPrincipal: imagenPrincipalUrl,
                    imagenHistoria: imagenHistoriaUrl,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                if (data.status === 200) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 2000);
                } else {
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 2000);
                }
            } else {
                console.log("Error en la operación");
            }
        }

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
        setHasChanges(false);
    }

    return (
        <form className="flex font-ini flex-col w-2/3 p-4 shadow-2xl border-solid border-2 border-slate-200 rounded-xl mx-auto" onSubmit={handleSubmit}>
            {success &&
                <Exito mensaje="Imagenes actualizadas correctamente" />
            }
            {error &&
                <Error mensaje="Error al actualizar las imagenes" />
            }
            <h1 className="text-center font-ramm text-2xl text-[#F6A700] mb-5">Imagenes</h1>
            <div className="flex justify-center items-center gap-8 w-full">
                <div className="flex flex-col justify-center">
                    <CardImagen especie={especie} imagen={imagenPrincipal} editImage={editPrincipal} setEditImage={setEditPrincipal} file={filePrincipal} setFile={setFilePrincipal} tipo="principal" id={idEdit} />
                </div>
                <div className="flex flex-col justify-center">
                    <CardImagen especie={especie} imagen={imagenHistoria} editImage={editHistoria} setEditImage={setEditHistoria} file={fileHistoria} setFile={setFileHistoria} tipo="historia" id={idEdit} />
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
                <div className={`flex justify-center items-center gap-4 ${imagenesGaleriaData[0] ? "mb-3" : ""}  flex-wrap`}>
                    {imagenesGaleriaData.map((imagen, index) => (
                        <div key={index} className="flex flex-col justify-center gap-4 mt-4">
                            <CardImagen imagen={imagen.url} tipo="galeria" setFile={setFile} file={file} especie={especie} id={imagen.id_imagen} />
                        </div>
                    ))}

                </div>

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
            <div className="flex justify-center items-center gap-4 mt-4">
                <button className="p-[10px] bg-[#F6A700] w-[400px] text-white border-none rounded-md cursor-pointer mb-[10px] disabled:bg-gray-300 disabled:cursor-not-allowed" type="submit" disabled={!hasChanges}>Guardar</button>
            </div>
        </form>
    );
};

export default FormImagenes;
