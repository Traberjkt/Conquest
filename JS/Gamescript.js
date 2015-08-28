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


function systemclear(){
	document.getElementById("system_message").innerHTML = "No Messages"
	
}

function buy_citizen(){
		citizen_cost = Math.pow(5, num_citizens);
		if(land >= citizen_cost){
			document.getElementById("citizen_cost").innerHTML = citizen_cost * 5 ;  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			num_citizens = num_citizens + 1;
			/*document.getElementById("NumCitizens").innerHTML = "You currently have  " + NumCitizens + " citizens.";*/
			land = land - citizen_cost;
			eps = eps + 2;
		}
		else
			document.getElementById("system_message").innerHTML = "You do not have enough Land Resources to provide for more Citizens right now!";
		setTimeout(systemclear, 5000)
}

function buy_soldier(){
		soldier_cost = Math.pow(5, num_soldiers);
		if(economy >= soldier_cost){
			document.getElementById("soldier_cost").innerHTML =  + soldier_cost * 5 ;  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			num_soldiers = num_soldiers + 1;
			/*document.getElementById("NumSoldiers").innerHTML = "You currently have  " + NumSoldiers + " soldiers";*/
			economy = economy - soldier_cost;
			wps = wps + 2;
		}
		else
			document.getElementById("system_message").innerHTML = "You do not have enough Economy Resources to fund a Soldier right now!";
		setTimeout(systemclear, 5000)
}

function buy_settler(){
		settler_cost = Math.pow(5, num_settlers);
		if(war >= settler_cost){
			document.getElementById("settler_cost").innerHTML = settler_cost * 5 ;  /* CitizentCost * x MUST MATCH Math.pow(x, NumCitizens) */
			num_settlers = num_settlers + 1;
			/*document.getElementById("NumSettlers").innerHTML = "You currently have  " + NumSettlers + " settlers";*/
			war = war - settler_cost;
			lps = lps + 2;
		}
		else
			document.getElementById("system_message").innerHTML = "You do not have enough War Resources to defend a Settler right now!";
		setTimeout(systemclear, 5000)
}