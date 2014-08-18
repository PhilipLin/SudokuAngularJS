app.controller('sudokuCtrl', [ '$scope', 'generateBoardService','validateBoardService', function($scope, generateBoardService, validateBoardService) {

    $scope.storage = generateBoardService.generateBoard();
    validateBoardService.checkBoard($scope.storage);
    $scope.currBlock;
    $scope.beforeColor;
    $scope.click_Action = function (block) {
        if($scope.currBlock === block){
            $scope.currBlock.color = $scope.beforeColor;;
            $scope.currBlock = undefined;
        }
        else{
            if($scope.currBlock){
                $scope.currBlock.color = $scope.beforeColor;
            }
            $scope.beforeColor=block.color;
            $scope.currBlock = block;
            block.color = 'blue';
        }
    }
	$scope.keydown = function (event) {
        if(event.keyCode >= 48 && event.keyCode<=57) {
            if($scope.currBlock){
                if(event.keyCode==48)
                    $scope.currBlock.value=undefined;
                else
                    $scope.currBlock.value=event.keyCode-48;
                if(validateBoardService.checkBoard($scope.storage))
                	alert("YOU WON!");
                if($scope.currBlock.color === 'green')
                    $scope.beforeColor = 'green';
                else
                {
                    $scope.currBlock.color = 'blue';
                    $scope.beforeColor = 'black';
                }
            }
        }
	}
    $scope.set_Color = function (block) {
        return block.color+' '+block.background+' square';
    }
    $scope.set_Bold = function (block) {
        if (block.change === false)
            return {'color':'black', 'font-weight': '800', 'font-size': '25px'};
        return {'color':'black', 'font-weight': 'normal', 'font-size': '20px'};
    };

}]);