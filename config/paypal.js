export const initialOptions = {
    "client-id": JSON.parse(process.env.NEXT_PUBLIC_PAYPAL_SANDBOX)
        ? process.env.NEXT_PUBLIC_PAYPAL_TEST
        : process.env.NEXT_PUBLIC_PAYPAL_LIVE,
    currency: "EUR",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
};
