describe("Board", function() {
  describe("create", function() {
    it("creates the board object", function() {
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("initializes a 3x3 multi-dimensional array", function() {
      var testBoard = Board.create();
      testBoard.boardArray.should.eql([[],[],[]]);
    });
  });
});

describe("Space", function() {
  describe("create", function() {
    it("creates the space object", function() {
      var testSpace = Object.create(Space);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("initializes 9 spaces", function() {
      var testSpace = Space.create();
      testSpace.spaceArray.should.eql([[1,2,3],[4,5,6],[7,8,9]]);
    });
  });
});
