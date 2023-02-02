import { Player } from './../src/game.js';

describe ('Player object functionality', () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player('Test Name');
  })


  test('it should create a player object with a custom name that you give it, and health of 500, and an empty inventory array', () => {
    expect(newPlayer.name).toEqual('Test Name');
    expect(newPlayer.health).toEqual(500);
    expect(newPlayer.inventory).toEqual([]);
  });

  describe('setStats', () => {

    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
  })
 
    test('it should create the properties of strength, dexterity and intelligence on the player object it is called up, with a random value 1-10', () => {
      newPlayer.setStats();
      expect(newPlayer.strength).toEqual(5);
      expect(newPlayer.dexterity).toEqual(5);
      expect(newPlayer.intelligence).toEqual(5);
    });

  })

  describe('attack method', () => {

    test('it should receive in a player object as a target, which would then remove 50 health from it', () => {
      let secondPlayer = new Player("Enemy");
      newPlayer.attack(secondPlayer);
      expect(secondPlayer.health).toEqual(450);
    });

  });

});

