export class Player {
  constructor(name, type) {
    this.name = name;
    this.health = 500;
    this.inventory = [];
    this.characterType = type;
    this.strength = 0;
    this.dexterity = 0;
    this.intelligence = 0;
    this.x = 0;
    this.y = 0;
    this.direction = 0;
  }

  attack(targetWithHealth) {
    targetWithHealth.health -= 50;
  }

  setStats() {
    this.strength = Math.round(Math.random()*5);
    this.dexterity = Math.round(Math.random()*5);
    this.intelligence = Math.round(Math.random()*5);
  }

  levelUp() {
    this.strength += 1;
    this.dexterity += 1;
    this.intelligence += 1;
  }

}

export class Enemy extends Player {
  constructor(name, type, difficulty) {
    super(name, type);
    this.difficulty = difficulty;
  }

  levelUp() {
    if (this.difficulty === 'hard') {
      this.strength += 5;
      this.dexterity += 5;
      this.intelligence += 5;
    } else {
      this.strength += 2;
      this.dexterity += 2;
      this.intelligence += 2;
    }
    
  }

}