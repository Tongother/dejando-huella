import connectionDb from "../../../../../database/config";

export async function POST(req: Request) {

    const { id, especie, url }: { id: number, especie: string, url: string } = await req.json();
    const sql = await connectionDb();
    console.log(id, especie, url);
    try {
        if (especie === "perros") {
            await sql`
                INSERT INTO imagenes_perros (id_perro, url)
                VALUES (${id}, ${url});
            `;
        } else if (especie === "gatos") {
            await sql`
                INSERT INTO imagenes_gatos (id_gato, url)
                VALUES (${id}, ${url});
            `;
        }
        return new Response(JSON.stringify({ message: "Imagen insertada", status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error al insertar", status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}