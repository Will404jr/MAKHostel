// flutterwaveModule.js

const flutterwave = {
    makePayment: () => {
        const FlutterwaveCheckout = require("flutterwave-checkout");

        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-f28949e276a305f399cd34126b8b3d87-X",
            tx_ref: "txref-DI0NzMx12",
            amount: 2500,
            currency: "UGX",
            payment_options: "",
            meta: {
                source: "docs-inline-test",
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "wjr46269@gmail.com",
                phone_number: "0785256291",
                name: "Kiku William",
            },
            customizations: {
                title: "MAKHostel",
                description: "Test Payment",
                logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
            },
        });
    },
};

module.exports = flutterwave;