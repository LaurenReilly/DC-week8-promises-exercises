var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];
//exercise 1 Use axios.get() and a chain of .then() calls to fetch these URLs one by one
  axios.get('https://dog.ceo/api/breed/beagle/images/random').then(function() {
      console.log("data was fetched");
  }).then(axios.get('https://dog.ceo/api/breed/chow/images/random').then(function() {
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/akita/images/random').then(function() {
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/dingo/images/random').then(function(){
    console.log("data was fetched");
}).then(axios.get('https://dog.ceo/api/breed/eskimo/images/random').then(function(){
    console.log("data was fetched");
})))));


//exercise 2 use Promise.all() to do the above all at once
var promise1 = axios.get('https://dog.ceo/api/breed/beagle/images/random');
var promise2 = axios.get('https://dog.ceo/api/breed/chow/images/random');
var promise3 = axios.get('https://dog.ceo/api/breed/akita/images/random');
var promise4 = axios.get('https://dog.ceo/api/breed/dingo/images/random');
var promise5 = axios.get('https://dog.ceo/api/breed/eskimo/images/random');

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(function() {
    console.log("all the data was fetched");
});

//exercise 3 Resolve Reject Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise.

function addNumbers(x, y) {
    var addition = new Promise(function(resolve, reject) {
        if (Number.isInteger(x) === true && Number.isInteger(y) === true) {
            resolve(x + y);
        } else {
            reject("Both inputs must be numbers");
        }
    }); 
    return addition
}

addNumbers(1, 2).then(function(result) {
    console.log(result);
}).catch( function(error) {
    console.log(error)
});
addNumbers("x", 3).then(function(result) {
    console.log(result);
}).catch( function(error) {
    console.log(error)
});

//exercise 4 
let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
       var drop = Math.random();
       if (drop < 0.5) {
          console.log("Landed butter-side up!")
          success();
       } else {
          console.log("Landed butter-side down...")
          failure();
       }
    }, 2000);
 }

 //you're passing in resolve/reject as the arguments so when the function dropButteredToastOnFloor runs
 //and calls success and failure it will call your promises resolve and reject functions (.then and .catch)
function dropToastPromisified() {
        var toastPromise = new Promise(function(resolve, reject) {
            dropButteredToastOnFloor(resolve, reject);
        });
    return toastPromise;
}

dropToastPromisified().then(function() {
    alert("Whew, that was close!")
}).catch(function() {
    alert("Shucks, there goes my toast!");
});


