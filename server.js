// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

// var db = require('./models');
var db = require('./models');

var myPets = [{name: "Mochi", type: "Dog", breed: "Chihuahua"}, {name: "Coco", type: "Dog", breed: "Chihuahua"}];
var profile = [
  {
    name: 'Sam Huang',
    github_link: 'https://github.com/samuel1008',
    current_city: 'San Francisco',
    pets: myPets
  }
];
/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

 app.get('/api/profile', function (req, res) {
   res.json({profile: profile});
 });

 app.get('/', function (req, res) {
   res.sendFile('views/index.html' , { root : __dirname});
 });


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  });
});

/*get all teams*/
app.get('/api/sportsteams', function (req, res) {
  // send all books as JSON response
  db.Sportsteam.find(function(err, sportsteams){
    if (err) {
      console.log("noooo");}
      res.json(sportsteams);
    });

});

/*get 1 team*/
// get one book
app.get('/api/sportsteams/:id', function (req, res) {
  // find one book by its id
  console.log('sportsteams show', req.params);
  for(var i=0; i < teams.length; i++) {
    if (teams[i]._id === req.params.id) {
      console.log("omaha");
      res.json(teams[i]);
      break; // we found the right team, we can stop searching
    }
  }
});

app.post('/api/sportsteams', function (req, res) {
  // create new team with form data (`req.body`)
  console.log('sportsteams create', req.body);
  var newTeam = new db.Sportsteam(req.body);
  console.log("yay i added a new team!");
  newTeam.save(function(err, team){
    if (err){
      console.log("error!!!!");
    }
    res.json(team);

  });
});



app.delete('/api/sportsteams/:id', function (req, res){
  /*get book id from url params ('req.params')*/
  console.log('teams delete', req.params);
  var teamId = req.params.id;
  /*find the index of the book, we want to remove */
  db.Sportsteam.findOneAndRemove({ _id: teamId }, function(err, deletedTeam){
    res.json(deletedTeam);
  });
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
