// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/movies_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    language: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Movie = mongoose.model("Movie", movieSchema);

const createMovie = async (title, year, language) => {
    // Call the constructor to create an instance of the model class Movie
    const movie = new Movie({ title: title, year: year, language: language });
    // Call save to persist this object as a document in MongoDB
    return movie.save();
}

const findMovies = async (filter, projection, limit) => {
    const query = Movie.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const findMovieById = async (_id) => {
    const query = Movie.findById(_id);
    return query.exec();
}

const replaceMovie = async (id, title, year, language) => {
    const result = await Movie.replaceOne({ _id: id }, { title: title, year: year, language: language });
    return result.modifiedCount;
}

const deleteById = async (id) => {
    const result = await Movie.deleteOne({ _id: id });
    return result.deletedCount;
}

export { createMovie, findMovieById, findMovies, replaceMovie, deleteById };