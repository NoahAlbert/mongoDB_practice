const mongoose = require('mongoose')
require('dotenv/config')

mongoose
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected to mongo'))
  .catch((err) => console.error('connection failed', err))

const movieSchema = mongoose.Schema({
  title: String,
  genre: [String],
  date: {
    type: Date,
    default: Date.now(),
  },
})

const Movie = mongoose.model('Movie', movieSchema)

function getAllMovies() {
  Movie.find()
    .then((allMovies) => console.log('here are all the movies:', allMovies))
    .catch((err) => console.error('could not find movies', err))
}

getAllMovies()