var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 4500;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var characters = [{
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 45,
        forcePoints: 1300
    }

]

app.get("/api/:character", function (req, res) {

    var choice = req.params.character;

    for (i = 0; i < characters.length; i++) {
        if (choice === characters[i].routeName) {
            res.send(characters[i])
            return
        }
    }
    res.send(characters)

})


app.get("/api/characters", function (req, res) {
    res.send(characnters)

})


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))

})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname + "/add.html"))
})


app.post("/api/characters", function (req, res) {
    var newCharacter = req.body;

    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "")

    console.log(newCharacter)

    characters.push(newCharacter)

    res.json(newCharacter)

})


app.listen(port, function (req, res) {
    console.log(`Server running on port ${port}`)
})