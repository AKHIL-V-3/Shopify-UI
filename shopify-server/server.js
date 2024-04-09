const express = require('express');
const cors = require('cors');
const { createRequestHandler } = require('@remix-run/node');
const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: 'app-shopping',
    apiKey: 'a5686c46f479e144e5f21ea5e15e63a6',
    password: 'ca981a88dfa6247d55896dd6204972e7',
    apiVersion: '2024-04',
});

const app = express();

app.use(cors());


// const shopify = new Shopify({
//     shopName: 'your-shop-name',
//     apiKey: 'your-api-key',
//     password: 'your-api-password',
//     apiVersion: '2024-04', 
//   });

//   shopify.order.list({ status: 'any' })
//     .then(orders => console.log(orders,'==============='))
//     .catch(error => console.error('Error fetching orders:', error));




app.get('/api/orders', async (req, res) => {
    try {

        console.log(shopify,'ssssssssssssssssss')


        shopify.order.count({ status: 'any' })
            .then(count => {
                if (count > 0) {
                    console.log('There are orders in the store');
                } else {
                    console.log('There are no orders in the store');
                }
            })
            .catch(error => {
                console.error('Error fetching order count:', error);
            });

        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

app.all(
    '*',
    createRequestHandler({
        getLoadContext() {
            return {};
        },
    })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
