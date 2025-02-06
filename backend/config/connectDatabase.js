const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.DB_URL)
    .then((con) => console.log('DB Connected Successfully🔥'))
    .catch((err) => console.log(err))
}

module.exports = connectDB