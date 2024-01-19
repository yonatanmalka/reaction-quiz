import {NextApiRequest, NextApiResponse} from 'next';
import stripe from "@/utils/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {email, name, priceId} = req.body;

        try {
            // Create a new Stripe customer
            const customer = await stripe.customers.create({
                email: email,
                name: name
                // Add other customer details here as needed
            });

            // Create a new subscription for this customer with a 7-day free trial
            const subscription = await stripe.subscriptions.create({
                customer: customer.id,
                items: [{price: priceId}],
                trial_period_days: 7,
            });

            res.status(200).json({
                subscriptionId: subscription.id,
                customerId: customer.id,
                message: 'Subscription Created Successfully'
            });
        } catch (error: any) {
            res.status(500).json({statusCode: 500, message: error.message});
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
