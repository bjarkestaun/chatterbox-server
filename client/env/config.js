// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  var globalUser = prompt('What is your username?') || 'anonymous';
  newSearch += 'username=' + globalUser;
  window.location.search = newSearch;
}
