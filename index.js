const express = require("express");
const Datastore = require("nedb");

app = express();

const database = new Datastore("database.db");

database.loadDatabase();

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("listening at port "+PORT));
app.use(express.static("Public"));
app.use(express.json());

app.post("/api", (request, response) => {
    console.log(request.body);
    database.insert(request.body);
    
    response.json({
        status:"Sucess"
    })
});

app.get("/api", (request, response) =>{
    database.find({}, (err,data) =>{
        if(err){
            console.log(err);
        }
        response.json(data);
    });
});