import {NextApiRequest, NextApiResponse} from 'next';
import stripe from "@/utils/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {priceId} = req.body;

        try {
            const price: any = await stripe.prices.retrieve(priceId);

            const paymentIntent = await stripe.paymentIntents.create({
                amount: price.unit_amount,
                currency: price.currency,
            });
            
            res.status(200).json({clientSecret: paymentIntent.client_secret});
        } catch (err: any) {
            res.status(500).json({statusCode: 500, message: err.message});
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
