let player = {
  left: 450,
  top: 600,
};

let enemies = [
  { left: 250, top: 20 },
  { left: 350, top: 80 },
  { left: 450, top: 130 },
  { left: 550, top: 80 },
  { left: 650, top: 20 },
];

function drawPlayer() {
  content =
    "<div class='player' style='left:" +
    player.left +
    "px; top: " +
    player.top +
    "px'></div>";
  document.getElementById("players").innerHTML = content;
}

function drawEmenies() {
  content = "";
  for (let i = 0; i < enemies.length; i++) {
    content +=
      "<div class='enemy' style='left:" +
      enemies[i].left +
      "px; top: " +
      enemies[i].top +
      "px'></div>";
  }
  document.getElementById("enemies").innerHTML = content;
}

function borderControl() {
  console.log(`top: ${player.top}`);
  console.log(`left: ${player.left}`);

  if (player.top === 300) {
    player.top = 400;
    drawPlayer();
  } else if (player.top === 620) {
    player.top = 600;
    drawPlayer();
  } else if (player.left === 820) {
    player.left = 800;
    drawPlayer();
  } else if (player.left === 10) {
    player.left = 70;
    drawPlayer();
  } 
}




// if (player.top === 20) {
//   player.top = 30;
//   drawPlayer();
// } else if (player.top === 620) {
//   player.top = 600;
//   drawPlayer();
// } else if (player.left === 820) {
//   player.left = 800;
//   drawPlayer();
// } else if (player.left === 10) {
//   player.left = 70;
//   drawPlayer();
// } 
// }


function keyPress() {
  document.onkeydown = function (event) {
    const leftMoveKey = event.keyCode === 37 || event.keyCode === 65;
    const rightMoveKey = event.keyCode === 39 || event.keyCode === 68;
    const downMoveKey = event.keyCode === 40 || event.keyCode === 83;
    const upMoveKey = event.keyCode === 38 || event.keyCode === 87;
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
    borderControl();
    drawPlayer();
  };
}

drawPlayer();
drawEmenies();
keyPress();