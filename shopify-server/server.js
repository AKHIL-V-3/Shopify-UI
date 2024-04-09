const express = require('express');
const cors = require('cors');
const { createRequestHandler } = require('@remix-run/node');
const Shopify = require('shopify-api-node');
require('dotenv').config()





const shopify = new Shopify({
    shopName: 'app-shopping',
    apiKey: process.env.API_KEY,
    password: process.env.PASSWORD,
    apiVersion: '2024-04',
});

const app = express();

app.use(cors());

app.get('/api/orders', async (req, res) => {
    try {
        console.log(shopify,'ssssssssssssssssss')

         const { admin } = await authenticate.admin(request);

       
        await admin.rest.resources.Order.all({
            session: session,
            status: "any",
          });

        // res.json(orders);
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
