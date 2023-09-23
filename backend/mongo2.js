const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json());
app.use(cors())
const uri = 'mongodb+srv://new_user:skipper1007@cluster0.t3cyiey.mongodb.net';
const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongo();

app.get('/api/data', async (req, res) => {
    const db = client.db('user');
    const collection = db.collection('dataset');

    try {
        const query = {}; // You can specify your query here
        const data = await collection.find(query).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data from MongoDB:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
