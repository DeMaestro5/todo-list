const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ['Buy Food', 'Cook Food', 'Eat food'];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/", function(req, res){
 const today = new Date()
 let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
 };
    let day = today.toLocaleDateString("en-US", options)
 

    res.render('list', {kindOfDay: day, newListItems: items});

});

app.post('/', function(req, res){
   item = req.body.newItem;
   console.log(item);

   items.push(item);

   res.redirect('/')

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});