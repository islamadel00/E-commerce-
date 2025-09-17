import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Cart } from '@/interfaces/cart.interface';

// Check if Stripe key is available
const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
  console.warn('STRIPE_SECRET_KEY not found in environment variables');
}

const stripe = stripeKey ? new Stripe(stripeKey, {
  apiVersion: '2025-08-27.basil',
}) : null;

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const { cart }: { cart: Cart } = await request.json();

  try {
    const lineItems = cart.products.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.product.title,
          images: [item.product.imageCover],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.count,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/payment`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    return new NextResponse((error as Error).message, {
      status: 400,
    });
  }
}