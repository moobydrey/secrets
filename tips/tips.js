
var random = Math.floor(Math.random() * 7);
document.getElementById('title').innerHTML = data[random].title;
document.getElementById('content').innerHTML = data[random].content;

var random1 = Math.floor(Math.random() * 7);

document.getElementById('title1').innerHTML = data1[random1].title;
document.getElementById('content1').innerHTML = data1[random1].content;

var card = document.querySelector('.card');

card.addEventListener( 'click', function() {
card.classList.toggle('is-flipped');

});
