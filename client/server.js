import express from "express"
import cors from "cors";
import pkg from "pg";

const {Pool} = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "ecommerce",
    password : "postee",
    port : 5432
});


app.get("/api/products", async (req,res)=>{
    try{
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
    }catch(err){
        console.error("Error querying PostgreSQL:",err.message);
        res.state(500).json({error: "Failed to fetch products"});
    }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching product with ID:", err.message);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.post("/addUser",async(req,res)=>{
  const { name, email, username, password, confirm_password } = req.body;

    if (!name || !email || !username || !password || !confirm_password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if(password !== confirm_password){
    return res.status(400).json({error: "password do not match"});
  }

  try{
    const userExists = await pool.query("SELECT * FROM USERS WHERE username = $1",[username]);
    if(userExists.rows.length>0){
      return res.status(400).json({error: "Username already Exists"});
    }

    const newUser = await pool.query("Insert INTO USERS(name,username,email,password) values($1,$2,$3,$4) RETURNING *",[name,username,email,password]);
    res.status(201).json({message:"User registered",user : newUser.rows[0]});
  }
  catch(err){
    console.error(err.message);
    res.status(500).json({error : "Server error"});
  }
});

app.post("/logUser", async(req,res)=> {
   const {email,password} = req.body;

   if(!email || !password){
    return res.status(400).json({error: "All fields are required"});
   }
 
   try{
    const result = await pool.query("SELECT * FROM USERS WHERE email = $1 AND password = $2",[email,password]);
    if(result.rows.length>0){
      // Auth sucess, return user info
      const user = result.rows[0];
      res.json({success: true,user});
    }else{
      res.json({success: false, message: "Invalid credentials"});
    }
   }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: "Database error"});
   }

});

app.post("/api/cart/add", async(req,res)=>{
  const {user_id, product_id, quantity} = req.body;
   try{
    const result = await pool.query("INSERT INTO user_products(user_id,product_id,quantity) VALUES($1,$2,$3)",[user_id,product_id,quantity])
    res.status(200).json({message: "Product added to cart succesfully!"});
    console.log(result);
   }catch(err){
    console.error(err);
    res.status(500).json({error: "Failed to add product to cart"});
   }
});


app.get("/api/cart/:userID", async(req,res) => {
  const userID = req.params.userID;

  try{
    const result = await pool.query(
      "SELECT p.*, up.quantity FROM products p JOIN user_products up ON p.id = up.product_id WHERE up.user_id = $1",[userID]);
      res.status(200).json(result.rows);
  }catch(error){
    console.error("error fetching cart items:", error.message);
    res.status(500).json({error: "failed to fetch cart items"});
  }
});

app.listen(5000,()=>{
    console.log("Server running on http://localhost:5000");
})