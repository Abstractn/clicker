const DEBUG = true; // enables all console.log()

var screen =
{
	w:480,
	h:480,
	center_w:0,
	center_h:0
};
screen.center_w = screen.w/2;
screen.center_h = screen.h/2;

var enemy =
{
	maxHP:100,
	hp:100,
	hit:null
};
var enemyList = ["taiga","rikka","miku","illya","asuza"];
var enemyPool = enemyList; // always the same for now
// will need to change depending on level, in the future

var player =
{
	stats:
	{
		baseDmg:10,
		bonusDmg:1
	},
	currency:0
};