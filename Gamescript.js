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
var SettlerCost = 1;
var SoldierCost = 1;


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
		document.getElementById("CitizenCost").innerHTML = "Cost of Citizen " + CitizenCost;
		if(land >= CitizenCost){
			land = land - CitizenCost;
			eps = eps + 2;
			NumCitizens++;
			document.getElementById("NumCitizens").innerHTML = NumCitizens;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Land Resources to provide for more Citizens right now!";
		setTimeout(systemclear, 5000)
}

function buysoldier(){
		SoldierCost = Math.pow(2, NumSoldiers);
		document.getElementById("SoldierCost").innerHTML = "Cost of Soldier " + SoldierCost;
		if(economy >= SoldierCost){
			economy = economy - SoldierCost;
			wps = wps + 2;
			NumSoldiers++;
			document.getElementById("NumSoldiers").innerHTML = NumSoldiers;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Economy Resources to fund a Soldier right now!";
		setTimeout(systemclear, 5000)
}

function buysettler(){
		SettlerCost = Math.pow(2, NumSettlers);
		document.getElementById("SettlerCost").innerHTML = "Cost of Settler " + SettlerCost;
		if(war >= SettlerCost){
			war = war - SettlerCost;
			lps = lps + 2;
			NumSettlers++;
			document.getElementById("NumSettlers").innerHTML = NumSettlers;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough War Resources to defend a Settler right now!";
		setTimeout(systemclear, 5000)
}