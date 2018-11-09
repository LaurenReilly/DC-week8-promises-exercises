var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  axios.get('https://dog.ceo/api/breed/beagle/images/random').then(function() {
      console.log("data was fetched");
  }).then(axios.get('https://dog.ceo/api/breed/chow/images/random').then(function() {
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/akita/images/random').then(function(){
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/dingo/images/random').then(function(){
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/eskimo/images/random').then(function(){
    console.log("data was fetched");
})))));