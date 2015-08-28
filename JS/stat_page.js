var tlc = 0; /* TLC = Total Land Contribution */
var twc = 0; /* TWC = Total War Contribution */
var tec = 0; /* TEC = Total Economy Contribution */


/*
var wps = 1;
var eps = 1;
var lps =1;
*/

window.setInterval(
function show_lps(){
	document.getElementById("update_lps").innerHTML = lps;
} , 500);

window.setInterval(
function show_wps(){
	document.getElementById("update_wps").innerHTML = wps;
} , 500);

window.setInterval(
function show_eps(){
	document.getElementById("update_eps").innerHTML = eps;
} , 500);

window.setInterval(
function show_tlc(){
	document.getElementById("update_tlc").innerHTML = tlc;
} , 500);

window.setInterval(
function show_twc(){
	document.getElementById("update_twc").innerHTML = twc;
} , 500);


window.setInterval(
function show_tec(){
	document.getElementById("update_tec").innerHTML = tec;
} , 500);

