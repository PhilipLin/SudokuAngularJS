app.service('actionBoardService', function () {


	var newGame = function(scope, generateBoardService, validateBoardService, routeParams){
        scope.storage = generateBoardService.generateBoard(routeParams.difficulty);
        validateBoardService.checkBoard(scope.storage);
        scope.currBlock = undefined;
        scope.beforeColor = undefined;
    }

	var clearGame = function(scope, validateBoardService){
        for(var i = 0; i< scope.storage.length; i++)
            for(var j = 0; j< scope.storage[0].length; j++)
                if(scope.storage[i][j].change)
                    scope.storage[i][j].setValue(undefined);
        validateBoardService.checkBoard(scope.storage);
    }

	 var clickBlock = function (scope, block) {
        if(scope.currBlock === block){
            scope.currBlock.setColor(scope.beforeColor);
            scope.currBlock = undefined;
            return;
        }
        
        if(scope.currBlock) {
            scope.currBlock.color = scope.beforeColor;
        }

        scope.beforeColor = block.color;
        scope.currBlock = block;
        block.setColor('blue');
    }


	var keyDown = function (scope, event, validateBoardService) {
        if(event.keyCode > 48 && event.keyCode<58 && scope.currBlock && scope.currBlock.change) {
            scope.currBlock.setValue(event.keyCode-48);
            if(validateBoardService.checkBoard(scope.storage)) {//WINNING CONDITIONS
            	alert("YOU WON!");
                return;
            }

            if(scope.currBlock.color === 'green') {
                scope.beforeColor = 'green';
                return;
            }
            scope.currBlock.setColor('blue');
            scope.beforeColor = 'black';
            return;
        }
        if(scope.currBlock && scope.currBlock.change) {//if pressed something other than 1-9, make it blank again
            scope.currBlock.setValue(undefined);
        }
	}
	
	return {

		keyDown : keyDown,
		clickBlock : clickBlock,
		clearGame : clearGame,
		newGame : newGame

	};
});