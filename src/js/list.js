define(['./search.js'],function(search){
console.log(search)
$.ajax({
    url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json'
}).done(function(rep){
    console.log(rep)
})
var listme = () => {
        let xxax= 1
    };
})