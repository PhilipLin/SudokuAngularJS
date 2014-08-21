app.controller('sudokuCtrl', [ '$scope', 'generateBoardService', 'validateBoardService', function($scope, generateBoardService, validateBoardService) {

    $scope.storage = generateBoardService.generateBoard();
    validateBoardService.checkBoard($scope.storage);
    $scope.currBlock;
    $scope.beforeColor;
    //store information about the block you clicked and change the color to blue to better see it
    $scope.new_Game = function(){
        $scope.storage = generateBoardService.generateBoard();
        validateBoardService.checkBoard($scope.storage);
        $scope.currBlock=undefined;
        $scope.beforeColor=undefined;
    }
    $scope.clear_Game = function(){
        for(var i = 0; i< $scope.storage.length; i++)
            for(var j = 0; j< $scope.storage[0].length; j++)
                if($scope.storage[i][j].change)
                    $scope.storage[i][j].setValue(undefined);
        validateBoardService.checkBoard($scope.storage);
    }
    $scope.click_Action = function (block) {
        if($scope.currBlock === block){
            $scope.currBlock.setColor($scope.beforeColor);
            $scope.currBlock = undefined;
        }
        else{
            if($scope.currBlock)
                $scope.currBlock.color = $scope.beforeColor;
            $scope.beforeColor = block.color;
            $scope.currBlock = block;
            block.setColor('blue');
        }
    }
    //if keydown and clicked, then change the value of the block accordingly
	$scope.keydown = function (event) {
        if(event.keyCode > 48 && event.keyCode<58 && $scope.currBlock.change) {
            $scope.currBlock.setValue(event.keyCode-48);
            if(validateBoardService.checkBoard($scope.storage))//WINNING CONDITIONS
            	alert("YOU WON!");
            if($scope.currBlock.color === 'green')
                $scope.beforeColor = 'green';
            else{
                $scope.currBlock.setColor('blue');
                $scope.beforeColor = 'black';
            }
        }
        else if($scope.currBlock.change)//if pressed something other than 1-9, make it blank again
            $scope.currBlock.setValue(undefined);
	}
    //sets the class of the block: color and the background
    $scope.set_Color = function (block) {
        return block.color+' '+block.background+' square';
    }
    //sets the style of the value inside the block, bold or not bold
    $scope.set_Bold = function (block) {
        if(!block.change)
            return { 'color': 'black', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
        return {'font-style': 'italic', 'color' : '#b25fdc', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
    };
}])
.directive('sudokuHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/sudoku-Header.html'
    };
});