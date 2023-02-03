import { Player } from './../src/game.js';
import { Enemy } from './../src/game.js'

describe ('Player object functionality', () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player('Test Name');
  });


  test('it should create a player object with a custom name that you give it, and health of 500, and an empty inventory array', () => {
    expect(newPlayer.name).toEqual('Test Name');
    expect(newPlayer.health).toEqual(500);
    expect(newPlayer.inventory).toEqual([]);
  });

  test('it should create a player of the given type if given a string character type in the constructor', () => {
    newPlayer = new Player('Test Name', 'Orc');
    expect(newPlayer.characterType).toEqual('Orc');
  });




  describe('setStats method', () => {

    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });
    
    test('it should create the properties of strength, dexterity and intelligence on the player object it is called up, with a random value 1-5', () => {
      newPlayer.setStats();
      expect(newPlayer.strength).toEqual(5);
      expect(newPlayer.dexterity).toEqual(5);
      expect(newPlayer.intelligence).toEqual(5);
    });

  });




  describe('attack method', () => {

    test('it should receive in a player object as a target, which would then remove 50 health from it', () => {
      let secondPlayer = new Player("Enemy");
      newPlayer.attack(secondPlayer);
      expect(secondPlayer.health).toEqual(450);
    });

  });


    
  describe('Levelling up the character', () => {

    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });



    test('it should level up the player it is called on by setting stats', () => {  
      newPlayer.setStats();
      newPlayer.levelUp();
      expect(newPlayer.strength).toEqual(6);
      expect(newPlayer.dexterity).toEqual(6);
      expect(newPlayer.intelligence).toEqual(6);
      
    });
  });


});

describe('Enemy object functionality', () => {

  let newEnemy;
  beforeEach(() => {
    newEnemy = new Enemy();
  });

  test('it should create an object that inherits properties from the player', () => {
    
    newEnemy.attack(newEnemy);
    expect(newEnemy.health).toEqual(450);
  });

  test('it will tell us which level up it uses', () => {
    newEnemy.difficulty = 'hard';
    newEnemy.levelUp();
    expect(newEnemy.strength).toEqual(5);
    let otherEnemy = new Enemy();
    otherEnemy.levelUp();
    expect(otherEnemy.strength).toEqual(2);
  })
});

