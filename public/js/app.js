let player = {
  left: 450,
  top: 600,
};

let enemies = [
  { left: 300, top: 20 },
  { left: 375, top: 80 },
  { left: 450, top: 130 },
  { left: 525, top: 80 },
  { left: 600, top: 20 },
];

let missiles = [];

function drawPlayer() {
  content =
    "<div class='player' style='left:" + player.left + "px; top: " + player.top + "px'></div>";
  document.getElementById("players").innerHTML = content;
}

function drawEmenies() {
  content = "";
  for (let i = 0; i < enemies.length; i++) {
    content += "<div class='enemy' style='left:" + enemies[i].left + "px; top: " + enemies[i].top + "px'></div>";
  }
  document.getElementById("enemies").innerHTML = content;
}

function drawMissiles() {
  content = "";
  for (let i = 0; i < missiles.length; i++) {
    content += "<div class='missile' style='left:" + missiles[i].left + "px; top: " + missiles[i].top + "px'></div>"; 
  }
  document.getElementById("missiles").innerHTML = content;
  
}

function moveEnemies() {
  let speed = Math.floor(Math.random()*10);
  console.log(`enemy approaching:${speed}px`);
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].top = enemies[i].top + speed;
  }
  document.getElementById("enemies").innerHTML = content;
}

function moveMissiles() {
//  let speed = Math.floor(Math.random() * 20);
  for (let i = 0; i < missiles.length; i++) {
    missiles[i].top = missiles[i].top - 20;
  }
  document.getElementById("missiles").innerHTML = content;
}

function borderControl() {
  console.log(`top: ${player.top}/left: ${player.left}`);
  if (player.top === 300) {
    player.top = 400;
    drawPlayer();
  } else if (player.top === 620) {
    player.top = 600;
    drawPlayer();
  } else if (player.left === 900) {
    player.left = 800;
    drawPlayer();
  } else if (player.left === 10) {
    player.left = 70;
    drawPlayer();
  }
}

function keyControl() {
  document.onkeydown = function (event) {
    const leftMoveKey = event.keyCode === 37 || event.keyCode === 65;
    const rightMoveKey = event.keyCode === 39 || event.keyCode === 68;
    const downMoveKey = event.keyCode === 40 || event.keyCode === 83;
    const upMoveKey = event.keyCode === 38 || event.keyCode === 87;
    const fireKey = event.keyCode === 82 || event.keyCode === 32;

    if (leftMoveKey) {
      player.left -= 10;
    }
    if (rightMoveKey) {
      player.left += 10;
    }
    if (downMoveKey) {
      player.top += 10;
    }
    if (upMoveKey) {
      player.top -= 10;
    }
    if (fireKey) {
      console.log(`shots fired 🔫`);
      missiles.push({ left: player.left + 34, top: player.top + 8 });
      drawMissiles()
    }
    borderControl();
    drawPlayer();
  };
}

function targetHit() {
  for (let enemy = 0; enemy < enemies.length; enemy++) {
      for (let missile = 0; missile < missiles.length; missile++) {
          if ( 
              missiles[missile].left >= enemies[enemy].left  &&
              missiles[missile].left <= (enemies[enemy].left + 50)  &&
              missiles[missile].top <= (enemies[enemy].top + 50)  &&
              missiles[missile].top >= enemies[enemy].top
          ) {
              enemies.splice(enemy, 1);
              missiles.splice(missile, 1);
              if (enemies.length === 0) {
                alert('YOU WON !!!');
              }
          }
      }
  }
}

function gameLoop() {
  keyControl();
  drawPlayer();
  moveEnemies();
  drawEmenies();
  moveMissiles()
  drawMissiles()
  targetHit();
  setTimeout(gameLoop, 100);
}

gameLoop();
