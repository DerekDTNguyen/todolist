// To deploy, node app.js via CLI
// Imports
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

// Variables Used
const items = ["Buy food","Cook food", "Eat food"];
const workItems = [];

//Web Application Functionality
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Root/Home Section
app.get("/", function(req, res) {
  let day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  var item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    // Redirects to the home/root route, triggering app.get("/");
    // We need to render our new variables with out initial render so we rerender the app.get("/")
    // Hence the redirect function is useful here.
    res.redirect("/");
  }
  // // Redirects to the home/root route, triggering app.get("/");
  // // We need to render our new variables with out initial render so we rerender the app.get("/")
  // // Hence the redirect function is useful here.
  // res.redirect("/");
  // res.render("list", {newListItem: item});
});


//Work Section
app.get("/work", function (req,res){
  res.render("list", {listTitle:"Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})


app.listen(3000, function(req, res) {
  console.log("Success");
});

//About Section
app.get("/about", function(req,res){
  res.render("about");
})
