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
                    <div>
                        <img src="https://res.cloudinary.com/dpsgova0s/image/upload/v1731277291/logo_morado_naranja_u5mnrk.png" alt="Logo de la empresa" style="width: 100px; height: 100px; margin: 0 auto; display: block;">
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