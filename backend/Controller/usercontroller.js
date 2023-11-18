
const productSchema=require("../Model/productsdb")
const Razorpay = require("razorpay");
const userSchema=require("../Model/usersdb")
const Joi = require('joi'); 
const bcrypt = require('bcrypt');

const jwt=require("jsonwebtoken")
const { Model, Schema } = require("mongoose");



// Validation schema for user registration
const registerValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Validation schema for user login
const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
//order validation schema
const orderValidationSchema = Joi.object({
  price: Joi.number().required(),
});



//register
// const register = async(req,res)=>{
//     console.log(req.body);
//     await userSchema.insertMany({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password
//     })
//     res.json("user registered")
// }




const register = async (req, res) => {
  try {
    const { error } = registerValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
//password hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    
    await userSchema.insertMany({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    res.json("User registered successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};


//login

// const userLogin = async (req, res) => {
//     try {
//       const login = await userSchema.findOne({ email: req.body.email });
  
//       if (login && login.email === req.body.email && login.password === req.body.password) {
//         const token = jwt.sign({ email: login.email }, "secret-key");
//         res.cookie("token", token);
//         res.json({ message: "User logged in successfully" });
//         return;
//       }
  
//       res.status(401).json({ error: "Wrong password or email" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Server error" });
//     }
//   };

 
  

const userLogin = async (req, res) => {
  try {
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const login = await userSchema.findOne({ email: req.body.email });

    if (login && login.email === req.body.email) {
      const passwordMatch = await bcrypt.compare(req.body.password, login.password);
      if (passwordMatch) {
        const token = jwt.sign({ email: login.email }, "secret-key");
        res.cookie("token", token);
        res.json({ message: "User logged in successfully", userID: login._id });
        return;
      }
    }

    res.status(401).json({ error: "Wrong password or email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};



const allProducts = async (req, res) => {
  try {
    const allProducts = await productSchema.find();
    res.json({data: allProducts});
  } catch (err) {
    res.json("error");
  }
};



// specific products

const specificproduct=async(req,res)=>{
try{
const productid=await productSchema.findById(req.params.id)
if(!productid){
  res.json({message:"product not found"})
}
res.json(productid)
}catch(error){
res.json({message:"server error"})
}
}





// const categorydata = async (req, res) => {
//   const categoryList = req.params.category;
//   // console.log(categoryList);
//   try {
  
//     if (categoryList == "nike") {
//       const findproduct = await productSchema.find({ category: { $in: "nike" } });
//       return res.json(findproduct);
//     }else {
//       res.status(404).json("not found the category");
//     }
//   } catch (error) {
//     console.log(err);
//     res.status(500).json("Server Error");
//   }
// };


const categorydatas = async(req,res)=>{
  const categorytype=req.params.category;
  try{
    if(categorytype=="men"){
      const findproduct = await productSchema.find({category:{$in:"men"}});
      return res.json(findproduct)
    }else{
      res.status(404).json("not found the category")
    }
  }catch(error){
  res.status(500).json("server error")
}

}

const addTocart = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await userSchema.findById(userID)
    if (!user) {
      return res.json({ message: "user not found" });
    }

    const { productId } = req.body
    const product = await productSchema.findById(productId);

    if (!product) {
      return res.json({ message: "product not found" });
    }

    await userSchema.findByIdAndUpdate(userID, { $addToSet: { cart: { product: productId } } });

    res.json({ message: "Product added to the cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







const getCart = async (req, res) => {
  try {
    
const userID=req.params.id
    const user = await userSchema.findById(userID).populate('cart.product')

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartItems = user.cart;

    res.status(200).json({ message: "Your cart products", cart: cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", error: error.message });
  }
};





const removeCart = async (req, res) => {
  try {
    const userID = req.params.id;
    const productId = req.params.product

    // const token = req.cookies.token;
    // const verified = jwt.verify(token, "secret-key");

    const user = await userSchema.findById(userID);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }

    await userSchema.findByIdAndUpdate(userID, { $pull: { cart: { product: productId } } });

    res.status(200).json({ message: "Product removed from your cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

// updateCartItemQuantity: async (req, res) => {
  const updateCartItemQuantity = async (req, res) => {
    // Extracting userID, id (cart item id), and quantityChange from request body
    const userID = req.params.id;
    console.log(userID)
    const { id, quantityChange } = req.body;
    console.log(id, quantityChange)
  
    // Find the user by ID
    const user = await userSchema.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Update the quantity of the specified cart item
    const updatedCart = (user.cart.id(id).quantity += quantityChange);
  
    // If the updated quantity is greater than 0, save the user document
    if (updatedCart > 0) {
      await user.save();
    }
  
    // Respond with a success message and the updated cart data
    res.status(200).json({
      status: 'success',
      message: 'Cart item quantity updated',
      data: user.cart
    });
  };
  






  //addtowishlist
  const addToWishlist = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await productSchema.findById(productId);
      console.log(product);
      if (!product) {
        return res.json({ message: "Product not found" });
      }
  
      const token = req.cookies.token;
      const decoded = jwt.verify(token, "secret-key");
      
      const user = await userSchema.findOne({ email: decoded.email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.wishlist.push(product);
      await user.save();
  
      res.json({ message: "Product added to the wish list" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //getwishlist

  const getWishlist = async (req, res) => {
    try {
      const token = req.cookies.token;
      const verified = jwt.verify(token, "secret-key");
  
      const user = await userSchema.findOne({ email: verified.email });
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      const wishlistItems = user.wishlist;
      res
        .status(200)
        .json({ message: "your wishlist items", wishlist: wishlistItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error", error: error.message });
    }
  };
  
  //remove wishlist
  const removeWishlist = async (req, res) => {
    try {
      const productId = req.params.id;
      const token = req.cookies.token;
      const verified = jwt.verify(token, "secret-key");
  
      const user = await userSchema.findOne({ email: verified.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const index = user.wishlist.indexOf(productId);
      if (index == 1) {
        return res.status(404).json({ message: "Product not found in wishlist" });
      }
  
      user.wishlist.splice(index, 1);
      await user.save();
  
      res.status(200).json({ message: "Product removed from your wishlist" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error", message: error.message });
    }
  };


  // const orderProducts = async (req, res) => {
  //   try {
  //     const productId = req.params.id;
  //     const product = await productSchema.findById(productId);
  //     if (!product) {
  //       return res.status(404).json({ message: "product not found" });
  //     }
  //     const token = req.cookies.token;
  //     const verified = jwt.verify(token, "secret-key");
  //     const user = await userSchema.findOne({ email: verified.email });
  
  //     const orderDate = new Date();
  //     const { price } = product;
  
  //     if (price !== req.body.price) {
  //       return res
  //         .status(400)
  //         .json({ message: "THe entered price does not mach the product price" });
  //     }
  
  //     const instance = new Razorpay({
  //       key_id: "rzp_test_lcdp3oIEzg2qkR",
  //       key_secret: "elHVCagf8LjkX7AEhQL194tM",
  //     });
  
  //     const order = await instance.orders.create({
  //       amount: price * 100,
  //       currency: "INR",
  //       receipt: "Receipt",
  //     });
  
  //     user.orders.push({
  //       product: productId,
  //       orderId: order.id,
  //       payment: price,
  //       orderDate,
  //     });
  //     await user.save();
  //     res.status(200).json({ message: "payment successfull....order comfirmed" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ message: "server error" });
  //   }
  // };

  
  const orderProducts = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await productSchema.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // const token = req.cookies.token;
      // const verified = jwt.verify(token, 'secret-key');
      // const user = await userSchema.findOne({ email: verified.email });
  
      const orderDate = new Date();
      const { price } = product;
  
      // Validate req.body using the Joi schema
      const { error } = orderValidationSchema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
    
      if (price !== req.body.price) {
        return res.status(400).json({ message: 'The entered price does not match the product price' });
      }
  
      const instance = new Razorpay({
        key_id: 'rzp_test_lcdp3oIEzg2qkR',
        key_secret: 'elHVCagf8LjkX7AEhQL194tM',
      });
  
      const order = await instance.orders.create({
        amount: price * 100,
        currency: 'INR',
        receipt: 'Receipt',
      });
  
      user.orders.push({
        product: productId,
        orderId: order.id,
        payment: price,
        orderDate,
      });
      await user.save();
  
      res.status(200).json({ message: 'Payment successful. Order confirmed' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  



module.exports={register,
    userLogin,
    allProducts,
    specificproduct,
    categorydatas,
    addTocart,
    getCart,
    removeCart,
    addToWishlist,
    getWishlist,
    removeWishlist,
    updateCartItemQuantity,
    orderProducts
  }