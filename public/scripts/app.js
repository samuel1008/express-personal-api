console.log("Sanity Check: JS is working!");

var template;
var $teamsList;
var allTeams = [];

$(document).ready(function(){

// your code
  $teamsList = $('#teamTarget');

  var source =$('#sportsteam-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/sportsteams',
    success: handleSuccess,
    error: handleError
  });

  $('#newTeamForm').on('submit', function(e) {
    e.preventDefault();
    console.log('new team serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/sportsteams',
      data: $(this).serializeArray(),
      success: newTeamSuccess,
      error: newTeamError
    });
  });

  $teamsList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/sportsteams/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/sportsteams/'+$(this).attr('data-id'),
      success: deleteTeamSuccess,
      error: deleteTeamError
    });
  });

  function render () {
    // empty existing posts from view
    $teamsList.empty();
    // pass `allTeams` into the template function
    /* index line 38  {each sportsteam}*/
    var teamsHtml = template({ sportsteams: allTeams });
    // append html to the view
    /* app.js line 10, index.html line 35*/
    $teamsList.append(teamsHtml);
    console.log(1);
  }

  function handleSuccess(json) {
    allTeams = json;
    console.log(2);
    render();
  }

  function handleError(e) {
  console.log('uh oh');
  $('#teamTarget').text('Failed to load teams, is the server working?');
}


  function newTeamSuccess(json) {
    $('#newTeamForm').val('');
    allTeams.push(json);
    console.log(3);
    render();
  }

  function newTeamError() {
    console.log('newTeam error!');
  }

  function deleteTeamSuccess(json) {
    var team = json;
    console.log(json);
    var teamId = team._id;
    console.log('delete teamId', teamId);
    // find the book with the correct ID and remove it from our allBooks array
    for(var index = 0; index < allTeams.length; index++) {
      if(allteams[index]._id === teamId) {
        allTeams.splice(index, 1);
        break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
      }
    }
    render();
  }
  function deleteTeamError(){
    console.log("gone!!");
  }




});
