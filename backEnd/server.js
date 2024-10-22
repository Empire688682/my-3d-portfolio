import express from 'express';
import cors from 'cors';

//app config
const app = express();
const port = 600;

//app middleware
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("App running");
});

app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
})