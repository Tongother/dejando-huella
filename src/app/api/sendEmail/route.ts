import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/../config/nodemailer";

export async function POST(req: Request) {

    try{
        const { nombre, telefono, correo, asunto, mensaje } = await req.json();

        const res = await transporter.sendMail({
            ...mailOptions,
            subject: asunto,
            html: `
                <div style="backgroundColor: #F5F6FF;">
                    <div style="width: 100%; height: auto; display: flex; justify-content: center;">
                        <div style="display: flex; flex-direction: column; justify-items: center; gap: 10px">
                            <img src="https://res.cloudinary.com/dpsgova0s/image/upload/v1731277291/logo_morado_naranja_u5mnrk.png" alt="Logo de la empresa" style="width: 100px; height: 100px; margin: 0 auto; display: block;" />
                            <h2>Enviado desde la página web</h2>
                        </div>
                    </div>
                </div>
            `
        });

        console.log("Respuesta: " + res);

        return NextResponse.json({
            status: 200,
            message: "Correo enviado"
        })
    }catch(err: unknown){
        console.error(err);
        return NextResponse.json({
            status: 500,
            body: {message: "Error al enviar el correo", err: err}
        })
    }
}