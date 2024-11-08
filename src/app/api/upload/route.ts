import { writeFile } from "fs";
import { NextResponse } from "next/server";
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const POST = async (req: any) => {
  console.log(req.body);
  const data = await req.formData();

  const image = await data.get("image");

  if (!image) {
    return NextResponse.json({ error: "No se ha subido ninguna imagen" }, { status: 400 });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', image.name);
  await writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error(err);
      return NextResponse.json({ error: "Error al guardar la imagen" }, { status: 500 });
    }
  });

  const response = await cloudinary.uploader.upload(filePath);
  console.log(response);

  return NextResponse.json({ url: response.secure_url });
  
}