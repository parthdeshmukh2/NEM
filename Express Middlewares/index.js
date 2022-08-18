const express = require("express");

const app = express();
const fs = require("fs");

app.use(express.json());

const data = fs.readFileSync("./db.json", 'utf-8');

const movieData = JSON.parse(data);

const validation = (req, res, next)=>{
    const movies = req.body;
    if(typeof movies.id === "number" && typeof movies.Name === "string"  && typeof movies.Description === "string"  && typeof movies.Genre === "string" && typeof movies.Cast === "string" && typeof movies.Rating === "number" ){
        next();
    }
    else{
      res.send(400);
    }
}
app.use(validation);

app.post('/post', (req, res)=>{
  
    const movie = req.body;
    movieData.movies.push(movie) ;
    fs.writeFileSync('./db.json', JSON.stringify(movieData), 'utf-8');
res.send(movie);
})

app.listen(8080);