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

async function run() {
    try{
        await client.connect();

        const usersDB = client.db('usersDB');
        const userDataCollection = usersDB.collection('users');


        // Read data from database
        
        app.get('/users', async (req,res)=>{
            const cursor = userDataCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

         // add database related apis here || Create
        
         app.post('/users', async(req, res)=>{
            const newUser = req.body;
            const result = await userDataCollection.insertOne(newUser);
            res.send(result);
        })

        await client.db('admin').command({ping:1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally{
        // await client.close()
    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('CRUD server is running');
})

app.listen(port, () => {
    console.log(`Simple CRUD server is running on port ${port}`);
})

// async function run(){
//     // await
// }

// run().catch(console.dir)

// try{

// }

// finally{

// }
 
/*
 * 1. at least one user
 * 2. set uri with userId and password
 * 3. create a mongodb client
 * 4. add a run function to connect to the database
 * 5. use try finally inside it to connect the client
 * 6. ping the database to see server is alive or not
*/