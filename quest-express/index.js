// Express is already installed
const express = require("express");
const app = express();
// Array of movies
const movies = require("./movies");
// In codesandbox we need to use the default port which is 8080
const port = 8080;


app.get("/", (req, res)=>{
    res.send("Welcome to my favorite movie list");
});
app.get("/api/movies",(req, res)=>{
    res.send (movies);
      
});

app.get("/api/movies/:id", (req, res)=>{
const parsedMovieId = parseInt(req.params.id)
const movie = movies.find((movie) => movie.id === parsedMovieId);
if(movie) {
res.send(movie);
} else {
  res.sendStatus(404);
}


});

app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });