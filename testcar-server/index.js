const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
const cookieperser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

// middleware

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieperser());

// Custom middleware
const logger = (req, res, next)=>{
    console.log(req.method, req.url);
    next();
}
const verifyToken = (req, res, next)=>{
    const token = req?.cookies?.token;
    console.log(token)
    if(!token){
        return res.status(401).send({message: 'Unauthorized access!'});

    }
    jwt.verify(token, process.env.TOKEN, (error, decoded)=>{
        if(error){
            return res.status(401).send({message : 'Unauthorized'})
        }
        req.user = decoded;
        next();
    })
    
    
}

// mongodb connnection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.g6z9mma.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const serviceCollection = client.db('cardoctor').collection('services');
    const bookedOrderCollection = client.db('cardoctor').collection('bookedorder');
    app.get('/service', async(req, res)=>{
        console.log(req.cookies.token)
        const cursor = await serviceCollection.find({}).toArray();
        res.send(cursor);
        });
    app.get('/service/:id', async(req, res)=>{
        
        const id = req.params.id;
        const query = {_id : new ObjectId(id)}
        const result = await serviceCollection.findOne(query);
        res.send(result);
    });
    app.post('/bookedService', async(req, res)=>{
        const bookedService = req.body;
        const result = await bookedOrderCollection.insertOne(bookedService);
        res.send(result)
    });
    app.get('/bookedService', verifyToken, async(req, res)=>{
        
        let query = {}
        if(req.query?.email){
            query = {email : req.query.email}
        }
        const result = await bookedOrderCollection.find(query).toArray();
        res.send(result)
    });

    app.post('/jwt', async(req, res)=>{
        const user = req.body;
        const token = jwt.sign(user, process.env.TOKEN, {
            expiresIn: '1h'
        });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
            // sameSite: 'none' for production site and sameSite: 'lax' for localhost
        })
        .send({success: true});
    })
    // clear cookies when logout
    app.post('/logout', async(req, res)=>{
        const user = req.body;
        res.clearCookie('token', {maxAge: 0}).send({success: true})
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, ()=>{
    console.log(`Server is running on Port :  ${port}`);
})