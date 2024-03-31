const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware  --------------------------------

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// vercel --prod

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rngkdhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // await client.connect();
    // start code from here --------------------------------------------------
    const phoneCollection = client.db("phoneDB").collection("phone");
    const cardPhoneCollection = client.db("phoneDB").collection("cardPhone");

    // for add single data in server  -----------------------------------
    app.post('/phones', async(req, res)=>{
        const newPhone = req.body;
        const result = await phoneCollection.insertOne(newPhone)
        res.send(result)
    })

    // for get all data  ------------------------------------------------
    app.get('/phones', async(req, res)=>{
        const cursor = phoneCollection.find();
        const result = await cursor.toArray();
        res.send(result)
    })

    // for get single spasific data  ------------------------------------------------
    app.get('/phones/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await phoneCollection.findOne(query);
        res.send(result)
    })

    // for update single data  ------------------------------------------------

    app.put('/phones/:id', async(req, res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const options = {upsert : true};
        const updatePhone = req.body;
        const phone ={
          $set: {
            name :updatePhone.name,
            photourl :updatePhone.photourl,
            brand :updatePhone.brand,
            price :updatePhone.price,
            details :updatePhone.details,
          }
        } 
      const result = await phoneCollection.updateOne(filter, phone, options);
      res.send(result)
    })


    // for delete single data  ------------------------------------------------
    app.delete('/phones/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await phoneCollection.deleteOne(query)
      res.send(result)
    })

    // cardPhone =========================================================
    app.post('/cardphones', async(req, res)=>{
      const cardPhones = req.body;
      const result = await cardPhoneCollection.insertOne(cardPhones)
      res.send(result)
   })

   app.get('/cardphones', async(req, res)=>{
    const cursor = cardPhoneCollection.find();
    const result = await cursor.toArray();
    res.send(result)
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




app.get('/',(req, res)=>{
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})


// fireMongo 
// Tzoitl3wA289A2Eo 
// Tzoitl3wA289A2Eo