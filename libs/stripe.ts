import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRE_KEY ?? "", {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Spotify Clone Video",
    version: "0.1.0",
  },
});
