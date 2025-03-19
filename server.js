const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');

const app = express();
// const allowedOrigins =["frontend-41wmzed4x-prajwalhublis-projects.vercel.app","frontend-beta-eight-67.vercel.app"]

app.use(
    cors({
        origin: "https://backend1-fu4n.onrender.com" // Allows cookies and authentication headers
        })
);
 
// middleware
app.use(cors())
app.use(express.json())

connectDB()
// app.use("/auth",require('./routes/authRoutes'))
app.use("/auth",router)
app.use("/cart",cartrouter)
app.get('/',(req,res)=>{
    res.send('hello, world!')
})

const port = 5000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
