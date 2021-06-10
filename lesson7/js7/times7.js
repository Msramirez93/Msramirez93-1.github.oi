/*const lastVisit =localStorage.getItem('lastvisit')|| Date.now();
let daysBetween = (lastVisit - Date.now());
if (daysBetween <1){
  message = "Welcome. this is your first visit."
}
else{
  message = 'You visited this page <strong>${daysBetween}</strong> days ago.';
}
document.querySelector('#lastvisit').innerHTML = message;
localStorage.setItem('lastvisit',Data.now());*/



/*function counter_fn(){
    var counter = $('#cntr span').text(); // geting value from span
    var count = 0;
    count = parseInt(counter.value);
    count = count+1;
    counter.innerHTML = parseInt(count);
}
window.onload = counter_fn;  */
function counter_fn() {
    var counter = document.getElementById("cntr");
    var count = 0;
    count = parseInt(counter.innerHTML);
    count = count + 1;
    counter.innerHTML = count;
  }
  window.onload = counter_fn;
/*--function visitCount() {
   // var visits = localStorage.getItem('visitCount'); //you would have to cast this into an int
   // var count= 0;
    //count = parseInt(visits.value);
    //count= count+1;
     
    //var counterNumber = 1

if (localStorage.getItem("visitCount")) {
  counterNumber = parseInt(localStorage.getItem("visitCount")) + 1;
}
else {
  localStorage.setItem("visitCount", counterNumber)
}
   // for(visits=1;visits<=0; visits++)
   // visits++; //increment the number of visits by one
     
   // localStorage.setItem('visitCount', visits);
    
    return visits;
    }
--*/
/*var counter_list = [10,10000,10000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count){
  setInterval(function(){
    // clear count
    while (display_div.hasChildNodes()) {
        display_div.removeChild(display_div.lastChild);
    }
    str_counter_0++;
    if (str_counter_0 > 99) {
      str_counter_0 = 0; // reset count
      str_counter_1++;    // increase next count
    }
    if(str_counter_1>99999){
      str_counter_2++;
    }
    display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.className = 'num_tiles';
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
    }
  },1000);
}*/
/*window onload = function(){
    var contador= 0;
   document.getElementById("button").onclick = function(){
       contador ++;
   }
}*/
/*function displayCounter() {
    // check if the localStorage object is supported by the browser
    if ('localStorage' in window && window['localStorage'] !== null) {
        // if the counter has been defined, increment its value, // otherwise, set it to 0
        ('counter' in localStorage && localStorage['counter'] !== null) ? localStorage['counter']++ : localStorage['counter'] = 0;
        var container = document.getElementById('container');
        if (!container) { return };
        // display the counter on screen
        container.innerHTML = 'Hey, you visited this page ' + localStorage['counter'] + ' times.';
    }
}
// call the 'displayCounter()' function when the web page is loaded
window.onload = function () {
    displayCounter();
}*/
/*if (localStorage.times == 31) {
    localStorage.times = -1;
} else {
    localStorage.times = Number(localStorage.times) - 1;
}
The following is not the solution, but a basic idea:


let counting = `number of visits: ${localStorage.times}`;
document.querySelector('.info').textContent = counting;*/
/*localStorage.mytime = Date.now();
const visit = localStorage.getItem("mytime");*/
//const lastVisit = localStorage.setItem("mytime");

//const newVisit = localStorage.getItem("mytime");

//let timeSinceLastVisit = visit - newVisit;

/*document.getElementById("lastVisit").innerHTML = visit; //timeSinceLastVisit;

function visitCount() {
    var visits = localStorage.getItem('visitCount'); //you would have to cast this into an int
    
    visits++; //increment the number of visits by one
    
    localStorage.setItem('visitCount', visits);
    
    return visits;
    }

    const countEl = document.getElementById('count');*/

/*updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
*/
/*var n =localStorage.getItem('on_load_counter');
 if (n ===null){
     n = 0;
 }
 
 localStorage.setItem("on_load_counter", n);
 document.getElementById('counter visitor').innerHTML =n;*/


