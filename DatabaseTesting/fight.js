function assingStat(stat, topSelect, midSelect, botSelect) {
  if (topSelect.value == stat) return "top";
  else if (midSelect.value == stat) return "mid";
  else return "bot";
}

function characterFight() {
  let arena =document.querySelector(".arena");
  arena.classList.add("show");
  arena.innerHTML = `<h2>${playerCharacter.name} VS ${enemy.name}</h2>
                    <div class="fightzone">
                      <div class="fighter pc-fighter blue-player">
                        <h3>${playerCharacter.name}</h3>
                        <p class="health">${playerCharacter.hp}HP</p>
                      </div>
                      <div class="fighter enemy-fighter green-player">
                        <h3>${enemy.name}</h3>
                        <p class="health">${enemy.hp}HP</p>
                      </div>
                    </div>`
  if (playerCharacter.speed >= enemy.speed) {
    playerCharacter.attackTimer = 0.5;
    enemy.attackTimer = enemy.speed;
    encounter();
  }
  else{
    playerCharacter.attackTimer = playerCharacter.speed;
    enemy.attackTimer = 0.5;
    encounter();
  } 
}

function encounter(timePassed) {

  if(!(timePassed)) timePassed = 0;

  console.log(timePassed);
  playerCharacter.attackTimer -= timePassed;
  enemy.attackTimer -= timePassed;

  if (playerCharacter.attackTimer == 0) {
    if ( Math.floor((Math.random()*4)) != 3) hpReduction(playerCharacter, enemy, 1);
    else hpReduction(playerCharacter, enemy, 2);
    attackMovement(playerCharacter);
    playerCharacter.attackTimer = 13 - playerCharacter.speed;
  } 

  if (enemy.attackTimer == 0) {
    if ( Math.floor((Math.random()*4)) != 3) hpReduction(enemy, playerCharacter, 1);
    else hpReduction(enemy, playerCharacter, 2);
    attackMovement(enemy);
    enemy.attackTimer = 13 - enemy.speed;
  }

  if (playerCharacter.hp > 0 && enemy.hp > 0) {

    if (playerCharacter.attackTimer < enemy.attackTimer) setTimeout(() => encounter(playerCharacter.attackTimer) , playerCharacter.attackTimer * 1000);
    else setTimeout(() => encounter(enemy.attackTimer) , enemy.attackTimer * 1000);

  }
  
  else {
    if (playerCharacter.hp < 1 && enemy.hp < 1) setWinner();
    else if (playerCharacter.hp > 1) setWinner(playerCharacter);
    else setWinner (enemy);
  }

}


function hpReduction(dealer, receiver, multiplier) {
    receiver.hp -= dealer.strength;
    console.log(`${dealer.name} did ${dealer.strength * multiplier} points of damage to ${receiver.name}`)   
}

function setWinner (winner) {
  if (!(winner)) {
    console.log("It's a tie!");
    fetch(database + "characters/" + playerCharacterId + ".json", { 
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
          "ties": `${playerCharacter.ties + 1}`
        }
      )
      })
      fetch(database + "characters/" + enemyId + ".json", { 
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(
          {
            "ties": `${playerCharacter.ties + 1}`
          }
        )
        })
  } 
  else {
    console.log (`The winner is ${winner.name}`);
    if (winner == playerCharacter) {
      
      fetch(database + "characters/" + playerCharacterId + ".json", { 
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(
          {
            "wins": `${(playerCharacter.wins * 1) + 1}`
          }
        )
        })
      
        fetch(database + "characters/" + enemyId + ".json", { 
          method: "PATCH",
          headers: {
              "Content-Type" : "application/json"
            },
          body: JSON.stringify(
            {
              "loses": `${(enemy.loses * 1) + 1}`
            }
          )
          })
    }
    else {
      fetch(database + "characters/" + playerCharacterId + ".json", { 
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(
          {
            "loses": `${(playerCharacter.loses * 1) + 1}`
          }
        )
        })

        fetch(database + "characters/" + enemyId + ".json", { 
          method: "PATCH",
          headers: {
              "Content-Type" : "application/json"
            },
          body: JSON.stringify(
            {
              "wins": `${(enemy.wins * 1) + 1}`
            }
          )
          })
    }
  } 
}

function attackMovement(attacker) { 
  let pc = document.querySelector(".pc-fighter");
  let opponent =  document.querySelector(".enemy-fighter")
  if (attacker ==  playerCharacter) {
    pc.style.transform = "translateX(50px)"
    opponent.style.backgroundColor = "red";
    opponent.querySelector(".health").innerHTML = `${enemy.hp}HP`
    setTimeout(() =>{
      pc.style.transform = "translateX(0px)";
      opponent.style.backgroundColor = "lightgreen";
    } , 500)
  }

  else {
    opponent.style.transform = "translateX(-50px)"
    pc.style.backgroundColor = "red";
    pc.querySelector(".health").innerHTML = `${playerCharacter.hp}HP`
    setTimeout(() =>{
      opponent.style.transform = "translateX(0px)";
      pc.style.backgroundColor = "lightblue";
    } , 500)

  }
}