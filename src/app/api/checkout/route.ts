import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({ accessToken: process.env.NEXT_ACCESS_TOKEN as string });

export async function POST(req: Request ) {

    const { title, quantity, unit_price } = await req.json();

    try {
        const preference = new Preference(client);

        const body = {
            items: [
            {
                title: title,
                quantity: quantity,
                unit_price: unit_price,
                currency_id: 'MXN',
                id: '1',
            }
            ],
            back_urls: {
                success: 'https://example.com/success',
                failure: 'https://example.com/failure',
                pending: 'https://example.com/pending',
            },
            auto_return: 'approved',
        }

        const result = await preference.create({ body });

        return NextResponse.json({ 
            status: 200,
            id: result.id 
        },{
            status: 200,
        });

    } catch (error) {
        console.error("Error creating Mercado Pago preference:", error);
        return NextResponse.json({ 
            status: 500,
        },{
            status: 500,
        });
    }
}
