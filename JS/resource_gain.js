var land = 0;
var war = 0;
var economy = 0;

var wps = 1;
var eps = 1;
var lps =1;

var citizen_cost = 1;
var soldier_cost = 1;
var settler_cost = 1;

var num_citizens = 0;
var num_soldiers = 0;
var num_settlers = 0;

/* change starting cost with a variable nested if statement? */

window.setInterval(
function land_gain(){
	land = land + lps;
	document.getElementById("total_land").innerHTML = land;
	
} , 1000);

window.setInterval(
function war_gain(){
	war = war + wps;
	document.getElementById("total_war").innerHTML = war;
	
} , 1000);

window.setInterval(
function economy_gain(){
	economy = economy + eps;
	document.getElementById("total_economy").innerHTML = economy;
	
} , 1000);

