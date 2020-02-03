document.getElementById("play_screen").style.width = screen.w;
document.getElementById("play_screen").style.height = screen.h;

enemy.spawn("random");

document.getElementById("show_enemyHP").innerHTML = enemy.maxHP;
