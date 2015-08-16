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
		CitizenCost = Math.pow(5, NumCitizens);
		if(land >= CitizenCost){
			document.getElementById("CitizenCost").innerHTML = "The next citizen will cost " + CitizenCost * 5 + " Land resources.";  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			NumCitizens = NumCitizens + 1;
			document.getElementById("NumCitizens").innerHTML = "You currently have  " + NumCitizens + " citizens.";
			land = land - CitizenCost;
			eps = eps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Land Resources to provide for more Citizens right now!";
		setTimeout(systemclear, 5000)
}

function buysoldier(){
		SoldierCost = Math.pow(5, NumSoldiers);
		if(economy >= SoldierCost){
			document.getElementById("SoldierCost").innerHTML = "The next soldier will cost " + SoldierCost * 5 + " economy resources.";  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			NumSoldiers = NumSoldiers + 1;
			document.getElementById("NumSoldiers").innerHTML = "You currently have  " + NumSoldiers + " soldiers";
			economy = economy - SoldierCost;
			wps = wps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough Economy Resources to fund a Soldier right now!";
		setTimeout(systemclear, 5000)
}

function buysettler(){
		SettlerCost = Math.pow(5, NumSettlers);
		if(war >= SettlerCost){
			document.getElementById("SettlerCost").innerHTML = "The next settler will cost " + SettlerCost * 5 + " war resources.";  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			NumSettlers = NumSettlers + 1;
			document.getElementById("NumSettlers").innerHTML = "You currently have  " + NumSettlers + " settlers";
			war = war - SettlerCost;
			lps = lps + 2;
		}
		else
			document.getElementById("SystemMessage").innerHTML = "You do not have enough War Resources to defend a Settler right now!";
		setTimeout(systemclear, 5000)
}