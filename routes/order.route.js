const express = require('express');
const OrderRouter = express.Router();
const {placeOrder,getOrderHistory,getOrderDetails} = require('../controllers/order.controller');
const { authenticateUser } = require('../middleware/authentication.middleware');

OrderRouter.use(authenticateUser);

OrderRouter.post('/PlaceOrder', placeOrder);


OrderRouter.get('/OrderHistory', getOrderHistory);

OrderRouter.get('/:orderId', getOrderDetails);

module.exports ={OrderRouter};
