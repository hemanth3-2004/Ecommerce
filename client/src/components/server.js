import express from "express"
import cors from "cors";
import pkg from "pg";

const {Pool} = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
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


app.listen(5000,()=>{
    console.log("Server running on http://localhost:5000");
})