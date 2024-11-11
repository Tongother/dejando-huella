import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/../config/nodemailer";
import Template from "@/components/email/template";
import { render } from "@react-email/render";

export async function POST(req: Request) {

    try{
        const { nombre, telefono, correo, asunto, mensaje } = await req.json();

        const renderEmail = async() => {
            const emailHtml = await render(Template({nombre, telefono, correo, mensaje}));
            return emailHtml;
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: asunto,
            html: await renderEmail()
        });

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