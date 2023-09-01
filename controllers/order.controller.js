const Order = require('../models/order.model');
const Product = require('../models/product.model');


const placeOrder = async (req, res) => {
  try {
    const { products } = req.body;
    const userId = req.user.userId; 

    const productIds = products.map((product) => product.productId);
    const existingProducts = await Product.find({ _id: { $in: productIds } });

    if (existingProducts.length !== productIds.length) {
      return res.status(400).json({ success: false, error: 'One or more products not found' });
    }

    const totalPrice = products.reduce((total, product) => {
      const matchingProduct = existingProducts.find((p) => p._id.toString() === product.productId);
      return total + matchingProduct.price * product.quantity;
    }, 0);

    const newOrder = new Order({ userId, products, totalPrice });

    await newOrder.save();

    res.status(201).json({ success: true, message: 'Order placed successfully', data: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};


const getOrderHistory = async (req, res) => {
  try {
    const userId = req.user.userId; d

    const orders = await Order.find({ userId });

    res.json({ success: true, message: 'Order history retrieved successfully', data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.user.userId; 

    const order = await Order.findOne({ _id: orderId, userId });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.json({ success: true, message: 'Order details retrieved successfully', data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports = {
  placeOrder,
  getOrderHistory,
  getOrderDetails,
};
