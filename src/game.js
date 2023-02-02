export class Player {
  constructor(name) {
    this.name = name;
    this.health = 500;
    this.inventory = []
  }
      
  attack(player) {
    player.health -= 50;
  }

  setStats() {

  }

}