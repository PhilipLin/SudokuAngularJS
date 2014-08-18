app.service('validateBoardService', function () {

	var checkBoard = function(board){
		//CHECK ALL THE ROWS
		for(var x=0;x<board[0].length;x++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var y=0;y<board.length;y++)
			    total[board[x][y].value-1]=true;
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
			    return false;
			}
		}
		//CHECK ALL THE COLUMNS
		for(var y=0;y<board.length;y++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var x=0;x<board[0].length;x++)
			    total[board[x][y].value-1]=true;
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8]))
			    return false;
		}
		//CHECK ALL THE 9 BOXES
		for(var x=0;x<board[0].length;x+=3){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var y=0;y<board.length;y+=3){
			    total[board[x][y].value-1]=true;
			    total[board[x][y+1].value-1]=true;
			    total[board[x][y+2].value-1]=true;
			    total[board[x+1][y].value-1]=true;
			    total[board[x+1][y+1].value-1]=true;
			    total[board[x+1][y+2].value-1]=true;
			    total[board[x+2][y].value-1]=true;
			    total[board[x+2][y+1].value-1]=true;
			    total[board[x+2][y+2].value-1]=true;
				if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8]))
				    return false;
			}
		}
		return true;
	}

	return {
		checkBoard: checkBoard
	};
});