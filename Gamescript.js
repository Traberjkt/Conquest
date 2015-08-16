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


function systemclear(){
	document.getElementById("SystemMessage").innerHTML = "No Messages"
	
}

function buycitizen(){
		var citizen_cost = 20;
		if(land >= citizen_cost){
			land = land - citizen_cost;
			eps = eps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Land Resources to provide for more Citizens right now!";
		setTimeout(systemclear, 5000)
}

function buysoldier(){
		var soldier_cost = 20;
		if(economy >= soldier_cost){
			economy = economy - soldier_cost;
			wps = wps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Economy Resources to fund a Soldier right now!";
		setTimeout(systemclear, 5000)
}

function buysettler(){
		var settler_cost = 20;
		if(war >= settler_cost){
			war = war - settler_cost;
			lps = lps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough War Resources to defend a Settler right now!";
		setTimeout(systemclear, 5000)
}