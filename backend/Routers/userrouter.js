const express=require("express")
const app=express()
const bodyParser = require("body-parser");
const usercontroller=require("../Controller/usercontroller")

const verifyToken = require("../Middleware/usermiddleware")

app.use(bodyParser.json());
app.use(express.json());

app.post("/register",usercontroller.register);
app.post("/login",usercontroller.userLogin);
// app.post("/products",verifyToken,usercontroller.allProducts)
app.get("/products",usercontroller.allProducts);
app.get("/products/:id",usercontroller.specificproduct);
app.get("/products/category/:category",verifyToken,usercontroller.categorydatas)
app.post("/products/cart/:id", usercontroller.addTocart);
app.get("/cart/:id", usercontroller.getCart);
app.delete("/products/cart/:id/:product", usercontroller.removeCart);
app.put("/cart/:id",usercontroller.updateCartItemQuantity);
app.post("/products/wishlist/:id", verifyToken, usercontroller.addToWishlist);
app.get("/wishlist", verifyToken, usercontroller.getWishlist);
app.delete("/products/wishlist/:id",verifyToken,usercontroller.removeWishlist);
app.get("/order/:id/payment", usercontroller.payment);
app.get('/payment/success',usercontroller.paymentSuccess)
app.get('/payment/cancel',usercontroller.paymentCancel)
app.get('/showOrders/:id',usercontroller.showOrders)

module.exports=app;