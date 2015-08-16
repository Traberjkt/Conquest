var land = 0;
var war = 0;
var economy = 0;

var wps = 1;
var eps = 1;
var lps = 1;

var NumCitizens = 0;
var NumSoldiers = 0;
var NumSettlers = 0;
var CitizenCost = 1;


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
		CitizenCost = Math.pow(2, NumCitizens);
		if(land >= CitizenCost){
			land = land - CitizenCost;
			eps = eps + 2;
			document.getElementById("CitizenCost").innerHTML = "Cost of Citizen " + CitizenCost;
			NumCitizens++;
			document.getElementById("NumCitizens").innerHTML = NumCitizens;
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