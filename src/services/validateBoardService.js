app.service('validateBoardService', function () {

	var checkBoard = function(board){
		//CHECK ALL THE ROWS
		var check=true;
		for(var x=0;x<board[0].length;x++)
			for(var y=0;y<board.length;y++)
				if(board[x][y].color!=='blue')
					board[x][y].color='black';

		for(var x=0;x<board[0].length;x++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var y=0;y<board.length;y++)
			    total[board[x][y].value-1]=true;
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
				for(var y=0;y<board.length;y++)
					if(board[x][y].color!=='green')
			    		board[x][y].color='black';
			    check = false;
			}
			else{
				for(var y=0;y<board.length;y++)
			    	board[x][y].color='green';
			}
		}
		//CHECK ALL THE COLUMNS
		for(var y=0;y<board.length;y++){
			var total = [false, false, false, false, false, false, false, false, false];
			for(var x=0;x<board[0].length;x++)
			    total[board[x][y].value-1]=true;
			if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
				for(var x=0;x<board[0].length;x++)
					if(board[x][y].color!=='green')
			    		board[x][y].color='black';
			    check =  false;
			}
			else{
				for(var x=0;x<board[0].length;x++)
			    	board[x][y].color='green';
			}
		}
		//CHECK ALL THE 9 BOXES
		for(var x=0;x<board[0].length;x+=3){
			for(var y=0;y<board.length;y+=3){
				var total = [false, false, false, false, false, false, false, false, false];
			    total[board[x][y].value-1]=true;
			    total[board[x][y+1].value-1]=true;
			    total[board[x][y+2].value-1]=true;
			    total[board[x+1][y].value-1]=true;
			    total[board[x+1][y+1].value-1]=true;
			    total[board[x+1][y+2].value-1]=true;
			    total[board[x+2][y].value-1]=true;
			    total[board[x+2][y+1].value-1]=true;
			    total[board[x+2][y+2].value-1]=true;
				if(!(total[0] && total[1] && total[2] && total[3] && total[4] && total[5] && total[6] && total[7] && total[8])){
					if(board[x][y].color!== 'green') { board[x][y].color='black'; }
					if(board[x][y+1].color!== 'green') { board[x][y+1].color='black'; }
				    if(board[x][y+2].color!== 'green') { board[x][y+2].color='black'; }
				    if(board[x+1][y].color!== 'green') { board[x+1][y].color='black'; }
				    if(board[x+1][y+1].color!== 'green') { board[x+1][y+1].color='black'; }
				    if(board[x+1][y+2].color!== 'green') { board[x+1][y+2].color='black'; }
				    if(board[x+2][y].color!== 'green') { board[x+2][y].color='black'; }
				    if(board[x+2][y+1].color!== 'green') { board[x+2][y+1].color='black'; }
				    if(board[x+2][y+2].color!== 'green') { board[x+2][y+2].color='black'; }
				    check = false;
				}
				else{
					board[x][y].color='green';
				    board[x][y+1].color='green';
				    board[x][y+2].color='green';
				    board[x+1][y].color='green';
				    board[x+1][y+1].color='green';
				    board[x+1][y+2].color='green';
				    board[x+2][y].color='green';
				    board[x+2][y+1].color='green';
				    board[x+2][y+2].color='green';
				}
			}
		}
		return check;
	}

	return {
		checkBoard: checkBoard
	};
});