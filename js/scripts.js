var Board = {

  create: function() {
    var boardInstance = Object.create(Board);
    boardInstance.initialize();
    return boardInstance;
  },

  initialize: function() {
    this.boardArray = [[],[],[]];
  }

}

var Space = {

  create: function() {
    var spaceInstance = Object.create(Space);
    return spaceInstance;
  }
  
}
