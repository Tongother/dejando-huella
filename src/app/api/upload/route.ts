import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const POST = async (req: Request) => {
  try {
    const data = await req.formData();
    const image = data.get("image");

    if (!image || !(image instanceof File)) {
      return NextResponse.json({ error: "No se ha subido ninguna imagen" }, { status: 400 });
    }

    // Convertimos la imagen a un formato base64 para enviarla a Cloudinary
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;

    // Subimos el archivo directamente a Cloudinary
    const response = await cloudinary.uploader.upload(base64Image, {
      folder: "uploads", // Puedes especificar una carpeta en Cloudinary
      public_id: image.name.split(".")[0] // Nombre sin extensión
    });

    return NextResponse.json({ url: response.secure_url });
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    return NextResponse.json({ error: "Error al subir la imagen" }, { status: 500 });
  }
};
