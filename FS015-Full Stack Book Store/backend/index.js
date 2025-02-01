const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000

const mongoose = require('mongoose');

require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))

// routes
const bookRoutes = require('./src/books/book.route')
app.use('/api/books', bookRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL_LOCAL)

    // use local mongodb
    // await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    app.get('/', (req, res) => {
        res.send('Book Server is running!')
    })
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})