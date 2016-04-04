// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var sportsteams = [
  {
    city: "San Francisco",
    name: "49ers",
    championships: 5
  },
  {
    city: "San Francisco",
    name: "Giants",
    championships: 3
  },
  {
    city: "Bay Area",
    name: "Golden State Warriors",
    championships: 2
  }

];

// db.Sportsteam.remove({}, function(err, authors) {
//   console.log('removed all teams');
//   db.Sportsteam.create(teams_list, function(err, teams){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all authors');
//     console.log("created", teams.length, "teams");


//     db.Sportsteam.remove({}, function(err, teams){
//       console.log('removed all teams');
//       teams_list.forEach(function (sportsteamData) {
//         var sportsteam = new db.Sportsteam({
//           title: sportsteamData.city,
//           name: sportsteamData.name,
//           championships: sportsteamData.championships
//         });
//         db.Sportsteam.findOne({name: sportsteamData.name}, function (err, foundTeam) {
//           console.log('testing 123');
//           if (err) {
//             console.log(err);
//             return;
//           }
//           sportsteam.name = foundTeam;
//             sportsteam.save(function(err, savedTeam){
//               if (err) {
//                 return console.log(err);
//               }
//               console.log('saved ' + savedteam.name + ' by ' + foundAuthor.name);
//           });
//         });
//       });
//     });
//   });
// });
