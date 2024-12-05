import connectionDb from "../../../../../database/config";

interface EditProps {
    id: number | null;
    especie: string;
    imagenPrincipal?: string;
    imagenHistoria?: string;
}

export async function PUT(req: Request) {
    try {
        // Extraer datos del cuerpo de la solicitud
        const { id, especie, imagenPrincipal, imagenHistoria }: EditProps = await req.json();

        // Validar que el ID y especie sean válidos
        if (!id || !especie) {
            return new Response(JSON.stringify({ message: "ID y especie son requeridos", status: 400 }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const sql = await connectionDb();

        if (imagenPrincipal) {
            if (especie === "perros") {
                await sql`
                    UPDATE perros
                    SET imagen_principal = ${imagenPrincipal}
                    WHERE id_perro = ${id};
                `;
            } else if (especie === "gatos") {
                await sql`
                    UPDATE gatos
                    SET imagen_principal = ${imagenPrincipal}
                    WHERE id_gato = ${id};
                `;
            }
        }
        if (imagenHistoria) {
            if (especie === "perros") {
                await sql`
                    UPDATE perros
                    SET imagen_historia = ${imagenHistoria}
                    WHERE id_perro = ${id};
                `;
            } else if (especie === "gatos") {
                await sql`
                    UPDATE gatos
                    SET imagen_historia = ${imagenHistoria}
                    WHERE id_gato = ${id};
                `;
            }
        }
        sql.end();
        return new Response(JSON.stringify({ message: "Edición exitosa", status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error en la operación:", error);
        return new Response(JSON.stringify({ message: "Error en la operación", error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
