document.getElementById("play_screen").style.width = screen.w;
document.getElementById("play_screen").style.height = screen.h;

spawnRandomEnemy();

document.getElementById("show_enemyHP").innerHTML = enemy.maxHP;
