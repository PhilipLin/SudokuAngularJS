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
    $scope.click_Action = function (block) {
        if($scope.currBlock === block){
            $scope.currBlock.color = $scope.beforeColor;;
            $scope.currBlock = undefined;
        }
        else{
            if($scope.currBlock){
                $scope.currBlock.color = $scope.beforeColor;
            }
            $scope.beforeColor = block.color;
            $scope.currBlock = block;
            block.color = 'blue';
        }
    }
    //if keydown and clicked, then change the value of the block accordingly
	$scope.keydown = function (event) {
        console.log(event.keyCode);
        if(event.keyCode > 48 && event.keyCode<58 && $scope.currBlock) {
            $scope.currBlock.value=event.keyCode-48;
            if(validateBoardService.checkBoard($scope.storage))//WINNING CONDITIONS
            	alert("YOU WON!");
            if($scope.currBlock.color === 'green')
                $scope.beforeColor = 'green';
            else{
                $scope.currBlock.color = 'blue';
                $scope.beforeColor = 'black';
            }
        }
        else if($scope.currBlock)//if pressed something other than 1-9, make it blank again
            $scope.currBlock.value = undefined;
	}
    //sets the class of the block: color and the background
    $scope.set_Color = function (block) {
        return block.color+' '+block.background+' square';
    }
    //sets the style of the value inside the block, bold or not bold
    $scope.set_Bold = function (block) {
        if(block.change === false)
            return { 'color': 'black', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
        return {'font-style': 'italic', 'color' : '#b25fdc', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
    };
}]);