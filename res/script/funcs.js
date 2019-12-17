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
	//gameState.enemy.setTexture( PIXI.TextureCache[key] );
	sprite_url = "res/imgs/enemy/"+enemyPool[i]+".png";
	document.getElementById("enemy").src = sprite_url;
	log("(rand)enemy_pool="+i);
	log(sprite_url);
}

function setCurrency(value)
{ player_currency = value; return "u cheaty biscuit"; }

function player_stats_getFullDamage()
{ return player_stats_baseDamage + player_stats_bonusDamage; }

function loadGame()
{
}

function saveGame()
{
	var data = player.stats.baseDmg + "|" +
	           player.stats.bonusDmg + "|" +
			   player.currency + "|" +
			   enemy.maxHP;
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