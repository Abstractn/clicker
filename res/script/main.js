//document.write('<scr'+'ipt type="text/javascript" src="res/script/vars.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="res/script/funcs.js" ></scr'+'ipt>');

document.getElementById("play_screen").style.width = screen.w;
document.getElementById("play_screen").style.height = screen.h;

spawnRandomEnemy();

//alert( document.getElementById("enemy").style.top + " / " + screen.center_h )


/*
	this.load.image('sky', 'res/imgs/map/sky.png');
	
	this.load.image('taiga', 'res/imgs/enemy/taiga.png');
	this.load.image('rikka', 'res/imgs/enemy/rikka.png');
	this.load.image('miku', 'res/imgs/enemy/miku.png');
	this.load.image('illya', 'res/imgs/enemy/illyasviel.png');
	this.load.image('asuza', 'res/imgs/enemy/asuza.png');
}

function create()
{
	gameState.sky = this.add.sprite(screen_center_w, screen_center_h, 'sky');
	gameState.sky.setScale(.17);
	
	gameState.enemy = this.add.sprite(screen_center_w + (screen_center_w/2), screen_center_h, 'taiga');
	//scaleSprite(gameState.enemy,50);
	gameState.enemy.setScale(.5);
	gameState.enemy.setInteractive();
	
	gameState.shop = this.add.rectangle(0,0,screen_center_w*2,screen_h*2,0x000000,0x44);
	
	//enemy.anchor.setTo(0.5, 0.5);
	//enemy.scale.setTo(-2);
	//enemy.scale.y(10);
	
	//gameState.enemy.displayWidth=(gameState.enemy.displayWidth/100)*20;
	//gameState.enemy.displayHeight=(gameState.enemy.displayHeight/100)*20;
	// gameState.enemy.setHealth(25);
	gameState.enemy.hp = this.add.text(screen_center_w+(screen_center_w/2)-20,screen_center_h-20,enemyHP, numericalFont );
	
	gameState.enemy.player_currency = this.add.text(20,20,player_currency+" gold", numericalFont );
	
	// ######################################################
	
	gameState.enemy.on("pointerdown",function()
	{
		gameState.enemy.setScale(.45);
		enemyHP-=player_stats_baseDamage;
		gameState.enemy.hp.setText(enemyHP);
	});
	gameState.enemy.on("pointerup",function()
	{
		gameState.enemy.setScale(.5);
	});
}

function update()
{
	// ============================================= KILL AND UPDATE ======================
	// ============================================= KILL AND UPDATE ======================
	// ============================================= KILL AND UPDATE ======================
	
	// first upgrade should cost 200
	if(enemyHP<1)
	{
		//killEnemy(gameState.enemy);
		spawnRandomEnemy(enemyList);
		enemyHP=enemyMaxHP;
		gameState.enemy.hp.setText(enemyHP);
		
		gameState.enemy.player_currency.setText( Math.round( player_currency += ( enemyMaxHP / 3 ) ) + " gold" );
		log("player_cur=" + player_currency);
	}
	/*if( game.input.activePointer.isDown )
	{
		enemyHit();
		//gameState.enemy.displayWidth-=5;
	}*/
//}
									/*
const config = {
    type: Phaser.AUTO,
    width: screen_w,
    height: screen_h,
    backgroundColor: "222", // #aaa
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)

/*
save / load data
http://www.thebotanistgame.com/blog/2015/08/12/saving-loading-game-state-phaserjs.html

PhaserJS docs
https://phaser.io/docs/2.6.2/index

sprite scaling
https://samme.github.io/phaser-examples-mirror/sprites/scale%20a%20sprite.html

idle clicker game tutorial
https://gamedevacademy.org/phaser-tutorial-how-to-create-an-idle-clicker-game/

sprite mask
https://www.phaser.io/examples/v2/bitmapdata/alpha-mask

sprite blur
*/

/*
// click to entity
// https://phaser.io/examples/v2/p2-physics/body-click#download

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.image('contra2', 'assets/pics/contra2.png');
	game.load.image('bunny', 'assets/sprites/bunny.png');
	game.load.image('block', 'assets/sprites/block.png');
	game.load.image('wizball', 'assets/sprites/wizball.png');

	game.load.physics('physicsData', 'assets/physics/sprites.json');

}

var contra;
var bunny;
var block;
var wizball;

var result = 'Click a body';

function create() {

	//	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

	contra = game.add.sprite(100, 200, 'contra2');
	bunny = game.add.sprite(550, 200, 'bunny');
	block = game.add.sprite(300, 400, 'block');
	wizball = game.add.sprite(500, 500, 'wizball');

	//	Enable the physics bodies on all the sprites and turn on the visual debugger
	game.physics.p2.enable([ contra, bunny, block, wizball ], true);

	//	Convex polys
	contra.body.clearShapes();
	contra.body.loadPolygon('physicsData', 'contra2');

	bunny.body.clearShapes();
	bunny.body.loadPolygon('physicsData', 'bunny');

	//	Circle
	wizball.body.setCircle(45);

	game.input.onDown.add(click, this);

}

function click(pointer) {
	//	You can hitTest against an array of Sprites, an array of Phaser.Physics.P2.Body objects, or don't give anything
	//	in which case it will check every Body in the whole world.
	var bodies = game.physics.p2.hitTest(pointer.position, [ contra, bunny, block, wizball ]);
	if (bodies.length === 0)
	{
		result = "You didn't click a Body";
	}
	else
	{
		result = "You clicked: ";
		for (var i = 0; i < bodies.length; i++)
		{
			//	The bodies that come back are p2.Body objects.
			//	The parent property is a Phaser.Physics.P2.Body which has a property called 'sprite'
			//	This relates to the sprites we created earlier.
			//	The 'key' property is just the texture name, which works well for this demo but you probably need something more robust for an actual game.
			result = result + bodies[i].parent.sprite.key;

			if (i < bodies.length - 1)
			{
				result = result + ', ';
			}
		}
	}
}

function update() {
	bunny.body.rotateLeft(2);
}

function render() {
	game.debug.text(result, 32, 32);
}

*/