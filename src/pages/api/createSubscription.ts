import {NextApiRequest, NextApiResponse} from 'next';
import stripe from "@/utils/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {customerId, priceId} = req.body;

        try {
            // Assuming the customer has already been created and you have their ID
            // You do not need to create a customer again, just create the subscription

            // Create a new subscription for this customer with a 7-day free trial
            const subscription = await stripe.subscriptions.create({
                customer: customerId,  // Use the existing customer ID
                items: [{price: priceId}],
                trial_period_days: 7,
                // Add this line to automatically invoice and charge the payment method on file
                payment_behavior: 'default_incomplete',
                expand: ['latest_invoice.payment_intent'],
            });

            res.status(200).json({
                subscriptionId: subscription.id,
                customerId: customerId,
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
