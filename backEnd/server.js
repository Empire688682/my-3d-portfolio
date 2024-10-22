import express from 'express';
import cors from 'cors';

//app config
const app = express();
const port = 600;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("App running");
});

// POST route to handle form submissions
app.post("/submit",(req,res)=>{
    const {name, email, subject, message} = req.body;
    console.log('Form submitted:', { name, email, subject, message });
    res.json({success:true, message:"form submitted successful"});
})

// Start the server
app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
})