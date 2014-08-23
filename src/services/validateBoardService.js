app.service('validateBoardService', function () {
	//METHOD OF CHECKING: array of 9 falses
	//Loop through ROW/COLUMN/BOX and for each value change total[val-1] to true
	//Then can just 'logical AND' all of them
	function checkerRCB(){
		var total = [false, false, false, false, false, false, false, false, false];
		this.val = function (val) {
			total[val-1] = true;
		}
		this.reset = function(){
			for(var i = 0; i<total.length; i++)
				total[i] = false;
		}
		this.check = function(){
			return (total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8]);
		}
	}

	var checkBoard = function(board){
		var check = true;

		//repaint to black because changes could have happened to the coloring
		var checkHelper = new checkerRCB();
		for(var x = 0 ; x < board[0].length; x++){
			for(var y = 0; y < board.length; y++){
				if(board[x][y].color !== 'blue'){
					board[x][y].setColor('black');
				}
			}
		}

		//CHECK ALL THE ROWS AND COLOR ACCORDINGLY
		for(var x = 0; x < board[0].length; x++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var y = 0; y < board.length; y++)
			    checkHelper.val(board[x][y].value);
			//row does not have 123456789
			if(!checkHelper.check()){
				for(var y = 0; y < board.length; y++){
					if(board[x][y].color!=='green')
			    		board[x][y].setColor('black');
			    }
			    check = false;//you didn't win
			}
			//row has 123456789
			else{
				for(var y = 0; y < board.length; y++){
			    	board[x][y].setColor('green');
			    }
			}
			checkHelper.reset();
		}
		//CHECK ALL THE COLUMNS AND COLOR ACCORDINGLY
		for(var y = 0; y < board.length; y++){
			for(var x = 0; x < board[0].length; x++){
			    checkHelper.val(board[x][y].value);
			}
			//column does not have 123456789
			if(!checkHelper.check()){
				for(var x = 0; x < board[0].length; x++){
					if(board[x][y].color !== 'green')
			    		board[x][y].setColor('black');
			    }
			    check = false;//you didn't win
			}
			//column has 123456789
			else{
				for(var x = 0; x < board[0].length; x++){
			    	board[x][y].setColor('green');
			    }
			}
			checkHelper.reset();
		}
		//CHECK ALL THE 9 BOXES AND COLOR ACCORDINGLY
		for(var x = 0; x < board[0].length; x+=3){
			for(var y = 0; y < board.length; y+=3){
			    checkHelper.val(board[x][y].value);
			    checkHelper.val(board[x][y+1].value);
			    checkHelper.val(board[x][y+2].value);
			    checkHelper.val(board[x+1][y].value);
			    checkHelper.val(board[x+1][y+1].value);
			    checkHelper.val(board[x+1][y+2].value);
			    checkHelper.val(board[x+2][y].value);
			    checkHelper.val(board[x+2][y+1].value);
			    checkHelper.val(board[x+2][y+2].value);
			    //box does not have 123456789
				if(!checkHelper.check()){
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
				checkHelper.reset();
			}
		}
		//If check is still true, then you have won, if not then you haven't won
		return check;
	}

	return {
		checkBoard: checkBoard
	};
});