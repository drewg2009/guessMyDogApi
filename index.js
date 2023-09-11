
const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017";

app.get('/addScore', (req, res) => {
    const client = new MongoClient(uri);
    async function run() {
        try {
            const database = client.db('guessBreed');
            const scoresCollection = database.collection('scores');
            const doc = {score: 5, name: 'drew'}
            const result = await scoresCollection.insertOne(doc);
            console.log('result', result)
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
