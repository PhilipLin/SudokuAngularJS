app.service('generateBoardService', function () {

	var generateBoard = function () {

		var board = [];

		//GENERATING ROOT BOARD
    	for(var i = 0; i < 9; i ++) {
    		var temp = []
	    	for(var j = 0; j < 9; j ++) {
	    		temp.push({'value':(i*3 + Math.floor(i/3) + j) % 9 + 1,'x':i,'y':j,'change':false,'color':'black'});
	    	}
	    	board.push(temp);
    	}

	    //swap columns 20 times
	    for(var i = 0; i<20; i++){
	        var c1 = Math.floor(Math.random() * 3);
	        var c2 = (c1 + Math.floor(Math.random() * 2) + 1 ) % 3;
	        var b = Math.floor(Math.random() * 3);
	        var temp;
	        for(var i2=0;i2<9;i2++){
	            temp = board[i2][c1+b*3].value;
	            board[i2][c1+b*3].value = board[i2][c2+b*3].value;
	            board[i2][c2+b*3].value = temp;
	        }
	    }

	    //swap rows 20 times
	    for(var i = 0; i<20; i++){
	        var r1 = Math.floor(Math.random() * 3);
	        var r2 = (r1 + Math.floor(Math.random() * 2) + 1 ) % 3;
	        var b = Math.floor(Math.random() * 3);
	        var temp;
	        for(var i2=0;i2<9;i2++){
	            temp = board[r1+b*3][i2].value;
	            board[r1+b*3][i2].value = board[r2+b*3][i2].value;
	            board[r2+b*3][i2].value = temp;
	        }
	    }

	    //block out 20 blocks could have overlaps. Just for testing purposes
	    for(var i=0;i<20;i++){
	        var x = Math.floor(Math.random() * 9);
	        var y = Math.floor(Math.random() * 9);
	        if(board[x][y].value!=undefined)
	            board[x][y].value=undefined;
	        board[x][y].change=true;
	    }

	    return board;
	};

	return {
		generateBoard: generateBoard
	};
});