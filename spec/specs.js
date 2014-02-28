describe("Game", function() {
  describe("create", function() {
    it("creates a new game instance", function() {
      var testGame = Object.create(Game);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("initializes the game object", function() {
      var testGame = Game.create("X", "O");
      testGame.playerX === "X";
      testGame.playerO === "O";
    });
  });
  describe("playerswitch", function() {
    it("switches the player turn", function() {
      var testGame = Game.create("X", "O");
      testGame.playerswitch("O").should.equal("X");
    });
  });
  describe("createBoard", function() {
    it("creates a new board instance", function() {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  // describe("checkHorizontal", function() {
  //   it("checks player selected spaces for winning horizontal matches", function() {

  //   });
  // });
});

describe("Board", function() {
  describe("create", function() {
    it("creates the board object", function() {
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("initializes a 9 digit array", function() {
      var testBoard = Board.create();
      testBoard.spaceArray.should.eql(
        [Space.create(0), Space.create(1), Space.create(2),
         Space.create(3), Space.create(4), Space.create(5),
         Space.create(6), Space.create(7), Space.create(8)]);
    });
  });
});

describe("Space", function() {
  describe("create", function() {
    it("creates the space object", function() {
      var testSpace = Object.create(Space);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
    it("creates the space for each position", function() {
      var testSpace = Space.create(1);
      testSpace.position.should.equal(1);
    });
  });
  
  describe("markAs", function() {
    it("designates a space as an X or O", function() {
      var testSpace = Space.create();
      var player = "X";
      testSpace.markAs(player).should.equal("X");
    });
  });
});

// describe("Player", function() {
//   describe("create", function() {
//     it("creates a new player instance", function() {
//       var testPlayer = Object.create(Player);
//       Player.isPrototypeOf(testPlayer).should.equal(true)
//     });
//   });
//   describe("initialize", function() {
//     it("assigns the parameter as the player name", function() {
//       var testPlayer = Player.create("playerX");
//       testPlayer.name.should.equal("playerX");
//     })
//   })
// });


