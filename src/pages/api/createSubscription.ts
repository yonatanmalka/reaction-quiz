import { NextApiRequest, NextApiResponse } from 'next';
import stripe, { FOUR_WEEK_TRIAL, ONE_WEEK_MONTH_SUBSCRIPTION, ONE_WEEK_TRIAL } from "@/utils/stripe";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { customerId, priceId } = req.body;

        try {
            const subscription = await stripe.subscriptions.create({
                customer: customerId,
                items: [{ price: priceId }],
                add_invoice_items: [{ price: priceId === ONE_WEEK_MONTH_SUBSCRIPTION ? ONE_WEEK_TRIAL : FOUR_WEEK_TRIAL }],
                trial_period_days: priceId === ONE_WEEK_MONTH_SUBSCRIPTION ? 7 : 28,
                expand: ['latest_invoice.payment_intent'],
            });

            res.status(200).json({
                subscriptionId: subscription.id,
                customerId: customerId,
                message: 'Subscription Created Successfully'
            });
        } catch (error: any) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
