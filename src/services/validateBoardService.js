app.service('validateBoardService', function () {

	var checkBoard = function(board){
		var check = true;
		//repaint to black because changes could have happened to the coloring
		for(var x = 0 ; x < board[0].length; x++)
			for(var y = 0; y < board.length; y++)
				if(board[x][y].color !== 'blue')
					board[x][y].setColor('black');

		//METHOD OF CHECKING: array of 9 falses
		//Loop through ROW/COLUMN/BOX and for each value change total[val-1] to true
		//Then can just logical and all of them

		//CHECK ALL THE ROWS AND COLOR ACCORDINGLY
		for(var x = 0; x < board[0].length; x++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var y = 0; y < board.length; y++)
			    total[board[x][y].value-1]=true;
			//row does not have 123456789
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
				for(var y = 0; y < board.length; y++)
					if(board[x][y].color!=='green')
			    		board[x][y].setColor('black');
			    check = false;//you didn't win
			}
			//row has 123456789
			else{
				for(var y = 0; y < board.length; y++)
			    	board[x][y].setColor('green');
			}
		}

		//CHECK ALL THE COLUMNS AND COLOR ACCORDINGLY
		for(var y = 0; y < board.length; y++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var x = 0; x < board[0].length; x++)
			    total[board[x][y].value-1] = true;
			//column does not have 123456789
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
				for(var x = 0; x < board[0].length; x++)
					if(board[x][y].color !== 'green')
			    		board[x][y].setColor('black');
			    check = false;//you didn't win
			}
			//column has 123456789
			else{
				for(var x = 0; x < board[0].length; x++)
			    	board[x][y].setColor('green');
			}
		}

		//CHECK ALL THE 9 BOXES AND COLOR ACCORDINGLY
		for(var x = 0; x < board[0].length; x+=3){
			for(var y = 0; y < board.length; y+=3){
				var total = [false, false, false, false, false, false, false, false, false];
			    total[board[x][y].value-1] = true;
			    total[board[x][y+1].value-1] = true;
			    total[board[x][y+2].value-1] = true;
			    total[board[x+1][y].value-1] = true;
			    total[board[x+1][y+1].value-1] = true;
			    total[board[x+1][y+2].value-1] = true;
			    total[board[x+2][y].value-1] = true;
			    total[board[x+2][y+1].value-1] = true;
			    total[board[x+2][y+2].value-1] = true;
			    //box does not have 123456789
				if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
					if(board[x][y].color !== 'green') { board[x][y].setColor('black'); }
					if(board[x][y+1].color !== 'green') { board[x][y+1].setColor('black'); }
				    if(board[x][y+2].color !== 'green') { board[x][y+2].setColor('black'); }
				    if(board[x+1][y].color !== 'green') { board[x+1][y].setColor('black'); }
				    if(board[x+1][y+1].color !== 'green') { board[x+1][y+1].setColor('black'); }
				    if(board[x+1][y+2].color !== 'green') { board[x+1][y+2].setColor('black'); }
				    if(board[x+2][y].color !== 'green') { board[x+2][y].setColor('black'); }
				    if(board[x+2][y+1].color !== 'green') { board[x+2][y+1].setColor('black');}
				    if(board[x+2][y+2].color !== 'green') { board[x+2][y+2].setColor('black'); }
				    check = false;//you didn't win
				}
				//box has 123456789
				else{
					board[x][y].setColor('green');
				    board[x][y+1].setColor('green');
				    board[x][y+2].setColor('green');
				    board[x+1][y].setColor('green');
				    board[x+1][y+1].setColor('green');
				    board[x+1][y+2].setColor('green');
				    board[x+2][y].setColor('green');
				    board[x+2][y+1].setColor('green');
				    board[x+2][y+2].setColor('green');
				}
			}
		}
		//If check is still true, then you have won, if not then you haven't won
		return check;
	}

	return {
		checkBoard: checkBoard
	};
});