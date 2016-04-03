// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profile = [
  {
    name: '49ers',
    championships: 3
  }
];

db.Sportsteam.remove({}, function(err, teams){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all songs');
    // create new teams based on the array teams_list
    db.Sportsteam.create(teams_list, function(err, teams){
      if (err) { return console.log('err', err); }
      console.log("noooooo");
      process.exit();
    });
  }
});
