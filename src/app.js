var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '90422e0287e448cf87e9f5118b74eb6e',
  secret: '8a59d50ecb68429f87c78e877450b8a3'
});

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });