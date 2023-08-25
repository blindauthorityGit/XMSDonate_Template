export const initialOptions = {
    "client-id": JSON.parse(process.env.NEXT_PUBLIC_DEV)
        ? process.env.NEXT_PUBLIC_PAYPAL_TEST
        : process.env.NEXT_PUBLIC_PAYPAL_LIVE,
    currency: "EUR",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
};
