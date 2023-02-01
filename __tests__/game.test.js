import { Player } from './../src/game.js';

describe ('Player object functionality', () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player('Test Name');
  })


  test('it should create a player object with a custom name that you give it, and health of 500, and an empty inventory array', () => {
    expect(newPlayer).toEqual({name:"Test Name", health:500, inventory:[]})
  });


})