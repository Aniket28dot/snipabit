const mongoose = require('mongoose')

mongoose
    .connect('mongodb://admin-aniket:anibha@dailyjournal-shard-00-00.t3bwl.mongodb.net:27017,dailyjournal-shard-00-01.t3bwl.mongodb.net:27017,dailyjournal-shard-00-02.t3bwl.mongodb.net:27017/postDB?ssl=true&replicaSet=atlas-ui08vq-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db