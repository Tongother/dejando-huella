'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface CardImagenProps {
    imagen?: string;
    editImage?: boolean;
    setEditImage?: React.Dispatch<React.SetStateAction<boolean>>;
    setFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
    file?: File | undefined;
    setNuevasImagenes?: React.Dispatch<React.SetStateAction<File[]>>;
    nuevasImagenes?: File[];
    index?: number;
    tipo: string;
    especie: string;
    id?: number;

}

export const CardImagen = ({ imagen, tipo, file, setFile, editImage, setEditImage, especie, id, setNuevasImagenes, nuevasImagenes, index }: CardImagenProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const deleteImageGaleria = async (url: string, id: number, tipo: string, especie: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deletePet/imagenes`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url,
                id,
                especie,
                tipo,
            }),
        });

        if (res.ok) {
            window.location.reload();
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const droppedFile = files[0];
            if (setFile) {
                setFile(droppedFile);
            }
            if (setNuevasImagenes && nuevasImagenes) {
                const nuevasImagenesActualizadas = [...nuevasImagenes];
                nuevasImagenesActualizadas[index as number] = droppedFile;
                setNuevasImagenes(nuevasImagenesActualizadas);
            }
            e.dataTransfer.clearData();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            if (setFile) {
                setFile(e.target.files[0]);
            }
            if (setNuevasImagenes && nuevasImagenes) {
                const nuevasImagenesActualizadas = [...nuevasImagenes];
                nuevasImagenesActualizadas[index as number] = e.target.files[0];
                setNuevasImagenes(nuevasImagenesActualizadas);
            }
        }
    };



    const renderPreview = () => {
        if (file instanceof File) {
            return (
                <Image
                    src={URL.createObjectURL(file)}
                    alt={`Imagen ${tipo}`}
                    width={150}
                    height={150}
                    className="rounded-md w-auto"
                />
            );
        } else if (nuevasImagenes && nuevasImagenes[index as number] instanceof File) {
            return (
                <Image
                    src={URL.createObjectURL(nuevasImagenes[index as number])}
                    alt={`Imagen ${tipo}`}
                    width={150}
                    height={150}
                    className="rounded-md w-auto"
                />
            );
        }
        else {
            return (
                <div className='flex flex-col justify-center items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 4 5 C 2.895 5 2 5.895 2 7 L 2 23 C 2 24.105 2.895 25 4 25 L 14.230469 25 C 14.083469 24.356 14 23.688 14 23 C 14 22.662 14.021594 22.329 14.058594 22 L 5 22 L 5 15 L 7.2890625 12.710938 C 8.2340625 11.765937 9.7659375 11.765937 10.710938 12.710938 L 15.720703 17.720703 C 17.356703 15.469703 20.004 14 23 14 C 24.851 14 26.57 14.559578 28 15.517578 L 28 7 C 28 5.895 27.105 5 26 5 L 4 5 z M 23 8 C 24.105 8 25 8.895 25 10 C 25 11.105 24.105 12 23 12 C 21.895 12 21 11.105 21 10 C 21 8.895 21.895 8 23 8 z M 23 16 C 19.134 16 16 19.134 16 23 C 16 26.866 19.134 30 23 30 C 26.866 30 30 26.866 30 23 C 30 19.134 26.866 16 23 16 z M 23 19 C 23.552 19 24 19.447 24 20 L 24 22 L 26 22 C 26.552 22 27 22.447 27 23 C 27 23.553 26.552 24 26 24 L 24 24 L 24 26 C 24 26.553 23.552 27 23 27 C 22.448 27 22 26.553 22 26 L 22 24 L 20 24 C 19.448 24 19 23.553 19 23 C 19 22.447 19.448 22 20 22 L 22 22 L 22 20 C 22 19.447 22.448 19 23 19 z"></path>
                    </svg>
                    <p className="text-gray-500 text-center">Arrastra y suelta tu imagen aquí</p>
                    <p className="text-gray-500 text-center mb-2">o</p>
                    <button
                        className="w-auto rounded-md bg-gray-200 p-2 hover:bg-gray-300 cursor-pointer"
                        onClick={() => inputRef.current?.click()}
                        type='button'
                    >
                        Selecciona un archivo
                    </button>
                </div>);
        }
    };

    return (
        <div className="w-64 h-[350px] p-6 gap-4 flex flex-col items-center justify-center rounded-md shadow-md">
            <label className="mb-2 font-ini text-center text-[14px] text-[#333]">
                Imagen {tipo}
            </label>

            {editImage ? (
                <div className='flex flex-col justify-center items-center'>
                    <div
                        className={`p-6 border-2 border-dashed ${isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
                            } flex flex-col items-center justify-center rounded-md p-4 gap-4`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {renderPreview()}
                        <input
                            type="file"
                            accept={tipo === 'historia' ? '.png' : 'image/*'}
                            hidden
                            onChange={(e) => handleFileChange(e)}
                            ref={inputRef}
                        />




                    </div>
                    {imagen && setEditImage &&
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer flex gap-4 h-10 items-center justify-center"
                                type="button"
                                onClick={() => {
                                    setEditImage(false);
                                    if (setFile) {
                                        setFile(undefined);
                                    }
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    }
                </div>


            ) : (
                <div className='flex flex-col justify-center items-center'>
                    {imagen &&
                        <Image src={imagen} alt={`Imagen ${tipo}`} width={150} height={150} className="rounded-md" />
                    }
                    <div className="flex justify-center gap-4 mt-4">
                        {setEditImage && (

                            <button
                                className="p-[10px] bg-[#4C62D9] text-white border-none rounded-md cursor-pointer flex gap-4 h-10 items-center justify-center"
                                type="button"
                                onClick={() => setEditImage(true)}
                            >
                                Cambiar
                            </button>
                        )}

                        {imagen && id &&
                            <button
                                className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer flex gap-4 h-10 items-center justify-center"
                                type="button"
                                onClick={() => setConfirmDelete(true)}
                            >
                                Eliminar
                            </button>
                        }

                        {confirmDelete && imagen && id && (
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-4 rounded-md shadow-md">
                                    <p className="text-center">¿Estás seguro de que deseas eliminar esta imagen?</p>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <button
                                            className="p-[10px] bg-[#f62d00] text-white border-none rounded-md cursor-pointer flex gap-4 h-10 items-center justify-center"
                                            type="button"
                                            onClick={() => deleteImageGaleria(imagen, id, tipo, especie)}
                                        >
                                            Sí, estoy seguro
                                        </button>
                                        <button
                                            className="p-[10px] bg-[#4C62D9] text-white border-none rounded-md cursor-pointer flex gap-4 h-10 items-center justify-center"
                                            type="button"
                                            onClick={() => setConfirmDelete(false)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )
            }

        </div>
    );
};

export default CardImagen;