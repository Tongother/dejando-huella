import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configurations.setAccessToken(process.env.NEXT_ACCESS_TOKEN as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { title, quantity, unit_price } = req.body;

    if (!title || !unit_price || !quantity) {
        return res.status(400).json({ error: "Invalid donation data" });
    }

    const URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try {
        const preference: CreatePreferencePayload = {
            items: [
                {
                    title,
                    unit_price,
                    quantity,
                },
            ],
            auto_return: "approved",
            back_urls: {
                success: `${URL}/success`,
                failure: `${URL}/failure`,
            },
            notification_url: `${URL}/api/notify`,
        };

        const response = await mercadopago.preferences.create(preference);
        res.status(200).json({ id: response.body.id });
    } catch (error) {
        console.error("Error creating Mercado Pago preference:", error);
        res.status(500).json({ error: "Failed to create preference" });
    }
}
