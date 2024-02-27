import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const receiveCustomer = await fetch(`https://api.customer.io/v1/customers?email=${email}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}`
        }
      })

      const customer = await receiveCustomer.json()
      const customerId = customer.results[0].cio_id

      const receiveCustomerAttr = await fetch(`https://api.customer.io/v1/customers/${customerId}/attributes`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}`
        }
      })

      const customerAttr = await receiveCustomerAttr.json()

      res.status(200).json({
        customer: customerAttr.customer,
        message: 'Subscription Created Successfully'
      })
    } catch (error: any) {
      res.status(500).json({statusCode: 500, message: error.message});
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
