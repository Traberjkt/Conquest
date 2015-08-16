var land = 0;
var lps = 1;
var war = 0;
var wps = 1;
var economy = 0;
var eps = 1;


window.setInterval(
function land_gain(){
	land = land + lps;
	document.getElementById("TotalLand").innerHTML = land;
	
} , 1000);

window.setInterval(
function war_gain(){
	war = war + wps;
	document.getElementById("TotalWar").innerHTML = war;
	
} , 1000);

window.setInterval(
function economy_gain(){
	economy = economy + eps;
	document.getElementById("TotalEconomy").innerHTML = economy;
	
} , 1000);


function buycitizen(){
		var citizen_cost = 20;
		if(land >= citizen_cost){
			land = land - citizen_cost;
			eps = eps + 2;
		}
}

function buysoldier(){
		var soldier_cost = 20;
		if(economy >= soldier_cost){
			economy = economy - soldier_cost;
			wps = wps + 2;
		}
}

function buysettler(){
		var settler_cost = 20;
		if(war >= settler_cost){
			war = war - settler_cost;
			lps = lps + 2;
		}
}