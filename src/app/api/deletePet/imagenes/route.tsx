import { v2 as cloudinary } from 'cloudinary';
import connectionDb from '../../../../../database/config';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//TODO: Corregir eliminación de imagen en Cloudinary (a veces no se elimina porque no se encuentra el public_id)

export async function DELETE(req: Request) {
    const { id, url, especie, tipo } = await req.json();
    console.log('id:', id, 'url:', url, 'especie:', especie, 'tipo:', tipo);
    const sql = await connectionDb();


    // Extraer el public_id (nombre del archivo) de desde la URL de la imagen en Cloudinary
    const publicId = url
        .split('/')
        .slice(-1)[0]
        .replace(/\.[^/.]+$/, ''); // Obtengo el nombre del archivo sin la extensión

    // Eliminar la imagen en Cloudinary
    await cloudinary.uploader.destroy(publicId, function ( result: unknown) {
        console.log('result:', result);
    });

    try {
        // Eliminar el registro de la base de datos
        if (tipo === 'galeria') {
            switch (especie) {
                case 'perros':
                    await sql`DELETE FROM imagenes_perros WHERE id_imagen = ${id}`;
                    break;
                case 'gatos':
                    await sql`DELETE FROM imagenes_gatos WHERE id_imagen = ${id}`;
                    break;
                default:
                    break;
            }
        } else {
            switch (especie) {

                case 'perros':
                    if (tipo === 'principal') {
                        await sql`UPDATE perros SET imagen_principal = null WHERE id_perro = ${id}`;
                    }
                    if (tipo === 'historia') {
                        await sql`UPDATE perros SET imagen_historia = null WHERE id_perro = ${id}`;
                    }
                    break;
                case 'gatos':
                    if (tipo === 'principal') {
                        await sql`UPDATE gatos SET imagen_principal = null WHERE id_gato = ${id}`;
                    }
                    if (tipo === 'historia') {
                        await sql`UPDATE gatos SET imagen_historia = null WHERE id_gato = ${id}`;
                    }
                    break;
                default:
                    break;
            }
        }
        sql.end();

        return new Response(JSON.stringify({ message: 'Registro y imagen eliminados correctamente' }), { status: 200 });

    } catch (error) {
        console.error('Error al eliminar:', error);
        sql.end();
        return new Response(JSON.stringify({ message: 'Error al eliminar el registro', error }), { status: 500 });
    }
}
