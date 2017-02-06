var express = require("express");
var app = express();
var logger = require("./logger");
var port = 3055;
app.use(logger);
var list =["cherry", "apple", "peach"];
app.use(express.static('public'));
app.get("/fruits", function(req, res) {
    res.send(list);
})

app.post("/fruits/:choice", function(req, res) {
    var choice = req.params.choice;
    list.push(choice);
    res.send(list);
})
app.put("/fruits/:newFruit", function(req, res) {
    var newFruit = req.params.newFruit;
    var id = req.query.id;
    list[id] = newFruit;
    res.send(list);     
})
app.delete("/fruits", function(req, res) {
    var id = req.query.id;
    list.splice(id,1);
    res.send(list);
})

app.listen(port, function(){
    console.log("Server is listening on port", port);
});
