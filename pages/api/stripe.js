import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51OnuMGE01LOWKWBFeqNhJnfwHPvnVQvtiLNy4ur8ikCVXFGRH7JTaH5P7RoCQqvt5cSYsM04CZ84PBozhFOQkIYx00rzBvr7Bl"
)

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: "payment",
                Payment_method_types: ['card'],
                line_items: req.body.map((item) => {
                    const img = item.image.asset._ref;

                    const newImage = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/2umrtm2g/production"
                    )
                    .replace('-jpg ', '.jpg')

                    return{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                image: [newImage],
                            },
                            unit_amount: item.price*100
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity: item.quantity,
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            };

            //CHECKOUT SESSION
            const session = await stripe.checkout.session.create(params);
            console.log(session)
            res.status(200).json(session)
        } 

        catch (error) {
            res.status(500).json(err.message)
        }

    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("method not allowed")
    }

}