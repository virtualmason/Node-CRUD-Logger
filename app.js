var express = require("express");
var app = express();
var logger = require("./logger");
app.use(logger);
var list =["cherry", "apple", "peach"];

app.get("/fruits", function(req, res) {
    res.json(list);
})

app.post("/fruits/:choice", function(req, res) {
    var choice = req.params.choice;
    list.push(choice);
    res.json(list);
})
app.put("/fruits/:newFruit", function(req, res) {
    var newFruit = req.params.newFruit;
    var id = req.query.id;
    list[id] = newFruit;
    res.json(list);     
})
app.delete("/fruits", function(req, res) {
    var id = req.query.id;
    list.splice(id,1);
    res.json(list);
})

app.listen(3045);
