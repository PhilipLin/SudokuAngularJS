app.service('generateBoardService', function () {

	function Block( value, x, y, background ) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.background = background;
		this.change = false;
		this.color = 'black';
		this.setColor = function (color) {
			this.color = color;
		};
		this.setChange = function (change) {
			this.change = change;
		};
		this.setValue = function (value) {
			this.value = value;
		};
	}

	var generateBoard = function (difficulty) {

		var board = [];
		//GENERATING ROOT BOARD
    	for(var i = 0; i < 9; i++) {
    		var temp = []
	    	for(var j = 0; j < 9; j++) {
	    		if((j<3 && i<3) || (j>5 && i>5) || (j<3 && i>5) || (j>5 && i<3) || (i<6 && i>2 && j<6 && j>2))
	    			temp.push(new Block((i*3 + Math.floor(i/3) + j) % 9 + 1, i, j, 'whiteBack'));
	    		else
	    			temp.push(new Block((i*3 + Math.floor(i/3) + j) % 9 + 1, i, j, 'greyBack'));
	    	}
	    	board.push(temp);
    	}

	    //swap columns 20 times
	    for(var i = 0; i < 20; i++){
	        var c1 = Math.floor(Math.random() * 3);
	        var c2 = (c1 + Math.floor(Math.random() * 2) + 1 ) % 3;
	        var b = Math.floor(Math.random() * 3);
	        var temp;
	        for(var j = 0; j < 9; j++){
	            temp = board[j][c1+b*3].value;
	            board[j][c1+b*3].setValue(board[j][c2+b*3].value);
	            board[j][c2+b*3].setValue(temp);
	        }
	    }

	    //swap rows 20 times
	    for(var i = 0; i < 20; i++){
	        var r1 = Math.floor(Math.random() * 3);
	        var r2 = (r1 + Math.floor(Math.random() * 2) + 1) % 3;
	        var b = Math.floor(Math.random() * 3);
	        var temp;
	        for(var j = 0; j < 9; j++){
	            temp = board[r1+b*3][j].value;
	            board[r1+b*3][j].setValue(board[r2+b*3][j].value);
	            board[r2+b*3][j].setValue(temp);
	        }
	    }

	    //block out (#=difficulty) blocks
	    var array = [];
	    for(var i = 0; i < 9; i++){
	    	for(var j = 0; j < 9; j++){
	    		array.push({x:i, y:j});
	    	}
	    }

	    for(var i = 0; i < difficulty; i++){
	        var rand = Math.floor(Math.random() * array.length);
	        board[array[rand].x][array[rand].y].setValue(undefined); 
	       	board[array[rand].x][array[rand].y].setChange(true);
	       	array.splice(rand, 1)
	    }


	    return board;
	};

	return {
		generateBoard: generateBoard
	};
});