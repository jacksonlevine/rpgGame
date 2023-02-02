export class Player {
  constructor(name, type) {
    this.name = name;
    this.health = 500;
    this.inventory = [];
    this.characterType = type;
  }
      
  attack(player) {
    player.health -= 50;
  }

  setStats() {
    this.strength = Math.round(Math.random()*5);
    this.dexterity = Math.round(Math.random()*5);
    this.intelligence = Math.round(Math.random()*5);
  }

}