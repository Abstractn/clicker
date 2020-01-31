function log(s)
{ if(DEBUG) { console.log(s); } }

function getRandomInt(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(milliseconds)
{
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++)
  {
    if ( (new Date().getTime() - start) > milliseconds )
	{ break; }
  }
}

enemy.hit = function ()
{
	enemy.hp = enemy.hp - ( player.stats.baseDmg * player.stats.bonusDmg );
	log("enemy hit, hp = " + enemy.hp);

	if( enemy.hp < 1 )
	{
		spawnRandomEnemy();
		enemy.hp = enemy.maxHP;

		player.currency = Math.round( player.currency += ( enemy.maxHP / 3 ) );
		log("player_cur=" + player.currency);
	}
	document.getElementById("show_enemyHP").innerHTML = enemy.hp;
	
	document.getElementById("show_playerCurrency").innerHTML = player.currency + " gold";
}

function killEnemy(enemy)
{
	//enemy.?
	// make em disappear
}

function spawnRandomEnemy()
{
	var i = getRandomInt(0,enemyPool.length-1);
	sprite_url = "res/imgs/enemy/"+enemyPool[i]+".png";
	document.getElementById("enemy").src = sprite_url;
	log("(rand)enemy_pool="+i);
	log(sprite_url);
}

function setCurrency(value)
{ player_currency = value; return "u cheaty biscuit"; }

function loadGame()
{
	var data = prompt("Please insert your data string");
	data = data.split("|");
	for(var i=0; i<data.length;i++)
	{ data[i] = data[i] *1; } // converts from string to number

	player.stats.baseDmg = data[0];
	player.stats.bonusDmg = data[1];
	player.currency = data[2];
	enemy.maxHP = data[3];

	// auto close menu
	showMenu();
	forceRedraw("show_enemyHP");
}

function saveGame()
{
	var data = player.stats.baseDmg + "|" +
	           player.stats.bonusDmg + "|" +
			   player.currency + "|" +
			   enemy.maxHP;
	               
	alert("Please copy and store the following string:\n" + data);
	console.log("saveGame();data{"+data+"}");
}

var numericalFont = { font: "2em Pacifico", fill: "#000", stroke: "#fe7", strokeThickness: "5" };

function showMenu()
{
	log("showMenu()");
	if( document.getElementById("menu_box").style.display == "none" )
	{ document.getElementById("menu_box").style.display = "block"; }
	else
	{ document.getElementById("menu_box").style.display = "none"; }
}

var prevState;
	
function forceRedraw(element)
{
    //prevState = document.getElementById(element).style.display;
    document.getElementById(element).style.display = "none";
    document.getElementById(element).style.display = "block";
    //log("forced redraw of " + element + "; state: " +prevState);
}

// document.getElementById("show_enemyHP").style.display
