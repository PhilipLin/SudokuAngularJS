app.controller('sudokuCtrl', [ '$scope', 'generateBoardService','validateBoardService', function($scope, generateBoardService, validateBoardService) {

    $scope.storage = generateBoardService.generateBoard();
    $scope.currBlock;

    $scope.click_Action = function (block) {
        if($scope.currBlock===block){
            $scope.currBlock.color='black';
            $scope.currBlock = undefined;
        }
        else{
            if($scope.currBlock)
                $scope.currBlock.color='black'
            $scope.currBlock = block;
            block.color='blue';
        }
    }

	$scope.keydown = function (event) {
        if(event.keyCode >= 49 && event.keyCode<=57) {
            if($scope.currBlock){
                $scope.currBlock.value=event.keyCode-48;
                if(validateBoardService.checkBoard($scope.storage))
                	alert("YOU WON!");
            }
        }
	}

    $scope.set_Color = function (block) {
        if(block.color==='blue')
        	return 'blue square';
        return 'black square';

    }
    $scope.set_Bold = function (block) {
        if (block.change === false)
            return {'font-weight': '800', 'font-size': '25px'};
        return {'font-weight': 'normal', 'font-size': '20px'};
    };
    console.log($scope.storage);

}]);