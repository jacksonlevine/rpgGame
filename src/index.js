import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player } from './game.js';

let playerSkin = 
[
  "##@@##" +
  "@@##@@" +
  "##@@##" +
  "==--==" +
  "@@  @@" ,

  "@@####" +
  "(@)@##" +
  "¶ ##@@" +
  "=[©]==" +
  "@@  @@" ,

  "##@@##" +
  "(@)(@)" +
  "##@@##" +
  "=[©]==" +
  "##  ##" ,

  "@@@@##" +
  "@@#(@)" +
  "####  " +
  "==[©]=" +
  "@@  @@" ,
];

window.addEventListener("load", function() {
  let userX = 0;
  let userY = 0;
  let userPlayer = new Player("User", "Human");
  userPlayer.x = userX+20;
  userPlayer.y = userY+22;
  let players = [];
  window.setInterval(function() {
    updateScreen(userPlayer, userX, userY, players);
  }, 10);
  window.setInterval(() => {displayPlayerInfo(players);}, 10);
  players.push(new Player("Henry", "Orc"));
  players.push(new Player("Jeffery", "Orc"));
  players.push(new Player("Poney", "Orc"));
  players.push(userPlayer);
  players[0].x = 10;
  players[0].y = 20;
  players[1].x = 20;
  players[1].y = 30;
  players[0].direction = 2;

  window.addEventListener("keydown", (event) => {
    if(event.keyCode === 32) {
      for(let i = userPlayer.x-7; i < userPlayer.x+7; i+=1) {
        for(let j = userPlayer.y+7; j > userPlayer.y-7; j-=1) {
          for(let p = 0; p < players.length; p++) {
            if(Math.floor(players[p].x) === Math.floor(i) && Math.floor(players[p].y) === Math.floor(j)) {
              if(players[p] !== userPlayer) {
                userPlayer.attack(players[p]);
              }
              if(players[p].health <= 0) {
                players.splice(players.indexOf(players[p]), 1);
              }
            }
          }
        }
      }
    }
    if(event.key === "w" || event.key === "ArrowUp") {
      userPlayer.direction = 0;
      userY += 1;
    }
    if(event.key === "a" || event.key === "ArrowLeft") {
      userPlayer.direction = 1;
      userX -= 1;
    }
    if(event.key === "s" || event.key === "ArrowDown") {
      userPlayer.direction = 2;
      userY -= 1;
    }
    if(event.key === "d" || event.key === "ArrowRight") {
      userPlayer.direction = 3;
      userX += 1;
    }
    userPlayer.x = userX+20;
    userPlayer.y = userY+22;
  });
});



function updateScreen(userPlayer, userX, userY, players) {
  let screenSpot = document.getElementById("screen");
  screenSpot.textContent = buildScreenString(userPlayer, userX, userY, players);
}

function buildScreenString(userPlayer, userX, userY, players) {
  let reservedPixels = new Map();
  let width = 40;
  let height = 40;
  let aString = "";
  for(let i = height+userY; i > 0+userY; i-=1) {
    for(let j = 0 + userX; j < width + userX; j+=1) {
      let isPlayerHere = false;
      players.forEach((player) => {
        if(Math.floor(player.x) === Math.floor(j) && Math.floor(player.y) === Math.floor(i)) {
          isPlayerHere = true;
          for(let p = 0; p < 5; p+=1) {
            for(let l = 0; l < 3; l+=1) {
              reservedPixels.set(Math.floor(j+l)+","+Math.floor(i-p), playerSkin[player.direction][((p*3)+l)*2] + playerSkin[player.direction][(((p*3)+l)*2)+1]);
            }
          }
        }
      });
      if(isPlayerHere || reservedPixels.has(Math.floor(j)+","+Math.floor(i))) {
        aString += reservedPixels.get(Math.floor(j)+","+Math.floor(i));
      } else {
        aString += "  ";
      }
      
    }
    aString += "\n";
  }
  return aString + userX + "," + userY;
}

function displayPlayerInfo (players) {
  let infoSpan = document.querySelector('#playerstats');
  infoSpan.textContent = null;
  let string = "";
  players.forEach((player) =>{
    string += `${player.name} ${player.health} \n`;
  });
  infoSpan.innerText = string;
}


//ui
