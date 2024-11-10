"use client"

import { useState } from "react";

export default function Cloudinary() {
    const [file, setFile] = useState<File | string>("");

    return (
        <div>
            <h1>Subir imagen a Cloudinary</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData();
                formData.append('image', file);

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });


                const data = await response.json();
                console.log(data);
            }}>
                <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files === null) {
                        console.log("No se ha seleccionado un archivo.");
                        return;
                    }
                    setFile(e.target.files[0])
                }}
                />
                <button type="submit">Subir imagen</button>
            </form>
        </div>
    );
} 