// JavaScript Document
// Set the date we're counting down to
var countDownDate = new Date('Dec 22 2022 22:03:26 GMT+0800').getTime();

var eventDate = 'Dec 22 2022 22:03:26 GMT+0800';

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();


  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
							
  document.getElementById("line1").innerHTML = "COMING SOON"
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

	var intro = new Audio('music/part1.mp3');
	intro.loop = false;
	
	var bgm = new Audio('music/part2.mp3');
	bgm.loop = false;

  // If the count down is over, write some text 
  if (distance < 0) {
	 bgm.play();
	clearInterval(x);
	document.getElementById("line1").innerHTML = "HAPPY BIRTHDAY!";
	document.getElementById("demo").innerHTML = "5 7 1";
	let clientWidth = document.body.clientWidth
    let redbags = new Array(20).fill(0).forEach(x => {
      document.body.innerHTML += `<img src="images/cake.png" class="img" style="animation-duration: ${Math.random()*2+3}s;left: ${Math.random()*clientWidth}px;" />`
    })
  }
}, 1000);

