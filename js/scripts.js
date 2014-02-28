var Board = {

  create: function() {
    var boardInstance = Object.create(Board);
    boardInstance.initialize();
    return boardInstance;
  },

  initialize: function() {
    this.spaceArray = [Space.create(0), Space.create(1), Space.create(2),
                       Space.create(3), Space.create(4), Space.create(5),
                       Space.create(6), Space.create(7), Space.create(8)];
  },

  check: function() {
    console.log(this.spaceArray[0].mark);
    console.log(this.spaceArray[1].mark);
    console.log(this.spaceArray[2].mark);
    var test = ((this.spaceArray[0].mark === this.spaceArray[1].mark) && (this.spaceArray[2].mark === this.spaceArray[1].mark));
    if (test) {
      alert("true");
      return true;
      
    } else {
      return false;
      alert("false");
    }
  }

}

var Space = {

  create: function(position) {
    var spaceInstance = Object.create(Space);
    spaceInstance.initialize(position);
    return spaceInstance;
  },

  initialize: function(position) {
    this.position = position;
  }, 

  markAs: function(player) {
    if (player === "X") {
      this.mark = "X";
    } else {
      this.mark = "O";
    }
    return this.mark;
  }

}


var Game = {
  create: function() {
    var gameInstance = Object.create(Game);
    gameInstance.initialize();
    return gameInstance;
  }, 

  initialize: function() {
  },

  playerswitch: function(current_player) {
    ((current_player === "X") 
      ? current_player = "O" 
      : current_player = "X")
      return current_player;
  },

  createBoard: function() {
    var boardInstance = Board.create();
    return boardInstance;
  }

} 

$(document).ready(function() {
  var current_player = "X";
  var newBoard = Board.create();
  
  $("td.square").click(function(event) {
    var squarePosition = $(this).data("number");
    newBoard.spaceArray.forEach(function(element) {
      if (element.position === squarePosition) {
        element.markAs(current_player);
        newBoard.check();
      } 
    });
    if (current_player === "X") {
      $(this).html("<p class='X'>X</p>");
    } else {
      $(this).html("<p class='O'>O</p>");
    }
    
    current_player = Game.playerswitch(current_player);

    event.preventDefault();
  });

});
