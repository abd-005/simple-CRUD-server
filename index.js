const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// simpleDBUser
// q8UtWfvLMVzQawfA

const uri = "mongodb+srv://simpleDBUser:q8UtWfvLMVzQawfA@cluster0.ljdyez8.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/',(req,res)=>{
    res.send('CRUD server is Running');
})

app.listen(port,()=>{
    console.log(`CRUD server is running on: ${port}`)
})


/*
 * 1. at least one user
 * 2. set uri with userId and password
 * 3. create a mongodb client
*/